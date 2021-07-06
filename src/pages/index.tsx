import Head from "next/head";
import axios from "axios";
import IConditions from "../types/IConditions";
import { GetServerSideProps } from "next";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Grid from "../components/Grid";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import { IS_PRODUCTION } from "../constants";

const Index = ({ conditions }: { conditions: IConditions }) => {
  // Handle loading
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };

    const handleComplete = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <div>
      <Head>
        <title>Været på Søbekkseter</title>
        <meta
          name="description"
          content={`
        Været på Søbekkseter.
        Nettsiden viser nåværende værforhold, live webkamera-bilde og annen nyttig informasjon for hytteeiere i Søbekklia.`}
        />
        <meta
          name="keywords"
          content={`
          søbekkseter, været på søbekkseter, været på sobekkseter, 
          sobekkseter, hytta, valdres, vær, weather, webcamera, 
          hedalen, hedalen vær, hedalen søbekkseter, sobekklia, søbekklia`}
        />
        <link
          rel="icon"
          href={`${IS_PRODUCTION ? "/sobekkseter" : ""}/img/logo.png`}
        />
      </Head>

      <Navbar />

      <main>
        {loading ? (
          <div className="flex w-screen h-screen justify-center items-center">
            <Loading />
          </div>
        ) : (
          <Grid conditions={conditions} />
        )}
      </main>

      {conditions.image ? (
        <Footer
          supplier={conditions.image.title}
          link={conditions.image.link}
        />
      ) : null}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const conditionsURL = `https://api.weatherlink.com/v1/NoaaExt.json?user=${process.env.DID}&pass=${process.env.OWNER_PASSWORD}&apiToken=${process.env.TOKEN_ID}`;

  const conditions = await axios
    .get(conditionsURL)
    .then((res) => res.data)
    .catch((error) => {
      console.log(`❌ An error occurred: ${error.message}`);
    });

  return {
    props: { conditions },
  };
};

export default Index;
