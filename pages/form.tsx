import React from "react";
import Head from "next/head";
import { EmailContainer } from "../scripts/EmailContainer";

const Home = () => {
  const { email } = EmailContainer.useContainer();
  return (
    <>
      <Head>
        <title>Squad - Thank you for your interest!</title>
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
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html: `html{ margin: 0; height: 100%; overflow: hidden; } iframe{ position: absolute; left:0; right:0; bottom:0; top:0; border:0; }`
          }}
        ></style>
      </Head>
      <iframe
        id="typeform-full"
        width="100%"
        height="100%"
        frameBorder="0"
        src={`https://ben964525.typeform.com/to/WCdkMd?source=landing&email=${email}`}
      ></iframe>
      <script
        type="text/javascript"
        src="https://embed.typeform.com/embed.js"
      ></script>
    </>
  );
};

export default Home;
