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
      <section className="text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-4">Contáctanos</h2>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          ¿Tienes dudas o quieres más información? Rellena el formulario o escríbenos directamente a nuestro correo.
        </p>
      </section>
    </>
  );
}
