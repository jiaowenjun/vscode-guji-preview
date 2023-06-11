import { toLarge } from "../html/large";
import { toLine } from "../html/line";
import { parseBlock, parseBlocks } from "./block";
import { parseLarge } from "./large";

interface Line {
  c: Block[];
}

export function parseLine(line: Line | Block) {
  if ("c" in line) {
    return toLine(parseBlocks(line.c));
  } else {
    return toLine([parseBlock(line)]);
  }
}
