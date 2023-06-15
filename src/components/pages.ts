import * as React from "react";
import { PageModel } from "./model";
import { page } from "./page";

export function pages({ pageModels }: { pageModels: PageModel[] }) {
  return React.createElement(
    "div",
    { className: "pages" },
    pageModels.map((pageModel) => page({ pageModel }))
  );
}
