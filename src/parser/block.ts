import { toSmall } from "../html/small";
import { toSmallLine } from "../html/small_line";
import { parseBook } from "./book";
import { parseLarge } from "./large";
import { ReactNode } from "react";

export function parseBlocks(blks: Block[]) {
  let nodes: ReactNode[] = [];
  let smallLines: ReactNode[] = [];
  let frags: (string | ReactNode)[] = [];

  const mergeFrags = () => {
    if (frags.length > 0) {
      smallLines.push(toSmallLine(frags));
      frags = [];
    }
  };

  const mergeSmallLines = () => {
    if (smallLines.length > 0) {
      nodes.push(toSmall(smallLines));
      smallLines = [];
    }
  };

  blks.forEach((blk) => {
    if (blk.si === "large") {
      mergeFrags();
      mergeSmallLines();
      nodes.push(parseLarge(blk));
    } else {
      if (blk.st === "br") {
        mergeFrags();
      } else if (blk.st === "book") {
        frags.push(parseBook(blk));
      } else if (blk.t) {
        frags.push(blk.t);
      }
    }
  });

  mergeFrags();
  mergeSmallLines();

  return nodes;
}
