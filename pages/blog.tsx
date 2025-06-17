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
      <main className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Nuestro Blog</h1>
          <p className="text-gray-600 text-lg">
            Lee nuestras publicaciones más recientes sobre tecnología, diseño y desarrollo web.
          </p>
        </div>
      </main>
    </>
  );
}
