import { LinesModel } from "../components/model";
import { parseLine } from "./parse-line";
import { split } from "./split-line";

export function parseLines(text: string) {
  const lines: LinesModel = { p: -1, l: [] };
  split(text).forEach((line) => {
    const lineModel = parseLine(line);
    if (lineModel.page) {
      lines.p = lineModel.page;
    } else {
      lines.l.push(lineModel);
    }
  });
  return lines;
}
