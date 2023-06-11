import { test } from "vitest";
import { toLarge } from "../src/generator/large";
import { renderToString } from "react-dom/server";

test("large", () => {
  console.log(renderToString(toLarge("康熙 字典")));
});
