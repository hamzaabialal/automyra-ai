// Local preview server with clean URLs (/services -> services.html). Run: node serve.mjs
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, extname, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));
const port = process.env.PORT || 4321;
const types = { ".html": "text/html; charset=utf-8", ".mjs": "text/javascript", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".json": "application/json" };

async function resolve(path) {
  const base = join(root, normalize(decodeURIComponent(path)).replace(/^(\.\.[/\\])+/, ""));
  for (const p of [base, base + ".html", join(base, "index.html")]) {
    try { if ((await stat(p)).isFile()) return p; } catch {}
  }
}

createServer(async (req, res) => {
  const url = new URL(req.url, "http://x");
  // /__skip-intro?to=/page opens a page without the intro loader (used for screenshots)
  if (url.pathname === "/__skip-intro") {
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end(`<script>sessionStorage.setItem("fc-loaded","1");location.replace(${JSON.stringify(url.searchParams.get("to") || "/")})</script>`);
  }
  const file = await resolve(url.pathname);
  if (!file) { res.writeHead(404); return res.end("Not found"); }
  res.writeHead(200, { "Content-Type": types[extname(file)] || "application/octet-stream" });
  let body = await readFile(file);
  // ?__y=1200 scrolls the page after load (used for screenshots)
  const y = Number(url.searchParams.get("__y"));
  if (y && extname(file) === ".html") body = String(body).replace("</body>", `<script>setTimeout(()=>scrollTo(0,${y}),2500)</script></body>`);
  res.end(body);
}).listen(port, () => console.log(`http://localhost:${port}`));
