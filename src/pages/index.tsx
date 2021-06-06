import Head from "next/head";
import styles from "../styles/Home.module.css";
import dotenv from "dotenv";
dotenv.config();
import axios from "axios";
import IConditions from "../types/Conditions";
import { TEN_SECONDS_IN_MILLISECONDS } from "../constants";
import useSWR from "swr";
import { GetStaticProps } from "next";

type Props = {
  conditions: IConditions | null;
  error: Error | null;
};

const Index = ({ conditions, error }: Props) => {
  if (error !== null) {
    return <h1>Error...</h1>;
  }

  if (!conditions) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Været på Søbekkseter</title>
        <meta name="description" content="Været på Søbekkseter" />
        <link rel="icon" href="/img/logo.png" />
      </Head>

      <main className={styles.main}></main>

      <footer className={styles.footer}></footer>
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

      return {
        props: { conditions: null, error },
      };
    });

  return {
    props: { conditions, error: null },
  };
};

export default Index;
