import assert from "node:assert/strict";
import test from "node:test";

import { buildLatestPostsPayload, parseLatestPosts } from "../api/_substack.js";

const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
  <item>
    <title><![CDATA[検証その3]]></title>
    <description><![CDATA[&#35477;&#29983;&#26085;&#12363;&#12425;&#32032;&#36074;&#12434;&#35211;&#12427;&#12290;]]></description>
    <link>https://komat6.substack.com/p/test-3</link>
    <pubDate>Wed, 26 Aug 2026 12:00:00 GMT</pubDate>
  </item>
  <item>
    <title><![CDATA[検証その2]]></title>
    <description><![CDATA[理論とデータを検証する。]]></description>
    <link>https://komat6.substack.com/p/test-2</link>
    <pubDate>Tue, 25 Aug 2026 12:00:00 GMT</pubDate>
  </item>
</channel></rss>`;

test("RSSの記事を日付順に整える", () => {
  const posts = parseLatestPosts(feed);

  assert.equal(posts.length, 2);
  assert.equal(posts[0].title, "検証その3");
  assert.equal(posts[0].excerpt, "誕生日から素質を見る。");
  assert.equal(posts[0].url, "https://komat6.substack.com/p/test-3");
});

test("フィード取得失敗時は空配列を返す", async () => {
  const payload = await buildLatestPostsPayload({
    fetchImpl: async () => {
      throw new Error("deliberate feed failure");
    },
  });

  assert.deepEqual(payload, { posts: [] });
});
