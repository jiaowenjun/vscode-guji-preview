import * as React from "react";
import { grid } from "./grid";

let cnt = 0;

export function large({ text, indent }: { text: string; indent: number }) {
  const indentText = " ".repeat(indent) + text;
  return React.createElement(
    "div",
    { className: "large", key: cnt++ },
    [...indentText].map((letter) => grid({ letter }))
  );
}
