import { Prisma, PrismaClient } from "@/generated/prisma";
import crypto from "crypto";
import { sleep, toFile, wrapper } from "../utils";
import { withAccelerate } from "@prisma/extension-accelerate";
import { caseService } from "@/lib/services/case.service";
import { botService } from "@/lib/services/bot.service";
import { marketplaceService } from "@/lib/services/marketplace.service";

//https://michielp1807.github.io/lottie-editor/#/

const cases: Prisma.gift_caseCreateInput[] = [
  {
    id: "3a8e7b2c-4d5f-49a1-b7c6-2f3e1d0c9b8a",
    title: "Basic",
    price: 4.5,
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
    price: 5.5,
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
          id: "u7v8w9x0-y1z2-8901-2345-678901234567",
        },
        {
          id: "f8g9h0i1-j2k3-9012-3456-789012345678",
        },
        {
          id: "a2994033-ed47-4ec2-a37a-2df5ed83fabf",
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
          id: "n0o1p2q3-r4s5-1234-5678-901234567890",
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
    price: 7.5,
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
          id: "h4i5j6k7-l8m9-abcd-ef12-345678901234",
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
    price: 149.0,
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
          id: "e24bfbc8-0fc5-49a7-87ff-d06d6f7dc6a2",
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
          id: "m9n0o1p2-q3r4-f123-4567-890123456789",
        },
        {
          id: "52d3d0ae-f72f-4145-a822-6dcbb8af1fcd",
        },
        {
          id: "1acf10f2-35c9-44c1-95fa-24787a4acaa0",
        },
        {
          id: "c3d4e5f6-a7b8-9012-3456-7890abcdef12",
        },
        {
          id: "h4i5j6k7-l8m9-abcd-ef12-345678901234",
        },
        {
          id: "f2g3h4i5-j6k7-89ab-cdef-123456789012",
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
          id: "a2994033-ed47-4ec2-a37a-2df5ed83fabf",
        },
        {
          id: "6788d495-e828-460b-83f7-7d7bba4bc969",
        },
        {
          id: "f2g3h4i5-j6k7-89ab-cdef-123456789012",
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
          id: "y1z2a3b4-c5d6-2345-6789-012345678901",
        },
        {
          id: "c9d0e1f2-g3h4-5678-9abc-def123456789",
        },
        {
          id: "a7b8c9d0-e1f2-3456-789a-bcdef1234567",
        },
        {
          id: "f6a7b8c9-d0e1-2345-6789-0abcdef12345",
        },
        {
          id: "f2g3h4i5-j6k7-89ab-cdef-123456789012",
        },
        {
          id: "h4i5j6k7-l8m9-abcd-ef12-345678901234",
        },
      ],
    },
  },
  {
    id: "6g5h4i3j-2k1l-0m9n-8o7p-6q5r4s3t2u1v",
    title: "Dreamy Mix",
    price: 14.99,
    sku: "lootbag",
    gifts: {
      connect: [
        {
          id: "y1z2a3b4-c5d6-2345-6789-012345678901",
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
          id: "e24bfbc8-0fc5-49a7-87ff-d06d6f7dc6a2",
        },
        {
          id: "1acf10f2-35c9-44c1-95fa-24787a4acaa0",
        },
        {
          id: "c9d0e1f2-g3h4-5678-9abc-def123456789",
        },
        {
          id: "f2g3h4i5-j6k7-89ab-cdef-123456789012",
        },
        {
          id: "d4e5f6a7-b8c9-0123-4567-890abcdef123",
        },
        {
          id: "f8g9h0i1-j2k3-9012-3456-789012345678",
        },
        {
          id: "c3d4e5f6-a7b8-9012-3456-7890abcdef12",
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
    price: 44.99,
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
          id: "a7b8c9d0-e1f2-3456-789a-bcdef1234567",
        },
        {
          id: "g3h4i5j6-k7l8-9abc-def1-234567890123",
        },
        {
          id: "u7v8w9x0-y1z2-8901-2345-678901234567",
        },
        {
          id: "m9n0o1p2-q3r4-f123-4567-890123456789",
        },
        {
          id: "y1z2a3b4-c5d6-2345-6789-012345678901",
        },
        {
          id: "c5d6e7f8-g9h0-6789-0123-456789012345",
        },
        {
          id: "e24bfbc8-0fc5-49a7-87ff-d06d6f7dc6a2",
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
          id: "e24bfbc8-0fc5-49a7-87ff-d06d6f7dc6a2",
        },
        {
          id: "r4s5t6u7-v8w9-5678-9012-345678901234",
        },
        {
          id: "e24bfbc8-0fc5-49a7-87ff-d06d6f7dc6a2",
        },
        {
          id: "e1f2g3h4-i5j6-789a-bcde-f12345678901",
        },
        {
          id: "c9d0e1f2-g3h4-5678-9abc-def123456789",
        },
      ],
    },
  },
  {
    id: "1b2c3d4e-5f6g-7h8i-9j0k-1l2m3n4o5p6q",
    title: "Golden Dream",
    price: 135.0,
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
          id: "a3b4c5d6-e7f8-4567-8901-234567890123",
        },
        {
          id: "a1b2c3d4-e5f6-7890-1234-567890abcdef",
        },
        {
          id: "e24bfbc8-0fc5-49a7-87ff-d06d6f7dc6a2",
        },
        {
          id: "p2q3r4s5-t6u7-3456-7890-123456789012",
        },
        {
          id: "o1p2q3r4-s5t6-2345-6789-012345678901",
        },
        {
          id: "g3h4i5j6-k7l8-9abc-def1-234567890123",
        },
        {
          id: "j6k7l8m9-n0o1-cdef-1234-567890123456",
        },
      ],
    },
  },
  {
    id: "7d0eb1d0-0302-46fb-9f61-ad7a421d66ac",
    title: "First Shot",
    price: 1.0,
    sku: "cold-mint",
    gifts: {
      connect: [
        {
          id: "q3r4s5t6-u7v8-4567-8901-234567890123",
        },
        {
          id: "b4c5d6e7-f8g9-5678-9012-345678901234",
        },
        {
          id: "d6e7f8g9-h0i1-7890-1234-567890123456",
        },
        {
          id: "a2994033-ed47-4ec2-a37a-2df5ed83fabf",
        },
        {
          id: "d4e5f6a7-b8c9-0123-4567-890abcdef123",
        },
        {
          id: "e671b71a-2817-4791-b460-4d4e7148a2d3",
        },
        {
          id: "6788d495-e828-460b-83f7-7d7bba4bc969",
        },
        {
          id: "afac4bad-1e6a-47a2-87f6-de3112c16075",
        },
        {
          id: "l8m9n0o1-p2q3-ef12-3456-789012345678",
        },
        {
          id: "210eca60-d829-48dd-a22f-89739f579ec8",
        },
        {
          id: "9045f7ac-eb76-4b47-b116-80c377ec1276",
        },
        {
          id: "a947335c-3ed7-4e3b-9e35-3512de2af759",
        },
      ],
    },
  },
];

