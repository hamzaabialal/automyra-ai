// Rebuilds the site from _original/ with the rules in content.mjs. Run: node apply.mjs
import { readdirSync, readFileSync, writeFileSync, statSync, mkdirSync, rmSync } from "node:fs";
import { join, relative, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));
const original = join(root, "_original");
const { rules, html, slugs = {}, booking, skip = [] } = await import(`./content.mjs?t=${Date.now()}`);

const escapeHtml = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function files(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? files(p) : /\.(html|mjs)$/.test(f) ? [p] : [];
  });
}

const hits = new Map();
const count = (key, n) => hits.set(key, (hits.get(key) || 0) + n);

// _app/ is generated from _original/_framer/, so start it fresh each time
rmSync(join(root, "_app"), { recursive: true, force: true });

for (const src of files(original)) {
  const rel = relative(original, src);
  if (skip.includes(rel)) continue;
  let text = readFileSync(src, "utf8");
  const isHtml = rel.endsWith(".html");
  for (const [from, to, group = from] of isHtml ? [...html, ...rules] : rules) {
    if (from instanceof RegExp) {
      const n = (text.match(from) || []).length;
      if (n) text = text.replace(from, to);
      count(group, n);
      continue;
    }
    let n = text.split(from).length - 1;
    if (n) text = text.split(from).join(to);
    if (isHtml && escapeHtml(from) !== from) {
      const m = text.split(escapeHtml(from)).length - 1;
      if (m) text = text.split(escapeHtml(from)).join(escapeHtml(to));
      n += m;
    }
    count(group, n);
  }
  // renamed pages: work/<old-slug>.html -> work/<new-slug>.html (same for journal)
  const out = rel.replace(/^(work|journal)\/([^/]+)\.html$/, (m, d, s) => `${d}/${slugs[s] || s}.html`);
  const target = out.replace(/^_framer\//, "_app/").replace(/^_app\/framer\./, "_app/runtime.");
  // The old booking page now forwards to Calendly
  if (/^book[a-z0-9]*\.html$/.test(rel)) text = text.replace("<head>", `<head><meta http-equiv="refresh" content="0;url=${booking}">`);
  mkdirSync(dirname(join(root, target)), { recursive: true });
  writeFileSync(join(root, target), text);
}

const unused = [...new Set([...rules, ...html].map(([from, , group = from]) => group))]
  .filter((g) => !hits.get(g))
  .map((g) => [g]);
console.log(`Applied ${rules.length + html.length} rules.`);
if (unused.length) console.log("No match for:\n" + unused.map(([f]) => "  - " + String(f).slice(0, 90)).join("\n"));
