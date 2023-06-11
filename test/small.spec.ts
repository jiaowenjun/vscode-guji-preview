import { test } from "vitest";
import { toSmall } from "../src/generator/small";
import { toBook } from "../src/generator/book";
import { toSmallLine } from "../src/generator/small_line";
import { renderToString } from "react-dom/server";

test("small", () => {
  console.log(
    renderToString(
      toSmall(
        toSmallLine([toBook("唐韵"), toBook("韵会"), "於悉切"]),
        toSmallLine([toBook("唐韵"), toBook("韵会"), "於悉切"])
      )
    )
  );
});
