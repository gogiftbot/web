import { getAccount } from "./actions";
import PageWrapper from "./Wrapper";

export default async function Root() {
  const account = await getAccount();
  return <PageWrapper account={account} />;
}
