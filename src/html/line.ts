import { createElement, ReactNode } from "react";

export function toLine(blocks: ReactNode[]) {
  return createElement("div", { className: "line" }, blocks);
}
