import { getNfts } from "./actions";
import Page from "./components/Page";

export default async function Root() {
  const nfts = await getNfts();
  return <Page nfts={nfts} />;
}
