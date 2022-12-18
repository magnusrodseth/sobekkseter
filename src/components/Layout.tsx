import Head from "next/head";
import type { FC } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Været på Søbekkseter</title>
        <meta
          name="description"
          content="Været på Søbekkseter. Nettsiden viser nåværende værforhold, live webkamera-bilde og annen nyttig informasjon for hytteeiere i Søbekklia."
        />
        <meta
          name="keywords"
          content={`
          søbekkseter, været på søbekkseter, været på sobekkseter, 
          sobekkseter, hytta, valdres, vær, weather, webcamera, 
          hedalen, hedalen vær, hedalen søbekkseter, sobekklia, søbekklia
          `}
        />
        <link rel="icon" href="/img/logo.png" />
      </Head>

      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
