import { getBaseUrl } from "../../lib/getBaseUrl";

export default async function handler(req, res) {
  const baseUrl = getBaseUrl();

  // Ejemplo de posts dinámicos
  const posts = [
    { slug: "primer-post", updatedAt: "2025-06-10" },
    { slug: "como-usar-nextjs", updatedAt: "2025-06-14" },
    { slug: "seo-en-nextjs", updatedAt: "2025-06-15" }
  ];

  const staticRoutes = ["", "blog", "contacto"];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes
  .map(
    (route) => `
  <url>
    <loc>${baseUrl}/${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`
  )
  .join("")}

${posts
  .map(
    (post) => `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${post.updatedAt}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join("")}
</urlset>`.trim();

  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(sitemap);
}
