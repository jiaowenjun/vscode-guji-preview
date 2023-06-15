import { expect, test } from "vitest";
import { parsePages } from "../src/parser/parse-pages";
import { toHtml } from "../src/components/html";
import { pages } from "../src/components/pages";
import { renderToString } from "react-dom/server";

test("parse", () => {
  const text = `
  @0316

  氣舒也。丂之轉注。【精蘊】氣出而易也。反丂見
  意。重之爲大笑聲，借譴怒聲，皆動於聲氣也。
  #七
  【唐韻】親吉切
  【集韻】【韻會】【正
  
  韻】戚悉切，𡘋音桼。少陽數也。【說文】陽之正也，从一，微隂从中衺
  出也。【書·舜典】在璿璣玉衡，以齊七政。【註】七政，日月五星也。【詩·唐
  
  風】豈曰無衣七兮。【註】侯伯七命，車服皆以七爲節。　又詞家以
  七名篇，雖八首，問對凡七。七者，問對之別名，始枚乗七發，後傅
  
  毅七激，崔駰七依，曹植七啓，張協七命，繼之凡十餘家。　又三
  七，藥名。【本草綱目】言葉左三右四，故名。一說本名山桼。*又姓。
  
  明七希賢。　又人名。【續仙傳】殷七七，名文祥。【蘇軾詩】安得
  道人殷七七，不論時節遣花開。*【正字通】或通作㭍桼漆。#(增

  @317
  
  #丄
  【集韻】上，古作
  丄。註詳二畫。
  #丅
  【字彙補】古文下
  字。註詳二畫。
  #(二
  #万
  【廣韻】【集韻】【韻
  會】𡘋同萬。
  
  又三字姓。西魏有柱國万紐于謹。　又【廣韻】莫北切【集韻】
  密北切。万俟，複姓。俟音其，今讀木其。北齊特進万俟普。
  #丈
  
  【唐韻】直兩切【集韻】【韻會】雉兩切【正韻】呈兩切，𡘋長上聲。十尺曰
  丈。【前漢·律歷志】十分爲寸，十寸爲尺，十尺爲丈，十丈爲引。又【左
  
`;
  const pageModels = parsePages(text);
  const html = toHtml({
    title: "古籍",
    body: renderToString(pages({ pageModels })),
  });
  console.log(pageModels.length);
  console.log(html);
});
