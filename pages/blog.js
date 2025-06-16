import Head from "next/head";

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog | Mi Sitio Web</title>
        <meta name="description" content="Lee los artículos más recientes de nuestro blog." />
        <meta property="og:title" content="Blog | Mi Sitio Web" />
        <meta property="og:description" content="Lee los artículos más recientes de nuestro blog." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tusitio.com/blog" />
      </Head>
      <main>
        <h1>Blog</h1>
      </main>
    </>
  );
}
