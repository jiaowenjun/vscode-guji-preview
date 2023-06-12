import * as React from "react";

let cnt = 0;

export function grid({ letter }: { letter: string }) {
  return React.createElement("div", { className: "grid", key: cnt++ }, letter);
}
