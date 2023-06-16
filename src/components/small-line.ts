import * as React from "react";
import { grid } from "./grid";
import { book } from "./book";
import { BlockModel } from "./model";

let cnt = 0;

export function smallLine({ frags }: { frags: BlockModel[] }) {
  return React.createElement(
    "div",
    { className: "small-line", key: cnt++ },
    frags.map((frag) => {
      if (frag.st && frag.st.startsWith("book") && frag.t) {
        return book({ text: frag.t, style: frag.st });
      } else if (frag.t) {
        return [...frag.t].map((letter) => grid({ letter }));
      }
    })
  );
}
