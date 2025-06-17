import type { NextApiRequest, NextApiResponse } from "next";
import { getBaseUrl } from "../../lib/getBaseUrl";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const baseUrl = getBaseUrl() || "http://localhost:3000"; // Desarrollo local

  // Simulación: rutas dinámicas
  const rutas = [
    "", // index
    "blog",
    "contacto",
    "blog/post-1",
    "blog/post-2",
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${rutas
    .map(
      (ruta) => `
  <url>
    <loc>${baseUrl}/${ruta}</loc>
  </url>`
    )
    .join("")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(sitemap);
}
