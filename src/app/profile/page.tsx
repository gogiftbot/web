import { getAccount } from "./actions";
import Page from "./components/Page";

export default async function Root() {
  const account = await getAccount();

  return <Page account={account} />;
}
