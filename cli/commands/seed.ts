import { Prisma, PrismaClient } from "@/generated/prisma";
import { sleep, toFile, wrapper } from "../utils";
import { withAccelerate } from "@prisma/extension-accelerate";
import { caseService } from "@/lib/services/case.service";
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
        { id: "x0y1z2a3-b4c5-1234-5678-901234567890" }, // Scared Cat
        { id: "c9d0e1f2-g3h4-5678-9abc-def123456789" }, // Diamong Ring
        { id: "m9n0o1p2-q3r4-f123-4567-890123456789" }, // Love Potion
        { id: "a7b8c9d0-e1f2-3456-789a-bcdef1234567" }, // Crystall Ball
        { id: "d4e5f6a7-b8c9-0123-4567-890abcdef123" }, // Bunny Muffin
        { id: "6788d495-e828-460b-83f7-7d7bba4bc969" }, // Star Notepad
        { id: "w9x0y1z2-a3b4-0123-4567-890123456789" }, // Santa Hat
        { id: "h4i5j6k7-l8m9-abcd-ef12-345678901234" }, // Ginger Cookie
        { id: "f6a7b8c9-d0e1-2345-6789-0abcdef12345" }, // Cookie Heart
        { id: "k7l8m9n0-o1p2-def1-2345-678901234567" }, // Jack In The Box
        { id: "e5f6a7b8-c9d0-1234-5678-90abcdef1234" }, // Candy Cane
        { id: "n0o1p2q3-r4s5-1234-5678-901234567890" }, // Lunar Snake
        { id: "b2c3d4e5-f6a7-8901-2345-67890abcdef1" }, // Bday Candle
        { id: "l8m9n0o1-p2q3-ef12-3456-789012345678" }, // Lol Pop
        { id: "b8c9d0e1-f2g3-4567-89ab-cdef12345678" }, // Desk Calendar
        { id: "c70e4ceb-002a-464c-b513-d3410d105035" }, // Witch Hat
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
        { id: "t6u7v8w9-x0y1-7890-1234-567890123456" }, // Precious Peach
        { id: "r4s5t6u7-v8w9-5678-9012-345678901234" }, // Perfume Bottle
        { id: "1acf10f2-35c9-44c1-95fa-24787a4acaa0" }, // Loot Bag
        { id: "c9d0e1f2-g3h4-5678-9abc-def123456789" }, // Diamong Ring
        { id: "f8g9h0i1-j2k3-9012-3456-789012345678" }, // Voodoo Doll
        { id: "m9n0o1p2-q3r4-f123-4567-890123456789" }, // Love Potion
        { id: "a7b8c9d0-e1f2-3456-789a-bcdef1234567" }, // Crystall Ball
        { id: "d4e5f6a7-b8c9-0123-4567-890abcdef123" }, // Bunny Muffin
        { id: "w9x0y1z2-a3b4-0123-4567-890123456789" }, // Santa Hat
        { id: "h4i5j6k7-l8m9-abcd-ef12-345678901234" }, // Ginger Cookie
        { id: "f6a7b8c9-d0e1-2345-6789-0abcdef12345" }, // Cookie Heart
        { id: "b2c3d4e5-f6a7-8901-2345-67890abcdef1" }, // Bday Candle
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
        { id: "52d3d0ae-f72f-4145-a822-6dcbb8af1fcd" }, // Durov Cap
        { id: "t6u7v8w9-x0y1-7890-1234-567890123456" }, // Precious Peach
        { id: "o1p2q3r4-s5t6-2345-6789-012345678901" }, // Magic Potion
        { id: "1acf10f2-35c9-44c1-95fa-24787a4acaa0" }, // Loot Bag
        { id: "c9d0e1f2-g3h4-5678-9abc-def123456789" }, // Diamong Ring
        { id: "m9n0o1p2-q3r4-f123-4567-890123456789" }, // Love Potion
        { id: "a7b8c9d0-e1f2-3456-789a-bcdef1234567" }, // Crystall Ball
        { id: "d4e5f6a7-b8c9-0123-4567-890abcdef123" }, // Bunny Muffin
        { id: "w9x0y1z2-a3b4-0123-4567-890123456789" }, // Santa Hat
        { id: "f6a7b8c9-d0e1-2345-6789-0abcdef12345" }, // Cookie Heart
        { id: "c70e4ceb-002a-464c-b513-d3410d105035" }, // Witch Hat
        { id: "k7l8m9n0-o1p2-def1-2345-678901234567" }, // Jack In The Box
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
        { id: "s5t6u7v8-w9x0-6789-0123-456789012345" }, // Plush Pepe
        { id: "52d3d0ae-f72f-4145-a822-6dcbb8af1fcd" }, // Durov Cap
        { id: "t6u7v8w9-x0y1-7890-1234-567890123456" }, // Precious Peach
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
        { id: "s5t6u7v8-w9x0-6789-0123-456789012345" }, // Plush Pepe
        { id: "52d3d0ae-f72f-4145-a822-6dcbb8af1fcd" }, // Durov Cap
        { id: "1acf10f2-35c9-44c1-95fa-24787a4acaa0" }, // Loot Bag
        { id: "c9d0e1f2-g3h4-5678-9abc-def123456789" }, // Diamong Ring
        { id: "h4i5j6k7-l8m9-abcd-ef12-345678901234" }, // Ginger Cookie
        { id: "f6a7b8c9-d0e1-2345-6789-0abcdef12345" }, // Cookie Heart
        { id: "b2c3d4e5-f6a7-8901-2345-67890abcdef1" }, // Bday Candle
        { id: "b8c9d0e1-f2g3-4567-89ab-cdef12345678" }, // Desk Calendar
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
        { id: "s5t6u7v8-w9x0-6789-0123-456789012345" }, // Plush Pepe
        { id: "52d3d0ae-f72f-4145-a822-6dcbb8af1fcd" }, // Durov Cap
        { id: "r4s5t6u7-v8w9-5678-9012-345678901234" }, // Perfume Bottle
        { id: "o1p2q3r4-s5t6-2345-6789-012345678901" }, // Magic Potion
        { id: "1acf10f2-35c9-44c1-95fa-24787a4acaa0" }, // Loot Bag
        { id: "c9d0e1f2-g3h4-5678-9abc-def123456789" }, // Diamong Ring
        { id: "a7b8c9d0-e1f2-3456-789a-bcdef1234567" }, // Crystall Ball
        { id: "d4e5f6a7-b8c9-0123-4567-890abcdef123" }, // Bunny Muffin
        { id: "b8c9d0e1-f2g3-4567-89ab-cdef12345678" }, // Desk Calendar
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
        { id: "s5t6u7v8-w9x0-6789-0123-456789012345" }, // Plush Pepe
        { id: "52d3d0ae-f72f-4145-a822-6dcbb8af1fcd" }, // Durov Cap
        { id: "t6u7v8w9-x0y1-7890-1234-567890123456" }, // Precious Peach
        { id: "o1p2q3r4-s5t6-2345-6789-012345678901" }, // Magic Potion
        { id: "c9d0e1f2-g3h4-5678-9abc-def123456789" }, // Diamong Ring
        { id: "m9n0o1p2-q3r4-f123-4567-890123456789" }, // Love Potion
        { id: "f6a7b8c9-d0e1-2345-6789-0abcdef12345" }, // Cookie Heart
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
        { id: "s5t6u7v8-w9x0-6789-0123-456789012345" }, // Plush Pepe
        { id: "52d3d0ae-f72f-4145-a822-6dcbb8af1fcd" }, // Durov Cap
        { id: "t6u7v8w9-x0y1-7890-1234-567890123456" }, // Precious Peach
        { id: "r4s5t6u7-v8w9-5678-9012-345678901234" }, // Perfume Bottle
        { id: "o1p2q3r4-s5t6-2345-6789-012345678901" }, // Magic Potion
        { id: "1acf10f2-35c9-44c1-95fa-24787a4acaa0" }, // Loot Bag
        { id: "c9d0e1f2-g3h4-5678-9abc-def123456789" }, // Diamong Ring
        { id: "m9n0o1p2-q3r4-f123-4567-890123456789" }, // Love Potion
        { id: "a7b8c9d0-e1f2-3456-789a-bcdef1234567" }, // Crystall Ball
        { id: "d4e5f6a7-b8c9-0123-4567-890abcdef123" }, // Bunny Muffin
        { id: "z2a3b4c5-d6e7-3456-7890-123456789012" }, // Snow Globe
        { id: "6788d495-e828-460b-83f7-7d7bba4bc969" }, // Star Notepad
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
        { id: "s5t6u7v8-w9x0-6789-0123-456789012345" }, // Plush Pepe
        { id: "52d3d0ae-f72f-4145-a822-6dcbb8af1fcd" }, // Durov Cap
        { id: "j6k7l8m9-n0o1-cdef-1234-567890123456" }, // Ion Gem
        { id: "t6u7v8w9-x0y1-7890-1234-567890123456" }, // Precious Peach
        { id: "r4s5t6u7-v8w9-5678-9012-345678901234" }, // Perfume Bottle
        { id: "o1p2q3r4-s5t6-2345-6789-012345678901" }, // Magic Potion
        { id: "1acf10f2-35c9-44c1-95fa-24787a4acaa0" }, // Loot Bag
        { id: "g3h4i5j6-k7l8-9abc-def1-234567890123" }, // Genie Lamp
        { id: "c9d0e1f2-g3h4-5678-9abc-def123456789" }, // Diamong Ring
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
        { id: "s5t6u7v8-w9x0-6789-0123-456789012345" }, // Plush Pepe
        { id: "52d3d0ae-f72f-4145-a822-6dcbb8af1fcd" }, // Durov Cap
        { id: "t6u7v8w9-x0y1-7890-1234-567890123456" }, // Precious Peach
        { id: "j6k7l8m9-n0o1-cdef-1234-567890123456" }, // Ion Gem
        { id: "r4s5t6u7-v8w9-5678-9012-345678901234" }, // Perfume Bottle
        { id: "o1p2q3r4-s5t6-2345-6789-012345678901" }, // Magic Potion
        { id: "1acf10f2-35c9-44c1-95fa-24787a4acaa0" }, // Loot Bag
      ],
    },
  },
  // {
  //   id: "2c3d4e5f-6g7h-8i9j-0k1l-2m3n4o5p6q7r",
  //   title: "High Stakes",
  //   price: 5.2,
  //   sku: "durovcap",
  //   gifts: {
  //     connect: [
  //       { id: "s5t6u7v8-w9x0-6789-0123-456789012345" }, // Plush Pepe
  //       { id: "52d3d0ae-f72f-4145-a822-6dcbb8af1fcd" }, // Durov's Cap
  //       { id: "t6u7v8w9-x0y1-7890-1234-567890123456" }, // Precious Peach
  //       { id: "r4s5t6u7-v8w9-5678-9012-345678901234" }, // Perfume Bottle
  //       { id: "o1p2q3r4-s5t6-2345-6789-012345678901" }, // Magic Potion
  //       { id: "1acf10f2-35c9-44c1-95fa-24787a4acaa0" }, // Loot Bag
  //       { id: "c9d0e1f2-g3h4-5678-9abc-def123456789" }, // Diamond Ring
  //       { id: "d4e5f6a7-b8c9-0123-4567-890abcdef123" }, // Bunny Muffin
  //     ],
  //   },
  // },
  {
    id: "1b2c3d4e-5f6g-7h8i-9j0k-1l2m3n4o5p6q",
    title: "Golden Dream",
    price: 99.99,
    sku: "plushpepe",
    gifts: {
      connect: [
        { id: "s5t6u7v8-w9x0-6789-0123-456789012345" }, // Plush Pepe
        { id: "52d3d0ae-f72f-4145-a822-6dcbb8af1fcd" }, // Durov Cap
        { id: "t6u7v8w9-x0y1-7890-1234-567890123456" }, // Precious Peach
        { id: "j6k7l8m9-n0o1-cdef-1234-567890123456" }, // Ion Gem
        { id: "a1b2c3d4-e5f6-7890-1234-567890abcdef" }, // Astral Shard
        { id: "r4s5t6u7-v8w9-5678-9012-345678901234" }, // Perfume Bottle
        { id: "p2q3r4s5-t6u7-3456-7890-123456789012" }, // Mini Oscar
        { id: "o1p2q3r4-s5t6-2345-6789-012345678901" }, // Magic Potion
      ],
    },
  },
];

