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

      <section className="text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-4">Bienvenido a Mi Sitio Web</h2>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          Descubre nuestros servicios, novedades y todo lo que podemos ofrecerte para mejorar tu experiencia online.
        </p>
      </section>
    </>
  );
}
