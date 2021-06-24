import Head from "next/head";
import axios from "axios";
import IConditions from "../types/IConditions";
import { GetStaticProps } from "next";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Grid from "../components/Grid";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

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
        <meta name="description" content="Været på Søbekkseter" />
        <link rel="icon" href="/img/logo.png" />
      </Head>

      <Navbar />

      <main>
        {loading ? (
          <h1 className="text-4xl">
            <Loading />
            Loading...
          </h1>
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

export const getStaticProps: GetStaticProps = async () => {
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
