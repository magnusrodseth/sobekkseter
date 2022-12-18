import Grid from "@/components/Grid";
import { conditionsUrl } from "@/constants";
import type Conditions from "@/types/conditions";
import axios from "axios";
import type { FC } from "react";

type IndexProps = {
  conditions: Conditions;
};

const IndexPage: FC<IndexProps> = ({ conditions }) => {
  return <Grid conditions={conditions} />;
};

export const getServerSideProps = async () => {
  const conditions = await axios
    .get(conditionsUrl)
    .then((res) => res.data as Conditions)
    .catch((error) => {
      console.log(`❌ An error occurred: ${error.message}`);
    });

  return {
    props: { conditions },
  };
};

export default IndexPage;
