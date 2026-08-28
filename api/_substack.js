import { XMLParser } from "fast-xml-parser";

const FEED_URL = "https://komat6.substack.com/feed";
const MAX_FEED_BYTES = 2_000_000;

const parser = new XMLParser({
  ignoreAttributes: false,
  processEntities: true,
  trimValues: true,
});

function decodeEntities(value) {
  return value
    .replace(/&#x([\da-f]+);/giu, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&#(\d+);/gu, (_, code) => String.fromCodePoint(Number.parseInt(code, 10)))
    .replace(/&nbsp;/giu, " ")
    .replace(/&quot;/giu, '"')
    .replace(/&apos;/giu, "'")
    .replace(/&lt;/giu, "<")
    .replace(/&gt;/giu, ">")
    .replace(/&amp;/giu, "&");
}

function plainText(value) {
  if (typeof value !== "string") return "";

  return decodeEntities(value)
    .replace(/<[^>]*>/gu, " ")
    .replace(/\s+/gu, " ")
    .trim();
}

function truncate(value, limit = 120) {
  const characters = [...value];
  return characters.length > limit ? `${characters.slice(0, limit).join("")}…` : value;
}

function normalizeLink(value) {
  if (typeof value !== "string") return null;

  try {
    const url = new URL(value);
    return url.protocol === "https:" && url.hostname === "komat6.substack.com" ? url.toString() : null;
  } catch {
    return null;
  }
}

export function parseLatestPosts(xml) {
  if (typeof xml !== "string" || xml.length === 0 || xml.length > MAX_FEED_BYTES) return [];

  const document = parser.parse(xml);
  const rawItems = document?.rss?.channel?.item;
  const items = Array.isArray(rawItems) ? rawItems : rawItems ? [rawItems] : [];

  return items
    .map((item) => {
      const title = plainText(item?.title);
      const excerpt = truncate(plainText(item?.description));
      const url = normalizeLink(item?.link);
      const publishedAt = new Date(item?.pubDate);

      if (!title || !excerpt || !url || Number.isNaN(publishedAt.getTime())) return null;

      return {
        title,
        excerpt,
        url,
        publishedAt: publishedAt.toISOString(),
      };
    })
    .filter(Boolean)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, 3);
}

export async function buildLatestPostsPayload({ fetchImpl = fetch, feedUrl = FEED_URL } = {}) {
  try {
    const response = await fetchImpl(feedUrl, {
      headers: { Accept: "application/rss+xml, application/xml;q=0.9" },
      signal: AbortSignal.timeout(6_000),
    });

    if (!response.ok) return { posts: [] };

    const contentLength = Number(response.headers.get("content-length") ?? 0);
    if (contentLength > MAX_FEED_BYTES) return { posts: [] };

    return { posts: parseLatestPosts(await response.text()) };
  } catch {
    return { posts: [] };
  }
}
