import { test } from "vitest";
import { renderToString } from "react-dom/server";
import { parseLine } from "../src/parser/line";

test("parseLargeLine", () => {
  const lineObj = {
    t: "康熙字典",
    si: "large",
  };
  const line = parseLine(lineObj);
  if (line) {
    console.log(renderToString(line));
  }
});

test("parseLine", () => {
  const lineObj = {
    c: [
      {
        t: "一",
        si: "large",
      },
      {
        t: "古文",
      },
      {
        t: "弌",
        si: "large",
      },
      {
        t: "唐韻",
        st: "book",
      },
      {
        t: "韻會",
        st: "book",
      },
      {
        t: "於悉切",
      },
      {
        t: "集韻",
        st: "book",
      },
      {
        t: "正韻",
        st: "book",
      },
      {
        t: "益悉切𠀤漪入聲",
      },
      {
        st: "br",
      },
      {
        t: "說文",
        st: "book",
      },
      {
        t: "惟初大始道立於一造分天地化成萬物",
      },
    ],
  };
  const line = parseLine(lineObj);
  if (line) {
    console.log(renderToString(line));
  }
});
