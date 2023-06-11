import { createElement, ReactNode } from "react";

export function toSmall(
  smallLine1: ReactNode,
  smallLine2: ReactNode | undefined = undefined
) {
  if (!smallLine2) {
    return createElement("div", { className: "small" }, smallLine1);
  }
  return createElement("div", { className: "small" }, [smallLine1, smallLine2]);
}
