import * as React from "react";
import { line } from "./line";
import { PageModel } from "./model";

export function page({ pageModel }: { pageModel: PageModel }) {
  return React.createElement(
    "div",
    { className: "lines" },
    pageModel.l.map((l) => line({ model: l }))
  );
}
