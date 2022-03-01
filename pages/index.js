import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "./componentes/layout/Layout";
import { AppProvider } from "./context/appContext/useAppState";

export default function Home({ Component, pageProps }) {
  return (
    <>
      <AppProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppProvider>
    </>
  );
}
