import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const port = Number(process.env.PORT || 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".gif": "image/gif",
  ".woff2": "font/woff2",
  ".ico": "image/x-icon",
};
http
  .createServer(async (request, response) => {
    try {
      const pathname = decodeURIComponent(
        new URL(request.url, "http://localhost").pathname,
      );
      const file = path.resolve(root, "." + pathname);
      const relative = path.relative(root, file);
      if (
        relative.startsWith("..") ||
        path.isAbsolute(relative) ||
        relative
          .split(path.sep)
          .some((part) => part.startsWith(".") || part === "node_modules")
      ) {
        response.writeHead(403).end("Forbidden");
        return;
      }
      const resolved = (await stat(file)).isDirectory()
        ? path.join(file, "index.html")
        : file;
      const content = await readFile(resolved);
      response.writeHead(200, {
        "Content-Type":
          types[path.extname(resolved).toLowerCase()] ||
          "application/octet-stream",
        "Cache-Control": "no-cache",
        "X-Content-Type-Options": "nosniff",
      });
      response.end(content);
    } catch {
      response
        .writeHead(404, { "Content-Type": "text/plain; charset=utf-8" })
        .end("File tidak ditemukan.");
    }
  })
  .listen(port, "127.0.0.1", () =>
    console.log(`Weblab ready at http://localhost:${port}`),
  );
