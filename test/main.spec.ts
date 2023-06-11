import { test, expect } from "vitest";
import React from "react";
import { renderToString } from "react-dom/server";

test("main", () => {
  expect(true).toBe(true);
  const line = React.createElement("div", { className: "line" }, "line1");
  console.log(renderToString(line));
});
