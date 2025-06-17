import Head from "next/head";
import { getBaseUrl } from "../lib/getBaseUrl";

export default function ContactoPage() {
  const baseUrl = getBaseUrl();
  return (
    <>
      <Head>
        <title>Contacto | Mi Sitio Web</title>
        <meta name="description" content="Contáctanos para más información o consultas." />
        <meta property="og:title" content="Contacto | Mi Sitio Web" />
        <meta property="og:description" content="Contáctanos para más información o consultas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${baseUrl}/contacto`} />
        <meta property="og:image" content={`${baseUrl}/images/og-contacto.jpg`} />
      </Head>
      <main className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">Contáctanos</h1>
        <p className="text-center text-gray-600 max-w-md">
          ¿Tienes dudas o quieres más información? Rellena el formulario o escríbenos directamente a nuestro correo.
        </p>
      </main>
    </>
  );
}
