import { test } from "vitest";
import { parseLine } from "../src/parser/line";
import { renderToString } from "react-dom/server";

test("parseLine", () => {
  const lineObj = {
    t: "康熙字典",
    si: "large",
  };
  const line = parseLine(lineObj);
  if (line) {
    console.log(renderToString(line));
  }
});
