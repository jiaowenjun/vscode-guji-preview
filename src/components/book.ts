import * as React from "react";
import { grid } from "./grid";

let cnt = 0;

export function book({ text, half }: { text: string; half: boolean }) {
  return React.createElement(
    "div",
    { className: half ? "book-half" : "book", key: cnt++ },
    [...text].map((letter) => grid({ letter }))
  );
}
