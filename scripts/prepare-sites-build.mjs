import { mkdir, readdir, rename, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const dist = resolve(root, "dist");
const client = resolve(dist, "client");
const server = resolve(dist, "server");

await rm(client, { recursive: true, force: true });
await rm(server, { recursive: true, force: true });
await mkdir(client, { recursive: true });

for (const entry of await readdir(dist)) {
  if (entry === ".openai" || entry === "client" || entry === "server") continue;
  await rename(resolve(dist, entry), resolve(client, entry));
}

await mkdir(server, { recursive: true });
await writeFile(
  resolve(server, "index.js"),
  `export default {
  async fetch(request, env) {
    if (!env.ASSETS) {
      return new Response("Static assets binding is unavailable.", { status: 500 });
    }

    const response = await env.ASSETS.fetch(request);
    if (response.status !== 404) return response;

    const url = new URL(request.url);
    if (!url.pathname.includes(".")) {
      url.pathname = "/index.html";
      return env.ASSETS.fetch(new Request(url, request));
    }

    return response;
  },
};
`,
);
