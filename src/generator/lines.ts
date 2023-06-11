import { createElement, ReactNode } from "react";

export function toLines(lines: ReactNode[]) {
  return createElement("div", { className: "lines" }, lines);
}
