import { test } from "vitest";
import { toSmallLine } from "../src/generator/small_line";
import { createElement } from "react";
import { renderToString } from "react-dom/server";

test("small", () => {
  console.log(
    renderToString(
      toSmallLine([
        createElement("div", { className: "book", key: "b1" }, "唐韵"),
        createElement("div", { className: "book", key: "b2" }, "韵会"),
        "於悉切",
      ])
    )
  );
});
