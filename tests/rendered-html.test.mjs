import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
import worker from "../dist/server/index.js";

test("production page offers a real portal inquiry and labels fictional content", async () => {
  const response = await worker.fetch(new Request("https://example.com/", { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type"), /^text\/html/i);
  assert.equal(response.headers.get("X-Content-Type-Options"), "nosniff");
  assert.equal(response.headers.get("X-Frame-Options"), "DENY");
  const html = await response.text();
  assert.match(html, /вымышленный специалист/);
  assert.match(html, /Вымышленные примеры отзывов/);
  assert.match(html, /st8dom.ru\/contact\/\?topic=website/);
  assert.match(html, /rel="canonical"[^>]*href="https:\/\/st8dom.ru\/demos\/psychologist\/"/);
  assert.doesNotMatch(html, /codex-preview|tel:\+79991234567|hello@annamironova.ru|<form/);
});

test("SEO assets are packaged in the public output", async () => {
  const robots = await readFile(new URL("../dist/client/robots.txt", import.meta.url), "utf8");
  const sitemap = await readFile(new URL("../dist/client/sitemap.xml", import.meta.url), "utf8");
  assert.match(robots, /Sitemap:/);
  assert.match(sitemap, /https:\/\/st8dom.ru\/demos\/psychologist\//);
});
