import { toLine } from "../html/line";
import { parseBlocks } from "./block";
import { parseLarge } from "./large";

export function parseLine(line: Line, key: number) {
  if ("c" in line) {
    return toLine(parseBlocks(line.c), key);
  } else if (line.si === "large") {
    return toLine([parseLarge(line)], key);
  }
}
