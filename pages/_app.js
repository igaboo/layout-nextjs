import "../scss/globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";

import Head from "next/head";
import Sidebar from "../components/Sidebar/Sidebar";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "../lib/UserContext";
import { config } from "@fortawesome/fontawesome-svg-core";
import { useRouter } from "next/router";

config.autoAddCss = false;

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <UserProvider>
      <Toaster />
      <Head>
        <title>Layout | Photo Portfolio</title>
        <meta
          name="description"
          content="A Portfolio building site geared towards photographers"
        />
        <meta name="theme-color" content="#8d58bb" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={router.pathname.includes("/dashboard") ? "dashboard" : ""}
      >
        {router.pathname.includes("/dashboard") && <Sidebar />}
        <Component {...pageProps} />
      </div>
    </UserProvider>
  );
}
