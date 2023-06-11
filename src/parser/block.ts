import { parseLarge } from "./large";

export function parseBlock(obj: Block) {
  if (obj.si === "large") {
    return parseLarge(obj);
  }
}

export function parseBlocks(obj: Block[]) {
  return [];
}