const nfts: Prisma.nftCreateInput[] = [
  {
    id: "a1b2c3d4-e5f6-7890-1234-567890abcdef",
    sku: "astral-shard",
    price: 35.1,
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
    price: 3.2,
    title: "Berry Box",
  },
  {
    id: "d4e5f6a7-b8c9-0123-4567-890abcdef123",
    sku: "bunny-muffin",
    price: 2.64,
    title: "Bunny Muffin",
  },
  {
    id: "e5f6a7b8-c9d0-1234-5678-90abcdef1234",
    sku: "candy-cane",
    price: 1.16,
    title: "Candy Cane",
  },
  {
    id: "f6a7b8c9-d0e1-2345-6789-0abcdef12345",
    sku: "cookie-heart",
    price: 1.2,
    title: "Cookie Heart",
  },
  {
    id: "a7b8c9d0-e1f2-3456-789a-bcdef1234567",
    sku: "crystall-ball",
    price: 1.1,
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
    price: 7.4,
    title: "Diamong Ring",
  },
  {
    id: "52d3d0ae-f72f-4145-a822-6dcbb8af1fcd",
    sku: "durov-cap",
    price: 194.7,
    title: "Durov Cap",
  },
  {
    id: "d0e1f2g3-h4i5-6789-abcd-ef1234567890",
    sku: "electric-skull",
    price: 10.6,
    title: "Electric Skull",
  },
  {
    id: "e1f2g3h4-i5j6-789a-bcde-f12345678901",
    sku: "eternal-rose",
    price: 7.7,
    title: "Eternal Rose",
  },
  {
    id: "f2g3h4i5-j6k7-89ab-cdef-123456789012",
    sku: "evil-eye",
    price: 2.12,
    title: "Evil Eye",
  },
  {
    id: "g3h4i5j6-k7l8-9abc-def1-234567890123",
    sku: "genie-lamp",
    price: 15.9,
    title: "Genie Lamp",
  },
  {
    id: "h4i5j6k7-l8m9-abcd-ef12-345678901234",
    sku: "ginger-cookie",
    price: 1.7,
    title: "Ginger Cookie",
  },
  {
    id: "i5j6k7l8-m9n0-bcde-f123-456789012345",
    sku: "heart-sailor",
    price: 3.8,
    title: "Heart Sailor",
  },
  {
    id: "j6k7l8m9-n0o1-cdef-1234-567890123456",
    sku: "ion-gem",
    price: 40.7,
    title: "Ion Gem",
  },
  {
    id: "k7l8m9n0-o1p2-def1-2345-678901234567",
    sku: "jack-in-the-box",
    price: 1.3,
    title: "Jack In The Box",
  },
  {
    id: "5c270d25-26cd-4dbf-8276-ac0c800d4dd2",
    sku: "kissed-frog",
    price: 12.1,
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
    price: 19.3,
    title: "Loot bag",
  },
  {
    id: "m9n0o1p2-q3r4-f123-4567-890123456789",
    sku: "love-potion",
    price: 4.8,
    title: "Love Potion",
  },
  {
    id: "n0o1p2q3-r4s5-1234-5678-901234567890",
    sku: "lunar-snake",
    price: 1.1,
    title: "Lunar Snake",
  },
  {
    id: "o1p2q3r4-s5t6-2345-6789-012345678901",
    sku: "magic-potion",
    price: 20.9,
    title: "Magic Potion",
  },
  {
    id: "p2q3r4s5-t6u7-3456-7890-123456789012",
    sku: "mini-oscar",
    price: 37.2,
    title: "Mini Oscar",
  },
  {
    id: "q3r4s5t6-u7v8-4567-8901-234567890123",
    sku: "neko-helmet",
    price: 12.1,
    title: "Neko Helmet",
  },
  {
    id: "r4s5t6u7-v8w9-5678-9012-345678901234",
    sku: "perfume-bottle",
    price: 31.9,
    title: "Perfume Bottle",
  },
  {
    id: "s5t6u7v8-w9x0-6789-0123-456789012345",
    sku: "plush-pepe",
    price: 880,
    title: "Plush Pepe",
  },
  {
    id: "t6u7v8w9-x0y1-7890-1234-567890123456",
    sku: "precious-peach",
    price: 95.6,
    title: "Precious Peach",
  },
  {
    id: "u7v8w9x0-y1z2-8901-2345-678901234567",
    sku: "record-player",
    price: 3.25,
    title: "Record Player",
  },
  {
    id: "v8w9x0y1-z2a3-9012-3456-789012345678",
    sku: "sakura-flower",
    price: 3.7,
    title: "Sakura Flower",
  },
  {
    id: "w9x0y1z2-a3b4-0123-4567-890123456789",
    sku: "santa-hat",
    price: 1.2,
    title: "Santa Hat",
  },
  {
    id: "x0y1z2a3-b4c5-1234-5678-901234567890",
    sku: "scared-cat",
    price: 20.7,
    title: "Scared Cat",
  },
  {
    id: "y1z2a3b4-c5d6-2345-6789-012345678901",
    sku: "sharp-tongue",
    price: 12.3,
    title: "Sharp Tongue",
  },
  {
    id: "e24bfbc8-0fc5-49a7-87ff-d06d6f7dc6a2",
    sku: "signet-ring",
    price: 13.7,
    title: "Signet Ring",
  },
  {
    id: "z2a3b4c5-d6e7-3456-7890-123456789012",
    sku: "snow-globe",
    price: 1.65,
    title: "Snow Globe",
  },
  {
    id: "a3b4c5d6-e7f8-4567-8901-234567890123",
    sku: "swiss-watch",
    price: 17.1,
    title: "Swiss Watch",
  },
  {
    id: "b4c5d6e7-f8g9-5678-9012-345678901234",
    sku: "top-hat",
    price: 4.4,
    title: "Top Hat",
  },
  {
    id: "c5d6e7f8-g9h0-6789-0123-456789012345",
    sku: "toy-bear",
    price: 15.2,
    title: "Toy Bear",
  },
  {
    id: "d6e7f8g9-h0i1-7890-1234-567890123456",
    sku: "trapped-heart",
    price: 3.8,
    title: "Trapped Heart",
  },
  {
    id: "e7f8g9h0-i1j2-8901-2345-678901234567",
    sku: "vintage-cigar",
    price: 15.3,
    title: "Vintage Cigar",
  },
  {
    id: "f8g9h0i1-j2k3-9012-3456-789012345678",
    sku: "voodoo-doll",
    price: 8.8,
    title: "Voodoo Doll",
  },
  {
    id: "6788d495-e828-460b-83f7-7d7bba4bc969",
    sku: "star-notepad",
    price: 1.45,
    title: "Star Notepad",
  },
  {
    id: "c70e4ceb-002a-464c-b513-d3410d105035",
    sku: "witch-hat",
    price: 1.2,
    title: "Witch Hat",
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
      },
      {
        timeout: 10_000,
      }
    );
  };

  // const cases = await context.prisma.gift_case.findMany({
  //   include: {
  //     gifts: true,
  //   },
  // });

  // const data: {
  //   title: string;
  //   current_price: number;
  //   price_50_margin: number;
  // }[] = [];
  // for (const g_case of cases) {
  //   const price = caseService.calculatePrice(g_case.gifts, 0.5);
  //   data.push({
  //     title: g_case.title,
  //     current_price: g_case.price,
  //     price_50_margin: price,
  //   });
  // }
  // console.table(data);

  // await seed();

  // await botService.onDeposit({ transactionId: "" });
  // await tonService.send({
  //   address: "UQAUAGndY4LtOclj3DWhSKUiLECRLfdXNZknZjEj1det9DwZ",
  //   amount: 0.5,
  // });
  // https://web-virid-kappa.vercel.app/api/webhook/ton
  await sleep(99999);
});

// pnpm tsx cli/commands/ww.ts

// https://optimize.prisma.io/cma6ynw7c00csina44fgysbgo/recordings/setup
// https://console.prisma.io/cma6ynw7c00csina44fgysbgo/cma71sugu0000iweg84fopag2/cma71sugu0001iwegye215klo/dashboard

// gift pics https://www.flaticon.com/packs/boxing-day-19

// pnpm prisma generate --no-engine
// pnpm prisma migrate reset
// pnpm prisma migrate dev --create-only --name init
// pnpm prisma migrate deploy
