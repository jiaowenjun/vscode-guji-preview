import { createElement, ReactNode } from "react";

export function toSmallLine(frags: (string | ReactNode)[]) {
  let children: ReactNode[] = [];
  let idx = 0;
  frags.forEach((frag) => {
    if (typeof frag === "string") {
      children = children.concat(
        [...frag].map((letter) =>
          createElement("div", { className: "grid", key: idx++ }, letter.trim())
        )
      );
    } else {
      children.push(frag);
    }
  });
  return createElement("div", { className: "small-line" }, children);
}
