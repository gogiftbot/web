import { getNfts } from "./actions";
import PageWrapper from "./Wrapper";

export async function getStaticProps() {
  const res = await fetch("https://api.vercel.app/blog");
  const data = await res.json();

  return {
    props: { data },
    revalidate: 60,
  };
}

export default async function Root() {
  const nfts = await getNfts();
  return <PageWrapper nfts={nfts} />;
}
