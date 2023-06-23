import Grid from "@/components/Grid";
import { conditionsUrl } from "@/constants";
import getImageUrl from "@/lib/download";
import type Conditions from "@/types/conditions";
import axios from "axios";

export const getData = async () => {
  const conditions = await axios
    .get(conditionsUrl)
    .then((res) => res.data as Conditions);

  const imageUrl = await getImageUrl("webcamera.jpg");

  return { conditions, imageUrl };
};

const IndexPage = async () => {
  const { conditions, imageUrl } = await getData();

  return <Grid conditions={conditions} imageUrl={imageUrl} />;
};

export default IndexPage;
