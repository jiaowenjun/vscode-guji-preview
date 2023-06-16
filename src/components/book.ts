import * as React from "react";
import { grid } from "./grid";

let cnt = 0;

export function book({ text, style }: { text: string; style: string }) {
  return React.createElement(
    "div",
    { className: style, key: cnt++ },
    [...text].map((letter) => grid({ letter }))
  );
}
