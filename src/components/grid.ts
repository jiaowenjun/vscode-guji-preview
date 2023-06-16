import * as React from "react";
import { stack } from "./stack";

let cnt = 0;

export function grid({ letter }: { letter: string }) {
  return React.createElement(
    "div",
    { className: "grid", key: cnt++ },
    letter.length > 1 ? stack({ letter }) : letter
  );
}
