import * as React from "react";
import { line } from "./line";

export function lines({ model }: { model: LinesModel }) {
  return React.createElement(
    "div",
    { className: "lines" },
    model.l.map((l) => line({ model: l }))
  );
}
