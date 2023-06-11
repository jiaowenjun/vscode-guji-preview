import { createElement, ReactNode } from "react";

let cnt = 0;

export function toSmall(smallLines: ReactNode[]) {
  return createElement("div", { className: "small", key: cnt++ }, smallLines);
}
