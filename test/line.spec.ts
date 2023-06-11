import { test } from "vitest";
import { toLine } from "../src/generator/line";
import { createElement } from "react";
import { renderToString } from "react-dom/server";

test("line", () => {
  console.log(
    renderToString(
      toLine([
        createElement("div", { className: "large", key: 1 }, "large"),
        createElement("div", { className: "small", key: 2 }, "small"),
      ])
    )
  );
});
