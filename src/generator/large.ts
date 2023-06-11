import { createElement } from "react";

export function toLarge(text: string) {
  const grids = [...text].map((letter, i) =>
    createElement("div", { className: "grid", key: i }, letter.trim())
  );
  return createElement("div", { className: "large" }, grids);
}
