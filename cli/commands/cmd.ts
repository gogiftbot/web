import { Prisma, PrismaClient } from "@/generated/prisma";
import crypto from "crypto";
import { sleep, toFile, wrapper } from "../utils";
import { withAccelerate } from "@prisma/extension-accelerate";
import { CaseService, caseService } from "@/lib/services/case.service";
import { botService } from "@/lib/services/bot.service";

//https://michielp1807.github.io/lottie-editor/#/

const cases: Prisma.gift_caseCreateInput[] = [
  {
    id: "3a8e7b2c-4d5f-49a1-b7c6-2f3e1d0c9b8a",
    title: "Basic",
    price: 2,
    sku: "deskcalendar",
    gifts: {
      connect: [
        {
          id: "x0y1z2a3-b4c5-1234-5678-901234567890",
        },
        {
          id: "c9d0e1f2-g3h4-5678-9abc-def123456789",
        },
        {
          id: "m9n0o1p2-q3r4-f123-4567-890123456789",
        },
        {
          id: "a7b8c9d0-e1f2-3456-789a-bcdef1234567",
        },
        {
          id: "d4e5f6a7-b8c9-0123-4567-890abcdef123",
        },
        {
          id: "6788d495-e828-460b-83f7-7d7bba4bc969",
        },
        {
          id: "f6a7b8c9-d0e1-2345-6789-0abcdef12345",
        },
        {
          id: "e5f6a7b8-c9d0-1234-5678-90abcdef1234",
        },
        {
          id: "n0o1p2q3-r4s5-1234-5678-901234567890",
        },
        {
          id: "b2c3d4e5-f6a7-8901-2345-67890abcdef1",
        },
        {
          id: "l8m9n0o1-p2q3-ef12-3456-789012345678",
        },
        {
          id: "b8c9d0e1-f2g3-4567-89ab-cdef12345678",
        },
        {
          id: "v8w9x0y1-z2a3-9012-3456-789012345678",
        },
        {
          id: "a7b8c9d0-e1f2-3456-789a-bcdef1234567",
        },
        {
          id: "c3d4e5f6-a7b8-9012-3456-7890abcdef12",
        },
        {
          id: "u7v8w9x0-y1z2-8901-2345-678901234567",
        },
      ],
    },
  },
  {
    id: "5b2c9d8e-1f3a-47e8-b6d5-0c4a3b2e1d9f",
    title: "Standard",
    price: 2.5,
    sku: "lovepotion",
    gifts: {
      connect: [
        {
          id: "t6u7v8w9-x0y1-7890-1234-567890123456",
        },
        {
          id: "r4s5t6u7-v8w9-5678-9012-345678901234",
        },
        {
          id: "1acf10f2-35c9-44c1-95fa-24787a4acaa0",
        },
        {
          id: "c9d0e1f2-g3h4-5678-9abc-def123456789",
        },
        {
          id: "f8g9h0i1-j2k3-9012-3456-789012345678",
        },
        {
          id: "m9n0o1p2-q3r4-f123-4567-890123456789",
        },
        {
          id: "a7b8c9d0-e1f2-3456-789a-bcdef1234567",
        },
        {
          id: "d4e5f6a7-b8c9-0123-4567-890abcdef123",
        },
        {
          id: "w9x0y1z2-a3b4-0123-4567-890123456789",
        },
        {
          id: "h4i5j6k7-l8m9-abcd-ef12-345678901234",
        },
        {
          id: "f6a7b8c9-d0e1-2345-6789-0abcdef12345",
        },
        {
          id: "b2c3d4e5-f6a7-8901-2345-67890abcdef1",
        },
        {
          id: "c70e4ceb-002a-464c-b513-d3410d105035",
        },
      ],
    },
  },
  {
    id: "7e6d5c4b-3a2f-49e1-8d7c-0b5a4d3e2f1g",
    title: "Premium",
    price: 4.99,
    sku: "diamondring",
    gifts: {
      connect: [
        {
          id: "52d3d0ae-f72f-4145-a822-6dcbb8af1fcd",
        },
        {
          id: "t6u7v8w9-x0y1-7890-1234-567890123456",
        },
        {
          id: "o1p2q3r4-s5t6-2345-6789-012345678901",
        },
        {
          id: "1acf10f2-35c9-44c1-95fa-24787a4acaa0",
        },
        {
          id: "c9d0e1f2-g3h4-5678-9abc-def123456789",
        },
        {
          id: "m9n0o1p2-q3r4-f123-4567-890123456789",
        },
        {
          id: "a7b8c9d0-e1f2-3456-789a-bcdef1234567",
        },
        {
          id: "d4e5f6a7-b8c9-0123-4567-890abcdef123",
        },
        {
          id: "w9x0y1z2-a3b4-0123-4567-890123456789",
        },
        {
          id: "f6a7b8c9-d0e1-2345-6789-0abcdef12345",
        },
        {
          id: "c70e4ceb-002a-464c-b513-d3410d105035",
        },
        {
          id: "k7l8m9n0-o1p2-def1-2345-678901234567",
        },
        {
          id: "u7v8w9x0-y1z2-8901-2345-678901234567",
        },
        {
          id: "d6e7f8g9-h0i1-7890-1234-567890123456",
        },
      ],
    },
  },
  {
    id: "9a8b7c6d-5e4f-3g2h-1i0j-9k8l7m6n5o4p",
    title: "All or Nothing",
    price: 199.99,
    sku: "jackinthebox",
    gifts: {
      connect: [
        {
          id: "s5t6u7v8-w9x0-6789-0123-456789012345",
        },
        {
          id: "52d3d0ae-f72f-4145-a822-6dcbb8af1fcd",
        },
        {
          id: "p2q3r4s5-t6u7-3456-7890-123456789012",
        },
      ],
    },
  },
  {
    id: "2d3e4f5g-6h7i-8j9k-0l1m-2n3o4p5q6r7s",
    title: "Lucky Shot",
    price: 3.33,
    sku: "sharptongue",
    gifts: {
      connect: [
        {
          id: "s5t6u7v8-w9x0-6789-0123-456789012345",
        },
        {
          id: "52d3d0ae-f72f-4145-a822-6dcbb8af1fcd",
        },
        {
          id: "1acf10f2-35c9-44c1-95fa-24787a4acaa0",
        },
        {
          id: "c9d0e1f2-g3h4-5678-9abc-def123456789",
        },
        {
          id: "h4i5j6k7-l8m9-abcd-ef12-345678901234",
        },
        {
          id: "f6a7b8c9-d0e1-2345-6789-0abcdef12345",
        },
        {
          id: "b2c3d4e5-f6a7-8901-2345-67890abcdef1",
        },
        {
          id: "b8c9d0e1-f2g3-4567-89ab-cdef12345678",
        },
      ],
    },
  },
  {
    id: "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
    title: "Mystery Box",
    price: 7.77,
    sku: "crystallball",
    gifts: {
      connect: [
        {
          id: "s5t6u7v8-w9x0-6789-0123-456789012345",
        },
        {
          id: "52d3d0ae-f72f-4145-a822-6dcbb8af1fcd",
        },
        {
          id: "r4s5t6u7-v8w9-5678-9012-345678901234",
        },
        {
          id: "o1p2q3r4-s5t6-2345-6789-012345678901",
        },
        {
          id: "1acf10f2-35c9-44c1-95fa-24787a4acaa0",
        },
        {
          id: "c9d0e1f2-g3h4-5678-9abc-def123456789",
        },
        {
          id: "a7b8c9d0-e1f2-3456-789a-bcdef1234567",
        },
        {
          id: "d4e5f6a7-b8c9-0123-4567-890abcdef123",
        },
        {
          id: "b8c9d0e1-f2g3-4567-89ab-cdef12345678",
        },
      ],
    },
  },
  {
    id: "8f7e6d5c-4b3a-2h1i-0j9k-8l7m6n5o4p3q",
    title: "Devil's Deal",
    price: 6.66,
    sku: "voodoodoll",
    gifts: {
      connect: [
        {
          id: "s5t6u7v8-w9x0-6789-0123-456789012345",
        },
        {
          id: "52d3d0ae-f72f-4145-a822-6dcbb8af1fcd",
        },
        {
          id: "t6u7v8w9-x0y1-7890-1234-567890123456",
        },
        {
          id: "o1p2q3r4-s5t6-2345-6789-012345678901",
        },
        {
          id: "c9d0e1f2-g3h4-5678-9abc-def123456789",
        },
        {
          id: "d6e7f8g9-h0i1-7890-1234-567890123456",
        },
        {
          id: "f6a7b8c9-d0e1-2345-6789-0abcdef12345",
        },
        {
          id: "f2g3h4i5-j6k7-89ab-cdef-123456789012",
        },
      ],
    },
  },
  {
    id: "6g5h4i3j-2k1l-0m9n-8o7p-6q5r4s3t2u1v",
    title: "Dreamy Mix",
    price: 9.99,
    sku: "lootbag",
    gifts: {
      connect: [
        {
          id: "s5t6u7v8-w9x0-6789-0123-456789012345",
        },
        {
          id: "52d3d0ae-f72f-4145-a822-6dcbb8af1fcd",
        },
        {
          id: "t6u7v8w9-x0y1-7890-1234-567890123456",
        },
        {
          id: "r4s5t6u7-v8w9-5678-9012-345678901234",
        },
        {
          id: "o1p2q3r4-s5t6-2345-6789-012345678901",
        },
        {
          id: "1acf10f2-35c9-44c1-95fa-24787a4acaa0",
        },
        {
          id: "c9d0e1f2-g3h4-5678-9abc-def123456789",
        },
        {
          id: "m9n0o1p2-q3r4-f123-4567-890123456789",
        },
        {
          id: "a7b8c9d0-e1f2-3456-789a-bcdef1234567",
        },
        {
          id: "f8g9h0i1-j2k3-9012-3456-789012345678",
        },
        {
          id: "u7v8w9x0-y1z2-8901-2345-678901234567",
        },
        {
          id: "b4c5d6e7-f8g9-5678-9012-345678901234",
        },
      ],
    },
  },
  {
    id: "4e5f6g7h-8i9j-0k1l-2m3n-4o5p6q7r8s9t",
    title: "Big Tease",
    price: 24.99,
    sku: "perfumebottle",
    gifts: {
      connect: [
        {
          id: "s5t6u7v8-w9x0-6789-0123-456789012345",
        },
        {
          id: "52d3d0ae-f72f-4145-a822-6dcbb8af1fcd",
        },
        {
          id: "j6k7l8m9-n0o1-cdef-1234-567890123456",
        },
        {
          id: "t6u7v8w9-x0y1-7890-1234-567890123456",
        },
        {
          id: "r4s5t6u7-v8w9-5678-9012-345678901234",
        },
        {
          id: "o1p2q3r4-s5t6-2345-6789-012345678901",
        },
        {
          id: "1acf10f2-35c9-44c1-95fa-24787a4acaa0",
        },
        {
          id: "g3h4i5j6-k7l8-9abc-def1-234567890123",
        },
        {
          id: "c9d0e1f2-g3h4-5678-9abc-def123456789",
        },
        {
          id: "a3b4c5d6-e7f8-4567-8901-234567890123",
        },
        {
          id: "y1z2a3b4-c5d6-2345-6789-012345678901",
        },
      ],
    },
  },
  {
    id: "3d4e5f6g-7h8i-9j0k-1l2m-3n4o5p6q7r8s",
    title: "Risk It All",
    price: 49.99,
    sku: "preciouspeach",
    gifts: {
      connect: [
        {
          id: "s5t6u7v8-w9x0-6789-0123-456789012345",
        },
        {
          id: "52d3d0ae-f72f-4145-a822-6dcbb8af1fcd",
        },
        {
          id: "t6u7v8w9-x0y1-7890-1234-567890123456",
        },
        {
          id: "j6k7l8m9-n0o1-cdef-1234-567890123456",
        },
        {
          id: "r4s5t6u7-v8w9-5678-9012-345678901234",
        },
        {
          id: "o1p2q3r4-s5t6-2345-6789-012345678901",
        },
        {
          id: "1acf10f2-35c9-44c1-95fa-24787a4acaa0",
        },
        {
          id: "p2q3r4s5-t6u7-3456-7890-123456789012",
        },
      ],
    },
  },
  {
    id: "1b2c3d4e-5f6g-7h8i-9j0k-1l2m3n4o5p6q",
    title: "Golden Dream",
    price: 99.99,
    sku: "plushpepe",
    gifts: {
      connect: [
        {
          id: "s5t6u7v8-w9x0-6789-0123-456789012345",
        },
        {
          id: "52d3d0ae-f72f-4145-a822-6dcbb8af1fcd",
        },
        {
          id: "t6u7v8w9-x0y1-7890-1234-567890123456",
        },
        {
          id: "j6k7l8m9-n0o1-cdef-1234-567890123456",
        },
        {
          id: "a1b2c3d4-e5f6-7890-1234-567890abcdef",
        },
        {
          id: "r4s5t6u7-v8w9-5678-9012-345678901234",
        },
        {
          id: "p2q3r4s5-t6u7-3456-7890-123456789012",
        },
      ],
    },
  },
];

