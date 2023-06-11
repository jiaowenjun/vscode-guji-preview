import { toLarge } from "../generator/large";
import { toLine } from "../generator/line";

export function parseLine(line: any) {
  if (line.si === "large") {
    return toLine([toLarge(line.t)]);
  }
}
