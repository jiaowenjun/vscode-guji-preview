import { createElement, ReactNode } from "react";

export function toSmall(smallLines: ReactNode[]) {
  return createElement("div", { className: "small" }, smallLines);
}
