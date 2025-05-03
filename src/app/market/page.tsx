import { getNfts } from "./actions";
import PageWrapper from "./Wrapper";

export default async function Root() {
  const nfts = await getNfts();
  return <PageWrapper nfts={nfts} />;
}
