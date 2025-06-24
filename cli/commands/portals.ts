import { wrapper } from "../utils";
import { marketplaceService } from "@/lib/services/marketplace.service";

await wrapper(async ({ context, parameters }) => {
  await marketplaceService.updatePrices();
});
