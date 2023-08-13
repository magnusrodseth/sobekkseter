import Grid from "@/components/Grid";
import { conditionsUrl } from "@/constants";
import getImageUrl from "@/lib/download";
import type Conditions from "@/types/conditions";

const getData = async () => {
  const conditions = await fetch(conditionsUrl, {
    cache: "no-cache",
  }).then(async (res) => (await res.json()) as Conditions);

  const imageUrl = await getImageUrl("webcamera.jpg");

  return { conditions, imageUrl };
};

const IndexPage = async () => {
  const { conditions, imageUrl } = await getData();

  return <Grid conditions={conditions} imageUrl={imageUrl} />;
};

export default IndexPage;
