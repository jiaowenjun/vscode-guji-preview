import * as React from "react";
import { grid } from "./grid";
import { book } from "./book";

let cnt = 0;

export function smallLine({ frags }: { frags: BlockModel[] }) {
  return React.createElement(
    "div",
    { className: "small-line", key: cnt++ },
    frags.map((frag) => {
      if (frag.st === "book" && frag.t) {
        return book({ text: frag.t, half: false });
      } else if (frag.st === "book-half" && frag.t) {
        return book({ text: frag.t, half: true });
      } else if (frag.t) {
        return [...frag.t].map((letter) => grid({ letter }));
      }
    })
  );
}
