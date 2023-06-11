import { test } from "vitest";
import { parseLines } from "../src/parser/lines";
import { renderToString } from "react-dom/server";

test("parse", () => {
  const text = `
  {
    "p": 312,
    "l": [
      {
        "t": "康熙字典",
        "si": "large"
      },
      {
        "c": [
          {
            "t": "一",
            "si": "large"
          },
          {
            "t": "古文"
          },
          {
            "t": "弌",
            "si": "large"
          },
          {
            "t": "唐韻",
            "st": "book"
          },
          {
            "t": "韻會",
            "st": "book"
          },
          {
            "t": "於悉切"
          },
          {
            "t": "集韻",
            "st": "book"
          },
          {
            "t": "正韻",
            "st": "book"
          },
          {
            "t": "益悉切𠀤漪入聲"
          },
          {
            "st": "br"
          },
          {
            "t": "說文",
            "st": "book"
          },
          {
            "t": "惟初大始道立於一造分天地化成萬物"
          }
        ]
      }
    ]
  }
  `;
  const linesObj = JSON.parse(text);
  console.log(renderToString(parseLines(linesObj.l)));
});
