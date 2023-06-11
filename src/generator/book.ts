import { createElement } from "react";

let cnt = 0;

export function toBook(text: string, half: boolean = false) {
  const grids = [...text].map((letter, i) =>
    createElement("div", { className: "grid", key: i }, letter.trim())
  );
  return createElement(
    "div",
    { className: half ? "book-half" : "book", key: "b" + cnt++ },
    grids
  );
}
