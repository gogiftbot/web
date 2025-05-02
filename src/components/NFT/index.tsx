import { MarketNFTProps } from "./MarketNFT";
import { ProfileNFTProps } from "./ProfileNFT";

export * from "./MarketNFT";
export * from "./ProfileNFT";

export const data: (MarketNFTProps & ProfileNFTProps)[] = [
  {
    id: "1",
    name: "Cosmic Cat",
    image:
      "https://famous-smakager-07b35a.netlify.app/assets/assets/images/durovscap-2551.medium.fb21fdc3cc235e223f1079a5acc7b3a3.jpg",
    price: 120.5,
    rarity: "rare" as const,
    roi: 0.8,
    sku: "#2708",
    collectDate: new Date(Date.now() + 24 * 60 * 60 * 1000),
  },
  {
    id: "2",
    name: "Space Panda",
    image:
      "https://famous-smakager-07b35a.netlify.app/assets/assets/images/plushpepe-2798.medium.6c137f985b0169740046eb66862c77db.jpg",
    price: 85.75,
    rarity: "uncommon" as const,
    roi: 0.5,
    sku: "#2708",
    isNew: true,
  },
  {
    id: "3",
    name: "Digital Doge",
    image:
      "https://famous-smakager-07b35a.netlify.app/assets/assets/images/plushpepe-869.medium.103c3e1e50934329102e12756ce814d4.jpg",
    price: 240.0,
    rarity: "legendary" as const,
    roi: 1.2,
    sku: "#2708",
    isHot: true,
  },
  {
    id: "4",
    name: "Neon Tiger",
    image:
      "https://famous-smakager-07b35a.netlify.app/assets/assets/images/preciouspeach-2.medium.90d405714310a73c14745c8e6d557e7b.jpg",
    price: 65.3,
    rarity: "common" as const,
    roi: 0.3,
    sku: "#2708",
    isSoldOut: true,
  },
  {
    id: "5",
    name: "Neon Tiger",
    image:
      "https://famous-smakager-07b35a.netlify.app/assets/assets/images/signetring-4119.medium.68e5dd2a21ec11149e5c2f179591e86e.jpg",
    price: 65.3,
    rarity: "common" as const,
    roi: 0.3,
    sku: "#2708",
    isSoldOut: true,
  },
];
