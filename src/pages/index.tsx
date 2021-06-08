import Head from "next/head";
import dotenv from "dotenv";
dotenv.config();
import axios from "axios";
import IConditions from "../types/Conditions";
import { TEN_SECONDS_IN_MILLISECONDS } from "../constants";
import { GetStaticProps } from "next";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Grid from "../components/Grid";
import Footer from "../components/Footer";

const Index = ({ conditions }: { conditions: IConditions }) => {
  // TODO: Remove this
  console.log(conditions);

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
          <h1>
            <svg
              className="animate-spin h-5 w-5 mr-3"
              viewBox="0 0 24 24"
            ></svg>
            Loading...
          </h1>
        ) : (
          <Grid conditions={conditions} />
        )}
      </main>

      <Footer supplier={conditions.image.title} link={conditions.image.link} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const conditionsURL = `https://api.weatherlink.com/v1/NoaaExt.json?user=${process.env.DID}&pass=${process.env.OWNER_PASSWORD}&apiToken=${process.env.TOKEN_ID}`;

  const conditions = await axios
    .get(conditionsURL, { timeout: TEN_SECONDS_IN_MILLISECONDS })
    .then((res) => res.data)
    .catch((error) => {
      console.log(`❌ An error occurred: ${error.message}`);
    });

  return {
    props: { conditions },
  };
};

export default Index;
