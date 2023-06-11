import { createElement, ReactNode } from "react";

export function toLine(blocks: ReactNode[], key: number) {
  return createElement("div", { className: "line", key: key }, blocks);
}
