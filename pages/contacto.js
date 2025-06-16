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
      <main>
        <h1>Página de Contacto</h1>
      </main>
    </>
  );
}
