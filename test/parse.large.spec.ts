import { test } from "vitest";
import { parseLarge } from "../src/parser/large";
import { renderToString } from "react-dom/server";

test("parseLine", () => {
  const lineObj = {
    t: "康熙字典",
    si: "large",
  };
  const line = parseLarge(lineObj);
  if (line) {
    console.log(renderToString(line));
  }
});
