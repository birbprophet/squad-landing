import Head from "next/head";

const BaseHeaders = () => {
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
      =<meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="Squad" />
      <script
        dangerouslySetInnerHTML={{
          __html: `!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.1.0";
          analytics.load("rc4dK0bDR9lfm7R0gUU4m0igIrJYsOpb");
          analytics.page();
          }}();`
        }}
      ></script>
    </Head>
  );
};

export default BaseHeaders;
