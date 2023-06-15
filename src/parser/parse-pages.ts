import { PageModel } from "../components/model";
import { parseLine } from "./parse-line";
import { split } from "./split-line";

export function parsePages(text: string) {
  const pages: PageModel[] = [];
  let page: PageModel | undefined = undefined;
  split(text).forEach((line) => {
    const lineModel = parseLine(line);
    if (lineModel.page) {
      if (page) {
        pages.push(page);
      }
      page = { p: lineModel.page, l: [] };
    } else if (page) {
      page.l.push(lineModel);
    }
  });
  if (page) {
    pages.push(page);
  }
  return pages;
}