const nfts: Prisma.nftCreateInput[] = [
  {
    id: "a1b2c3d4-e5f6-7890-1234-567890abcdef",
    sku: "astral-shard",
    price: 51.59,
    title: "Astral Shard",
  },
  {
    id: "b2c3d4e5-f6a7-8901-2345-67890abcdef1",
    sku: "bday-candle",
    price: 1.1,
    title: "Bday Candle",
  },
  {
    id: "c3d4e5f6-a7b8-9012-3456-7890abcdef12",
    sku: "berry-box",
    price: 3.52,
    title: "Berry Box",
  },
  {
    id: "d4e5f6a7-b8c9-0123-4567-890abcdef123",
    sku: "bunny-muffin",
    price: 3.245,
    title: "Bunny Muffin",
  },
  {
    id: "e5f6a7b8-c9d0-1234-5678-90abcdef1234",
    sku: "candy-cane",
    price: 1.43,
    title: "Candy Cane",
  },
  {
    id: "f6a7b8c9-d0e1-2345-6789-0abcdef12345",
    sku: "cookie-heart",
    price: 1.65,
    title: "Cookie Heart",
  },
  {
    id: "a7b8c9d0-e1f2-3456-789a-bcdef1234567",
    sku: "crystall-ball",
    price: 5.258,
    title: "Crystall Ball",
  },
  {
    id: "b8c9d0e1-f2g3-4567-89ab-cdef12345678",
    sku: "desk-calendar",
    price: 1.1,
    title: "Desk Calendar",
  },
  {
    id: "c9d0e1f2-g3h4-5678-9abc-def123456789",
    sku: "diamong-ring",
    price: 12.32,
    title: "Diamong Ring",
  },
  {
    id: "52d3d0ae-f72f-4145-a822-6dcbb8af1fcd",
    sku: "durov-cap",
    price: 269.5,
    title: "Durov Cap",
  },
  {
    id: "d0e1f2g3-h4i5-6789-abcd-ef1234567890",
    sku: "electric-skull",
    price: 16.115,
    title: "Electric Skull",
  },
  {
    id: "e1f2g3h4-i5j6-789a-bcde-f12345678901",
    sku: "eternal-rose",
    price: 11,
    title: "Eternal Rose",
  },
  {
    id: "f2g3h4i5-j6k7-89ab-cdef-123456789012",
    sku: "evil-eye",
    price: 3.19,
    title: "Evil Eye",
  },
  {
    id: "g3h4i5j6-k7l8-9abc-def1-234567890123",
    sku: "genie-lamp",
    price: 23.98,
    title: "Genie Lamp",
  },
  {
    id: "h4i5j6k7-l8m9-abcd-ef12-345678901234",
    sku: "ginger-cookie",
    price: 2.057,
    title: "Ginger Cookie",
  },
  {
    id: "i5j6k7l8-m9n0-bcde-f123-456789012345",
    sku: "heart-sailor",
    price: 5.896,
    title: "Heart Sailor",
  },
  {
    id: "j6k7l8m9-n0o1-cdef-1234-567890123456",
    sku: "ion-gem",
    price: 48.147,
    title: "Ion Gem",
  },
  {
    id: "k7l8m9n0-o1p2-def1-2345-678901234567",
    sku: "jack-in-the-box",
    price: 1.925,
    title: "Jack In The Box",
  },
  {
    id: "5c270d25-26cd-4dbf-8276-ac0c800d4dd2",
    sku: "kissed-frog",
    price: 16.94,
    title: "Kissed Frog",
  },
  {
    id: "l8m9n0o1-p2q3-ef12-3456-789012345678",
    sku: "lol-pop",
    price: 1.1,
    title: "Lol Pop",
  },
  {
    id: "1acf10f2-35c9-44c1-95fa-24787a4acaa0",
    sku: "loot-bag",
    price: 34.1,
    title: "Loot bag",
  },
  {
    id: "m9n0o1p2-q3r4-f123-4567-890123456789",
    sku: "love-potion",
    price: 6.325,
    title: "Love Potion",
  },
  {
    id: "n0o1p2q3-r4s5-1234-5678-901234567890",
    sku: "lunar-snake",
    price: 1.32,
    title: "Lunar Snake",
  },
  {
    id: "o1p2q3r4-s5t6-2345-6789-012345678901",
    sku: "magic-potion",
    price: 30.25,
    title: "Magic Potion",
  },
  {
    id: "p2q3r4s5-t6u7-3456-7890-123456789012",
    sku: "mini-oscar",
    price: 63.8,
    title: "Mini Oscar",
  },
  {
    id: "q3r4s5t6-u7v8-4567-8901-234567890123",
    sku: "neko-helmet",
    price: 15.51,
    title: "Neko Helmet",
  },
  {
    id: "r4s5t6u7-v8w9-5678-9012-345678901234",
    sku: "perfume-bottle",
    price: 48.4,
    title: "Perfume Bottle",
  },
  {
    id: "s5t6u7v8-w9x0-6789-0123-456789012345",
    sku: "plush-pepe",
    price: 1760,
    title: "Plush Pepe",
  },
  {
    id: "t6u7v8w9-x0y1-7890-1234-567890123456",
    sku: "precious-peach",
    price: 165,
    title: "Precious Peach",
  },
  {
    id: "u7v8w9x0-y1z2-8901-2345-678901234567",
    sku: "record-player",
    price: 5.995,
    title: "Record Player",
  },
  {
    id: "v8w9x0y1-z2a3-9012-3456-789012345678",
    sku: "sakura-flower",
    price: 3.927,
    title: "Sakura Flower",
  },
  {
    id: "w9x0y1z2-a3b4-0123-4567-890123456789",
    sku: "santa-hat",
    price: 1.683,
    title: "Santa Hat",
  },
  {
    id: "x0y1z2a3-b4c5-1234-5678-901234567890",
    sku: "scared-cat",
    price: 28.6,
    title: "Scared Cat",
  },
  {
    id: "y1z2a3b4-c5d6-2345-6789-012345678901",
    sku: "sharp-tongue",
    price: 18.975,
    title: "Sharp Tongue",
  },
  {
    id: "e24bfbc8-0fc5-49a7-87ff-d06d6f7dc6a2",
    sku: "signet-ring",
    price: 17.6,
    title: "Signet Ring",
  },
  {
    id: "z2a3b4c5-d6e7-3456-7890-123456789012",
    sku: "snow-globe",
    price: 2.332,
    title: "Snow Globe",
  },
  {
    id: "a3b4c5d6-e7f8-4567-8901-234567890123",
    sku: "swiss-watch",
    price: 19.03,
    title: "Swiss Watch",
  },
  {
    id: "b4c5d6e7-f8g9-5678-9012-345678901234",
    sku: "top-hat",
    price: 6.6,
    title: "Top Hat",
  },
  {
    id: "c5d6e7f8-g9h0-6789-0123-456789012345",
    sku: "toy-bear",
    price: 18.15,
    title: "Toy Bear",
  },
  {
    id: "d6e7f8g9-h0i1-7890-1234-567890123456",
    sku: "trapped-heart",
    price: 5.61,
    title: "Trapped Heart",
  },
  {
    id: "e7f8g9h0-i1j2-8901-2345-678901234567",
    sku: "vintage-cigar",
    price: 24.2,
    title: "Vintage Cigar",
  },
  {
    id: "f8g9h0i1-j2k3-9012-3456-789012345678",
    sku: "voodoo-doll",
    price: 10.549,
    title: "Voodoo Doll",
  },
  {
    id: "6788d495-e828-460b-83f7-7d7bba4bc969",
    sku: "star-notepad",
    price: 2.409,
    title: "Star Notepad",
  },
  {
    id: "c70e4ceb-002a-464c-b513-d3410d105035",
    sku: "witch-hat",
    price: 1.958,
    title: "Witch Hat",
  },
];

