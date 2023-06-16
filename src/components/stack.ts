import * as React from "react";

let cnt = 0;

export function stack({ letter }: { letter: string }) {
  return React.createElement("div", { className: "stack", key: cnt++ }, letter);
}
