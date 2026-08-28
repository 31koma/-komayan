import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const source = await readFile(new URL("../src/pages/index.astro", import.meta.url), "utf8");
const style = source.match(/<style>([\s\S]*?)<\/style>/u)?.[1] ?? "";
const latestPostsStyles = style.match(/\.latest-posts \{[\s\S]*?(?=\n  \.turf-bottom \{)/u)?.[0] ?? "";

test("空プレースホルダを削除し、失敗時は記事節を隠す", () => {
  assert.doesNotMatch(source, /\.turf-panel::after/u);
  assert.match(source, /<section class="latest-posts"[^>]* hidden>/u);
  assert.match(source, /\.latest-posts\[hidden\]\s*\{\s*display: none;/u);
});

test("記事カードは既存の文字・色・角丸だけを使う", () => {
  const fontSizes = [...latestPostsStyles.matchAll(/font-size:\s*([^;]+);/gu)].map((match) => match[1]);
  const radii = [...latestPostsStyles.matchAll(/border-radius:\s*([^;]+);/gu)].map((match) => match[1]);

  assert.ok(fontSizes.length > 0);
  assert.ok(fontSizes.every((size) => size === "12.2px" || size === "14.1px"));
  assert.ok(radii.every((radius) => radius === "6px" || radius === "8px"));
  assert.doesNotMatch(latestPostsStyles, /#[\da-f]{3,8}/iu);
  assert.doesNotMatch(latestPostsStyles, /(?:^|\s)height:\s*[^;]+;/u);
});

test("390pxでも横にはみ出さない宣言を持つ", () => {
  assert.match(latestPostsStyles, /\.latest-post-card\s*\{[\s\S]*?min-width:\s*0;/u);
  assert.match(latestPostsStyles, /\.latest-post-card\s*\{[\s\S]*?overflow:\s*hidden;/u);
  assert.match(latestPostsStyles, /overflow-wrap:\s*anywhere;/u);
});

test("購読ボタンのリンク先を維持する", () => {
  assert.match(
    source,
    /class="substack-cta"[\s\S]*?href="https:\/\/substack\.com\/@komat6"/u,
  );
});
