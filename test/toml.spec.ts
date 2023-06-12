import toml from "toml";
import { test } from "vitest";
import { renderToString } from "react-dom/server";
import { html } from "../src/components/html";
import { lines } from "../src/components/lines";

test("toml", () => {
  const model = toml.parse(`
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
  console.log(
    html({
      title: model.p,
      body: renderToString(lines({ model })),
    })
  );
});