// const prisma = new PrismaClient().$extends(withAccelerate());

await wrapper(async ({ context, parameters }) => {
  // await seed();
  // await botService.onDeposit({
  //   transactionId: "51c5fd89-0a50-4499-b221-8b1d2923abe9",
  // });
  // await tonService.send({
  //   address: "UQAUAGndY4LtOclj3DWhSKUiLECRLfdXNZknZjEj1det9DwZ",
  //   amount: 0.5,
  // });
  // await cases_foo();
  // const t = await context.prisma.account.count();
  // console.log(t);\

  // const foo = async () => {
  //   const dep = await context.prisma.account.findFirst({
  //     where: {
  //       username: "Jedediah1",
  //     },
  //     select: {
  //       createdAt: true,
  //       username: true,
  //       balance: true,
  //       gifts: {
  //         select: {
  //           case: {
  //             select: {
  //               title: true,
  //               price: true,
  //             },
  //           },
  //           price: true,
  //           isSold: true,
  //           isWithdraw: true,
  //           transaction: {
  //             select: {
  //               status: true,
  //             },
  //           },
  //         },
  //       },
  //       transactions: {
  //         select: {
  //           type: true,
  //           status: true,
  //           amount: true,
  //           tonTransaction: {
  //             select: {
  //               from: true,
  //               to: true,
  //             },
  //           },
  //         },
  //       },
  //     },
  //   });
  // };
  // const accounts = await context.prisma.account.findMany({
  //   select: {
  //     id: true,
  //     transactions: {
  //       select: {
  //         id: true,
  //         amount: true,
  //         type: true,
  //         status: true,
  //       },
  //     },
  //     referredBy: {
  //       select: {
  //         account: {
  //           select: {
  //             username: true,
  //           },
  //         },
  //       },
  //     },
  //   },
  // });
  // const obj: Record<
  //   string,
  //   { username: string; count: number; deposit: number; withdraw: number }
  // > = {};
  // for (const acc of accounts) {
  //   const username = acc.referredBy?.account.username || "unknown";
  //   if (!obj[username]) {
  //     obj[username] = {
  //       username,
  //       count: 0,
  //       deposit: 0,
  //       withdraw: 0,
  //     };
  //   }
  //   const deposit = acc.transactions
  //     .filter((tx) => tx.status === "completed" && tx.type === "deposit")
  //     .reduce((t, tx) => t + tx.amount, obj[username].deposit);
  //   const withdraw = acc.transactions
  //     .filter((tx) => tx.status === "completed" && tx.type === "withdraw")
  //     .reduce((t, tx) => t + tx.amount, obj[username].withdraw);
  //   obj[username] = {
  //     username,
  //     count: obj[username].count + 1,
  //     deposit,
  //     withdraw,
  //   };
  // }
  // const arr = Object.values(obj)
  //   .filter((o) => !!o.count)
  //   .sort((a, b) => b.count - a.count)
  //   .slice(0, 10);
  // console.table(arr);

  const transactions = await context.prisma.account.findFirstOrThrow({
    where: {
      username: "genious147",
    },
    include: {
      gifts: {
        include: {
          case: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });
  toFile(transactions);

  // const data = await context.prisma.gift_case.findMany({
  //   select: {
  //     id: true,
  //     title: true,
  //     price: true,
  //     sku: true,
  //   },
  // });
  // toFile(data.map((item) => ({ ...item, connect: [] })));
});

// pnpm tsx cli/commands/ww.ts

// https://optimize.prisma.io/cma6ynw7c00csina44fgysbgo/recordings/setup
// https://console.prisma.io/cma6ynw7c00csina44fgysbgo/cma71sugu0000iweg84fopag2/cma71sugu0001iwegye215klo/dashboard
// https://tonconsole.com/tonapi
// https://vercel.com/denis-muraveikos-projects/gogift

// pnpm prisma generate --no-engine
// pnpm prisma migrate reset
// pnpm prisma migrate dev --create-only --name init
// pnpm prisma migrate deploy
