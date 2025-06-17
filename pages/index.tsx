import Head from "next/head";
import Link from "next/link";
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

      <header className="bg-blue-600 text-white py-4 shadow">
        <nav className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-xl font-semibold">Mi Sitio Web</h1>
          <ul className="flex space-x-4">
            <li>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:underline">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 via-white to-blue-200 px-4">
        <h2 className="text-4xl font-bold text-blue-700 mb-4">Bienvenido a Mi Sitio Web</h2>
        <p className="text-lg text-gray-700 max-w-xl text-center">
          Descubre nuestros servicios, novedades y todo lo que podemos ofrecerte para mejorar tu experiencia online.
        </p>
      </main>
    </>
  );
}
