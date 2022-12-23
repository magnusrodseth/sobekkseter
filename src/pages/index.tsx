import Grid from "@/components/Grid";
import { conditionsUrl } from "@/constants";
import getImageUrl from "@/lib/download";
import type Conditions from "@/types/conditions";
import axios from "axios";
import type { GetStaticProps } from "next";
import type { FC } from "react";

type IndexProps = {
  conditions: Conditions;
  imageUrl: string;
};

const IndexPage: FC<IndexProps> = ({ conditions, imageUrl }) => {
  return <Grid conditions={conditions} imageUrl={imageUrl} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const conditions = await axios
    .get(conditionsUrl)
    .then((res) => res.data as Conditions)
    .catch((error) => {
      console.log(`❌ An error occurred: ${error.message}`);
    });

  const imageUrl = await getImageUrl("webcamera.jpg");

  return {
    props: { conditions, imageUrl },
    // We want to revalidate the page every 60 seconds because new conditions come in every minute
    revalidate: 60,
  };
};

export default IndexPage;
