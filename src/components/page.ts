import * as React from "react";
import { line } from "./line";
import { PageModel } from "./model";

export function page({ pageModel }: { pageModel: PageModel }) {
  const title = React.createElement(
    "div",
    { className: "page-title" },
    pageModel.p
  );
  const lines = React.createElement(
    "div",
    { className: "lines" },
    pageModel.l.map((l) => line({ model: l }))
  );
  return React.createElement("div", { className: "page" }, [title, lines]);
}
