import * as React from "react";

let cnt = 0;

export function small(smallLines: React.ReactNode[]) {
  return React.createElement(
    "div",
    { className: "small", key: cnt++ },
    smallLines
  );
}
