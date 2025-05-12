import { memo } from "react";
import { FlexProps } from "@chakra-ui/react";
import { StickerProps } from "./base";

import { StickerAstralShard } from "./astral-shard";
import { StickerBdayCandle } from "./bday-candle";
import { StickerBerryBox } from "./berry-box";
import { StickerBunnyMuffin } from "./bunny-muffin";
import { StickerCandyCane } from "./candy-cane";
import { StickerCookieHeart } from "./cookie-heart";
import { StickerCrystallBall } from "./crystall-ball";
import { StickerDeskCalendar } from "./desk-calendar";
import { StickerDiamongRing } from "./diamong-ring";
import { StickerDurovCap } from "./durov-cap";
import { StickerElectricSkull } from "./electric-skull";
import { StickerEternalRose } from "./eternal-rose";
import { StickerEvilEye } from "./evil-eye";
import { StickerGenieLamp } from "./genie-lamp";
import { StickerGingerCookie } from "./ginger-cookie";
import { StickerHeartSailor } from "./heart-sailor";
import { StickerIonGem } from "./ion-gem";
import { StickerJackInTheBox } from "./jack-in-the-box";
import { StickerKissedFrog } from "./kissed-frog";
import { StickerLolPop } from "./lol-pop";
import { StickerLootBag } from "./loot-bag";
import { StickerLovePotion } from "./love-potion";
import { StickerLunarSnake } from "./lunar-snake";
import { StickerMagicPotion } from "./magic-potion";
import { StickerMiniOscar } from "./mini-oscar";
import { StickerNekoHelmet } from "./neko-helmet";
import { StickerPerfumeBottle } from "./perfume-bottle";
import { StickerPlushPepe } from "./plush-pepe";
import { StickerPreciousPeach } from "./precious-peach";
import { StickerRecordPlayer } from "./record-player";
import { StickerSakuraFlower } from "./sakura-flower";
import { StickerSantaHat } from "./santa-hat";
import { StickerScaredCat } from "./scared-cat";
import { StickerSharpTongue } from "./sharp-tongue";
import { StickerSignetRing } from "./signet-ring";
import { StickerSnowGlobe } from "./snow-globe";
import { StickerSwissWatch } from "./swiss-watch";
import { StickerTopHat } from "./top-hat";
import { StickerToyBear } from "./toy-bear";
import { StickerTrappedHeart } from "./trapped-heart";
import { StickerVintageCigar } from "./vintage-cigar";
import { StickerVoodooDoll } from "./voodoo-doll";

import { StickerCrystallball } from "./cases/crystallball";
import { StickerDeskcalendar } from "./cases/deskcalendar";
import { StickerDiamondring } from "./cases/diamondring";
import { StickerDurovcap } from "./cases/durovcap";
import { StickerJackinthebox } from "./cases/jackinthebox";
import { StickerLootbag } from "./cases/lootbag";
import { StickerLovepotion } from "./cases/lovepotion";
import { StickerPerfumebottle } from "./cases/perfumebottle";
import { StickerPlushpepe } from "./cases/plushpepe";
import { StickerPreciouspeach } from "./cases/preciouspeach";
import { StickerSharptongue } from "./cases/sharptongue";
import { StickerVoodoodoll } from "./cases/voodoodoll";

export const Stickers = Object.freeze({
  cases: {
    crystallball: memo(StickerCrystallball),
    deskcalendar: memo(StickerDeskcalendar),
    diamondring: memo(StickerDiamondring),
    durovcap: memo(StickerDurovcap),
    jackinthebox: memo(StickerJackinthebox),
    lootbag: memo(StickerLootbag),
    lovepotion: memo(StickerLovepotion),
    perfumebottle: memo(StickerPerfumebottle),
    plushpepe: memo(StickerPlushpepe),
    preciouspeach: memo(StickerPreciouspeach),
    sharptongue: memo(StickerSharptongue),
    voodoodoll: memo(StickerVoodoodoll),
  },
  "astral-shard": memo(StickerAstralShard),
  "bday-candle": memo(StickerBdayCandle),
  "berry-box": memo(StickerBerryBox),
  "bunny-muffin": memo(StickerBunnyMuffin),
  "candy-cane": memo(StickerCandyCane),
  "cookie-heart": memo(StickerCookieHeart),
  "crystall-ball": memo(StickerCrystallBall),
  "desk-calendar": memo(StickerDeskCalendar),
  "diamong-ring": memo(StickerDiamongRing),
  "durov-cap": memo(StickerDurovCap),
  "electric-skull": memo(StickerElectricSkull),
  "eternal-rose": memo(StickerEternalRose),
  "evil-eye": memo(StickerEvilEye),
  "genie-lamp": memo(StickerGenieLamp),
  "ginger-cookie": memo(StickerGingerCookie),
  "heart-sailor": memo(StickerHeartSailor),
  "ion-gem": memo(StickerIonGem),
  "jack-in-the-box": memo(StickerJackInTheBox),
  "kissed-frog": memo(StickerKissedFrog),
  "lol-pop": memo(StickerLolPop),
  "loot-bag": memo(StickerLootBag),
  "love-potion": memo(StickerLovePotion),
  "lunar-snake": memo(StickerLunarSnake),
  "magic-potion": memo(StickerMagicPotion),
  "mini-oscar": memo(StickerMiniOscar),
  "neko-helmet": memo(StickerNekoHelmet),
  "perfume-bottle": memo(StickerPerfumeBottle),
  "plush-pepe": memo(StickerPlushPepe),
  "precious-peach": memo(StickerPreciousPeach),
  "record-player": memo(StickerRecordPlayer),
  "sakura-flower": memo(StickerSakuraFlower),
  "santa-hat": memo(StickerSantaHat),
  "scared-cat": memo(StickerScaredCat),
  "sharp-tongue": memo(StickerSharpTongue),
  "signet-ring": memo(StickerSignetRing),
  "snow-globe": memo(StickerSnowGlobe),
  "swiss-watch": memo(StickerSwissWatch),
  "top-hat": memo(StickerTopHat),
  "toy-bear": memo(StickerToyBear),
  "trapped-heart": memo(StickerTrappedHeart),
  "vintage-cigar": memo(StickerVintageCigar),
  "voodoo-doll": memo(StickerVoodooDoll),
});