const nfts: Prisma.nftCreateInput[] = [
  {
    id: "a1b2c3d4-e5f6-7890-1234-567890abcdef",
    sku: "astral-shard",
    price: 187,
    title: "Astral Shard",
  },
  {
    id: "b2c3d4e5-f6a7-8901-2345-67890abcdef1",
    sku: "bday-candle",
    price: 1.21,
    title: "Bday Candle",
  },
  {
    id: "c3d4e5f6-a7b8-9012-3456-7890abcdef12",
    sku: "berry-box",
    price: 7.92,
    title: "Berry Box",
  },
  {
    id: "d4e5f6a7-b8c9-0123-4567-890abcdef123",
    sku: "bunny-muffin",
    price: 8.03,
    title: "Bunny Muffin",
  },
  {
    id: "e5f6a7b8-c9d0-1234-5678-90abcdef1234",
    sku: "candy-cane",
    price: 2.2,
    title: "Candy Cane",
  },
  {
    id: "f6a7b8c9-d0e1-2345-6789-0abcdef12345",
    sku: "cookie-heart",
    price: 2.97,
    title: "Cookie Heart",
  },
  {
    id: "a7b8c9d0-e1f2-3456-789a-bcdef1234567",
    sku: "crystall-ball",
    price: 20.24,
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
    price: 28.6,
    title: "Diamong Ring",
  },
  {
    id: "52d3d0ae-f72f-4145-a822-6dcbb8af1fcd",
    sku: "durov-cap",
    price: 962,
    title: "Durov Cap",
  },
  {
    id: "d0e1f2g3-h4i5-6789-abcd-ef1234567890",
    sku: "electric-skull",
    price: 66,
    title: "Electric Skull",
  },
  {
    id: "e1f2g3h4-i5j6-789a-bcde-f12345678901",
    sku: "eternal-rose",
    price: 33,
    title: "Eternal Rose",
  },
  {
    id: "f2g3h4i5-j6k7-89ab-cdef-123456789012",
    sku: "evil-eye",
    price: 5.5,
    title: "Evil Eye",
  },
  {
    id: "g3h4i5j6-k7l8-9abc-def1-234567890123",
    sku: "genie-lamp",
    price: 113,
    title: "Genie Lamp",
  },
  {
    id: "h4i5j6k7-l8m9-abcd-ef12-345678901234",
    sku: "ginger-cookie",
    price: 3.3,
    title: "Ginger Cookie",
  },
  {
    id: "a2994033-ed47-4ec2-a37a-2df5ed83fabf",
    sku: "hanging-star",
    price: 12.1,
    title: "Hanging Star",
  },
  {
    id: "j6k7l8m9-n0o1-cdef-1234-567890123456",
    sku: "ion-gem",
    price: 187,
    title: "Ion Gem",
  },
  {
    id: "k7l8m9n0-o1p2-def1-2345-678901234567",
    sku: "jack-in-the-box",
    price: 2.2,
    title: "Jack In The Box",
  },
  {
    id: "5c270d25-26cd-4dbf-8276-ac0c800d4dd2",
    sku: "kissed-frog",
    price: 52.8,
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
    price: 115.39,
    title: "Loot bag",
  },
  {
    id: "m9n0o1p2-q3r4-f123-4567-890123456789",
    sku: "love-potion",
    price: 21.6,
    title: "Love Potion",
  },
  {
    id: "n0o1p2q3-r4s5-1234-5678-901234567890",
    sku: "lunar-snake",
    price: 1.65,
    title: "Lunar Snake",
  },
  {
    id: "o1p2q3r4-s5t6-2345-6789-012345678901",
    sku: "magic-potion",
    price: 148.9,
    title: "Magic Potion",
  },
  {
    id: "p2q3r4s5-t6u7-3456-7890-123456789012",
    sku: "mini-oscar",
    price: 203.5,
    title: "Mini Oscar",
  },
  {
    id: "q3r4s5t6-u7v8-4567-8901-234567890123",
    sku: "neko-helmet",
    price: 61.6,
    title: "Neko Helmet",
  },
  {
    id: "r4s5t6u7-v8w9-5678-9012-345678901234",
    sku: "perfume-bottle",
    price: 176,
    title: "Perfume Bottle",
  },
  {
    id: "s5t6u7v8-w9x0-6789-0123-456789012345",
    sku: "plush-pepe",
    price: 4070,
    title: "Plush Pepe",
  },
  {
    id: "t6u7v8w9-x0y1-7890-1234-567890123456",
    sku: "precious-peach",
    price: 797.5,
    title: "Precious Peach",
  },
  {
    id: "u7v8w9x0-y1z2-8901-2345-678901234567",
    sku: "record-player",
    price: 17.6,
    title: "Record Player",
  },
  {
    id: "v8w9x0y1-z2a3-9012-3456-789012345678",
    sku: "sakura-flower",
    price: 7.535,
    title: "Sakura Flower",
  },
  {
    id: "w9x0y1z2-a3b4-0123-4567-890123456789",
    sku: "santa-hat",
    price: 4.125,
    title: "Santa Hat",
  },
  {
    id: "x0y1z2a3-b4c5-1234-5678-901234567890",
    sku: "scared-cat",
    price: 83.6,
    title: "Scared Cat",
  },
  {
    id: "y1z2a3b4-c5d6-2345-6789-012345678901",
    sku: "sharp-tongue",
    price: 72.2,
    title: "Sharp Tongue",
  },
  {
    id: "e24bfbc8-0fc5-49a7-87ff-d06d6f7dc6a2",
    sku: "signet-ring",
    price: 72.05,
    title: "Signet Ring",
  },
  {
    id: "e671b71a-2817-4791-b460-4d4e7148a2d3",
    sku: "snake-box",
    price: 2.42,
    title: "Snake Box",
  },
  {
    id: "z2a3b4c5-d6e7-3456-7890-123456789012",
    sku: "snow-globe",
    price: 7.975,
    title: "Snow Globe",
  },
  {
    id: "a3b4c5d6-e7f8-4567-8901-234567890123",
    sku: "swiss-watch",
    price: 64.9,
    title: "Swiss Watch",
  },
  {
    id: "b4c5d6e7-f8g9-5678-9012-345678901234",
    sku: "top-hat",
    price: 27.65,
    title: "Top Hat",
  },
  {
    id: "c5d6e7f8-g9h0-6789-0123-456789012345",
    sku: "toy-bear",
    price: 39.8,
    title: "Toy Bear",
  },
  {
    id: "d6e7f8g9-h0i1-7890-1234-567890123456",
    sku: "trapped-heart",
    price: 18.7,
    title: "Trapped Heart",
  },
  {
    id: "e7f8g9h0-i1j2-8901-2345-678901234567",
    sku: "vintage-cigar",
    price: 57,
    title: "Vintage Cigar",
  },
  {
    id: "f8g9h0i1-j2k3-9012-3456-789012345678",
    sku: "voodoo-doll",
    price: 29.7,
    title: "Voodoo Doll",
  },
  {
    id: "6788d495-e828-460b-83f7-7d7bba4bc969",
    sku: "star-notepad",
    price: 5.28,
    title: "Star Notepad",
  },
  {
    id: "c70e4ceb-002a-464c-b513-d3410d105035",
    sku: "witch-hat",
    price: 4.75,
    title: "Witch Hat",
  },
  {
    id: "afac4bad-1e6a-47a2-87f6-de3112c16075",
    sku: "xmas-stocking",
    price: 2.2,
    title: "Xmas Stocking",
  },
];

