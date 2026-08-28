import { buildLatestPostsPayload } from "./_substack.js";

export default {
  async fetch() {
    const payload = await buildLatestPostsPayload();
    const hasPosts = payload.posts.length > 0;

    return Response.json(payload, {
      headers: {
        "Cache-Control": hasPosts
          ? "public, s-maxage=1800, stale-while-revalidate=86400"
          : "no-store",
      },
    });
  },
};
