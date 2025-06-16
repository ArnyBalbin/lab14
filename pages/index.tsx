import Head from "next/head";
import { getBaseUrl } from "../lib/getBaseUrl";

const baseUrl = getBaseUrl();

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Inicio | Mi Sitio Web</title>
        <meta name="description" content="Bienvenido al sitio web oficial. Descubre nuestros servicios y novedades." />
        <meta property="og:title" content="Inicio | Mi Sitio Web" />
        <meta property="og:description" content="Bienvenido al sitio web oficial. Descubre nuestros servicios y novedades." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${baseUrl}/`} />
        <meta property="og:image" content={`${baseUrl}/images/og-home.jpg`} />
      </Head>
      <main>
        <h1>Página de Inicio</h1>
      </main>
    </>
  );
}
