import { test } from "vitest";
import { toLines } from "../src/generator/lines";
import { createElement } from "react";
import { renderToString } from "react-dom/server";

test("lines", () => {
  console.log(
    renderToString(
      toLines([
        createElement("div", { className: "line", key: 1 }, "line1"),
        createElement("div", { className: "line", key: 2 }, "line2"),
        createElement("div", { className: "line", key: 3 }, "line3"),
      ])
    )
  );
});