// const prisma = new PrismaClient().$extends(withAccelerate());

await wrapper(async ({ context, parameters }) => {
  const seed = async () => {
    await context.prisma.$transaction(
      async (tx) => {
        await tx.nft.createMany({
          data: nfts,
        });

        for (const gift_case of cases) {
          await tx.gift_case.create({
            data: gift_case,
          });
        }

        await tx.account.create({
          data: {
            id: "4fe37b3a-40df-4f97-bfd8-6596e3694c0c",
            username: "mrMuraveiko",
            balance: 10000,
            referral: {
              create: {
                value: "devref",
              },
            },
          },
        });
      },
      {
        timeout: 10_000,
      }
    );
  };
  // await seed();

  const update_nfts = async () => {
    for (const nft of nfts) {
      await context.prisma.nft.upsert({
        where: {
          id: nft.id,
        },
        update: {
          price: nft.price,
        },
        create: {
          ...nft,
        },
      });
    }
  };
  // await update_nfts();

  const update_cases = async () => {
    for (const gift_case of cases) {
      const { id, title, price, sku, gifts } = gift_case;
      const g_case = await context.prisma.gift_case.findUnique({
        where: {
          id,
        },
        select: {
          gifts: {
            select: {
              id: true,
            },
          },
        },
      });

      if (!g_case) {
        console.log(g_case);
      }
      await context.prisma.gift_case.upsert({
        where: {
          id,
        },
        update: {
          price,
          gifts: {
            disconnect: g_case?.gifts.map(({ id }) => ({ id })),
            connect: gifts?.connect,
          },
        },
        create: {
          id,
          title,
          price,
          sku,
          gifts: {
            connect: gifts?.connect,
          },
        },
      });
    }
  };
  await update_cases();
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
