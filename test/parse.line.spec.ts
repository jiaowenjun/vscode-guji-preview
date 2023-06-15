import { expect, test } from "vitest";
import { parseLine } from "../src/parser/parse-line";
import { split } from "../src/parser/split-line";

test("parseLine", () => {
  const text = `
  // @320

  其古作丌。註詳八部六畫。
  　又姓。唐丌實，丌士能。
  #(增#𠀃【集韻】且古作
  𠀃。註詳四畫。
  #(三#不古
  
  文#𠀚、#𠙐【韻會】【正韻】逋沒切，補入聲。不然也，不可也，未也。
  【禮·曾子問】葬引至于堩，日有食之，則有變乎，且
`;
  const lines = split(text);
  lines.forEach((line, i) => {
    console.log("\n" + i + ":");
    console.log(line);
    console.log(parseLine(line, i));
  });
});
