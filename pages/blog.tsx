import Head from "next/head";
import { getBaseUrl } from "../lib/getBaseUrl";

export default function BlogPage() {
  const baseUrl = getBaseUrl();
  return (
    <>
      <Head>
        <title>Blog | Mi Sitio Web</title>
        <meta name="description" content="Lee nuestras últimas noticias, artículos y consejos." />
        <meta property="og:title" content="Blog | Mi Sitio Web" />
        <meta property="og:description" content="Lee nuestras últimas noticias, artículos y consejos." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${baseUrl}/blog`} />
        <meta property="og:image" content={`${baseUrl}/images/og-blog.jpg`} />
      </Head>
      <section className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestro Blog</h2>
          <p className="text-gray-600 text-lg">
            Lee nuestras publicaciones más recientes sobre tecnología, diseño y desarrollo web.
          </p>
      </section>
    </>
  );
}
