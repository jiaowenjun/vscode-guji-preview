import { toLines } from "../html/lines";
import { parseLine } from "./line";

export function parseLines(lines: Line[]) {
  return toLines(lines.map((line, i) => parseLine(line, i + 1)));
}
