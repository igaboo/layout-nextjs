import "../scss/globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";

import Head from "next/head";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Layout | Photo Portfolio</title>
        <meta
          name="description"
          content="A Portfolio building site geared towards photographers"
        />
        <meta name="theme-color" content="#8d58bb" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
