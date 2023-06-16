import { expect, test } from "vitest";
import { parseLine } from "../src/parser/parse-line";
import { split } from "../src/parser/split-line";

test("parseLine", () => {
  const text = `
  @322

  之。象形。因聲借爲子丑字，十二
  月之象也。又丑象子初生舉手。
  #(增#𠀇:【玉篇】古文且
  字。註詳四畫。
  #𠀈:
  【字
  彙

  补】
`;
  const lines = split(text);
  lines.forEach((line, i) => {
    console.log("\n" + i + ":");
    console.log(line);
    console.log(parseLine(line));
  });
});
