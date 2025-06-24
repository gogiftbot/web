import { memo } from "react";

import { StickerTon } from "./ton";

import { StickerAstralShard } from "./astral-shard";
import { StickerBdayCandle } from "./bday-candle";
import { StickerBerryBox } from "./berry-box";
import { StickerBowTie } from "./bow-tie";
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
import { StickerFlyingBroom } from "./flying-broom";
import { StickerGemSignet } from "./gem-signet";
import { StickerGenieLamp } from "./genie-lamp";
import { StickerGingerCookie } from "./ginger-cookie";
import { StickerHangingStar } from "./hanging-star";
import { StickerHeartLocket } from "./heart-locket";
import { StickerHeartSailor } from "./heart-sailor";
import { StickerHeroicHelmet } from "./heroic-helmet";
import { StickerIonGem } from "./ion-gem";
import { StickerJackInTheBox } from "./jack-in-the-box";
import { StickerKissedFrog } from "./kissed-frog";
import { StickerLightSword } from "./light-sword";
import { StickerLolPop } from "./lol-pop";
import { StickerLootBag } from "./loot-bag";
import { StickerLoveCandle } from "./love-candle";
import { StickerLovePotion } from "./love-potion";
import { StickerLunarSnake } from "./lunar-snake";
import { StickerMagicPotion } from "./magic-potion";
import { StickerMiniOscar } from "./mini-oscar";
import { StickerNekoHelmet } from "./neko-helmet";
import { StickerPerfumeBottle } from "./perfume-bottle";
import { StickerPlushPepe } from "./plush-pepe";
import { StickerPreciousPeach } from "./precious-peach";
import { StickerRecordPlayer } from "./record-player";
import { StickerRestlessJar } from "./restless-jar";
import { StickerSakuraFlower } from "./sakura-flower";
import { StickerSantaHat } from "./santa-hat";
import { StickerScaredCat } from "./scared-cat";
import { StickerSharpTongue } from "./sharp-tongue";
import { StickerSignetRing } from "./signet-ring";
import { StickerSnakeBox } from "./snake-box";
import { StickerSnowGlobe } from "./snow-globe";
import { StickerStarNotepad } from "./star-notepad";
import { StickerSwissWatch } from "./swiss-watch";
import { StickerTopHat } from "./top-hat";
import { StickerToyBear } from "./toy-bear";
import { StickerTrappedHeart } from "./trapped-heart";
import { StickerVintageCigar } from "./vintage-cigar";
import { StickerVoodooDoll } from "./voodoo-doll";
import { StickerWitchHat } from "./witch-hat";
import { StickerXmasStocking } from "./xmas-stocking";

import { StickerColdMint } from "./cases/cold-mint";
import { StickerCrystallball } from "./cases/crystallball";
import { StickerDeskcalendar } from "./cases/deskcalendar";
import { StickerDiamondring } from "./cases/diamondring";
import { StickerDurovcap } from "./cases/durovcap";
import { StickerEasterEgg } from "./cases/easter-egg";
import { StickerHeartsSecret } from "./cases/heart’s-secret";
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
    "cold-mint": memo(StickerColdMint),
    crystallball: memo(StickerCrystallball),
    deskcalendar: memo(StickerDeskcalendar),
    diamondring: memo(StickerDiamondring),
    durovcap: memo(StickerDurovcap),
    "easter-egg": memo(StickerEasterEgg),
    "heart’s-secret": memo(StickerHeartsSecret),
    jackinthebox: memo(StickerJackinthebox),
    lootbag: memo(StickerLootbag),
    lovepotion: memo(StickerLovepotion),
    perfumebottle: memo(StickerPerfumebottle),
    plushpepe: memo(StickerPlushpepe),
    preciouspeach: memo(StickerPreciouspeach),
    sharptongue: memo(StickerSharptongue),
    voodoodoll: memo(StickerVoodoodoll),
  },
  ton: memo(StickerTon),
  "astral-shard": memo(StickerAstralShard),
  "bday-candle": memo(StickerBdayCandle),
  "berry-box": memo(StickerBerryBox),
  "bow-tie": memo(StickerBowTie),
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
  "flying-broom": memo(StickerFlyingBroom),
  "gem-signet": memo(StickerGemSignet),
  "genie-lamp": memo(StickerGenieLamp),
  "ginger-cookie": memo(StickerGingerCookie),
  "hanging-star": memo(StickerHangingStar),
  "heart-locket": memo(StickerHeartLocket),
  "heart-sailor": memo(StickerHeartSailor),
  "heroic-helmet": memo(StickerHeroicHelmet),
  "ion-gem": memo(StickerIonGem),
  "jack-in-the-box": memo(StickerJackInTheBox),
  "kissed-frog": memo(StickerKissedFrog),
  "light-sword": memo(StickerLightSword),
  "lol-pop": memo(StickerLolPop),
  "loot-bag": memo(StickerLootBag),
  "love-candle": memo(StickerLoveCandle),
  "love-potion": memo(StickerLovePotion),
  "lunar-snake": memo(StickerLunarSnake),
  "magic-potion": memo(StickerMagicPotion),
  "mini-oscar": memo(StickerMiniOscar),
  "neko-helmet": memo(StickerNekoHelmet),
  "perfume-bottle": memo(StickerPerfumeBottle),
  "plush-pepe": memo(StickerPlushPepe),
  "precious-peach": memo(StickerPreciousPeach),
  "record-player": memo(StickerRecordPlayer),
  "restless-jar": memo(StickerRestlessJar),
  "sakura-flower": memo(StickerSakuraFlower),
  "santa-hat": memo(StickerSantaHat),
  "scared-cat": memo(StickerScaredCat),
  "sharp-tongue": memo(StickerSharpTongue),
  "signet-ring": memo(StickerSignetRing),
  "snake-box": memo(StickerSnakeBox),
  "snow-globe": memo(StickerSnowGlobe),
  "star-notepad": memo(StickerStarNotepad),
  "swiss-watch": memo(StickerSwissWatch),
  "top-hat": memo(StickerTopHat),
  "toy-bear": memo(StickerToyBear),
  "trapped-heart": memo(StickerTrappedHeart),
  "vintage-cigar": memo(StickerVintageCigar),
  "voodoo-doll": memo(StickerVoodooDoll),
  "witch-hat": memo(StickerWitchHat),
  "xmas-stocking": memo(StickerXmasStocking),
});
