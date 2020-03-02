import Head from "next/head";

const FormHeaders = () => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta
        property="og:title"
        content="Squad - Workouts are better together"
      />
      <meta
        name="twitter:title"
        content="Squad - Workouts are better together"
      />
      <meta
        name="description"
        content="Coordinating activities is hard — so don't. Choose your workout & preferred crowd, then leave the rest to us."
      />
      <meta
        property="og:description"
        content="Coordinating activities is hard — so don't. Choose your workout & preferred crowd, then leave the rest to us."
      />
      <meta
        name="twitter:description"
        content="Coordinating activities is hard — so don't. Choose your workout & preferred crowd, then leave the rest to us."
      />
      <meta property="og:image" content="/assets/images/squad-thumbnail.jpg" />
      <meta name="twitter:image" content="/assets/images/squad-thumbnail.jpg" />
      <meta property="og:locale" content="en" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Squad" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="Squad" />
    </Head>
  );
};

export default FormHeaders;
