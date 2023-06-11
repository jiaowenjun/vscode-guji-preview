import { test, expect } from "vitest";
import { toLines } from "../src/generator/lines";

test("lines", () => {
  console.log(
    toLines([
      '<div class="line">line1</div>',
      '<div class="line">line2</div>',
      '<div class="line">line3</div>',
    ])
  );
});
