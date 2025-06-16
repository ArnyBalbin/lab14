import Head from "next/head";

export default function ContactoPage() {
  return (
    <>
      <Head>
        <title>Contacto | Mi Sitio Web</title>
        <meta name="description" content="Contáctanos para más información." />
        <meta property="og:title" content="Contacto | Mi Sitio Web" />
        <meta property="og:description" content="Contáctanos para más información." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tusitio.com/contacto" />
      </Head>
      <main>
        <h1>Página de Contacto</h1>
      </main>
    </>
  );
}
