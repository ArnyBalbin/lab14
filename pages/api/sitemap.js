export async function getServerSideProps() {
  return { props: {} };
}

export default async function handler(req, res) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"; // Desarrollo local

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
  res.write(sitemap);
  res.end();
}
