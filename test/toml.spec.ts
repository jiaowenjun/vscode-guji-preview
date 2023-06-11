import toml from "toml";
import { test } from "vitest";
import { parseLines } from "../src/parser/lines";
import { toHtml } from "../src/html/html";
import { renderToString } from "react-dom/server";

test("toml", () => {
  const linesObj = toml.parse(`
p = 312

[[l]]
t = "康熙字典"
si = "large"

[[l]]
[[l.c]]
t = "一"
si = "large"

[[l.c]]
t = "古文"

[[l.c]]
t = "弌"
si = "large"

[[l.c]]
t = "唐韻"
st = "book"
`);
  console.log(toHtml(linesObj.p, renderToString(parseLines(linesObj.l))));
});
