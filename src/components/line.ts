import * as React from "react";
import { smallLine } from "./small-line";
import { small } from "./small";
import { large } from "./large";
import { BlockModel, LineModel } from "./model";

let cnt = 0;

function parseLineBlocks(blks: BlockModel[]) {
  let nodes: JSX.Element[] = [];
  let smallLines: JSX.Element[] = [];
  let frags: BlockModel[] = [];

  const mergeFrags = () => {
    if (frags.length > 0) {
      smallLines.push(smallLine({ frags }));
      frags = [];
    }
  };

  const mergeSmallLines = () => {
    if (smallLines.length > 0) {
      nodes.push(small(smallLines));
      smallLines = [];
    }
  };

  blks.forEach((blk) => {
    if (blk.si === "large" && blk.t) {
      mergeFrags();
      mergeSmallLines();
      nodes.push(large({ text: blk.t, indent: blk.i ? blk.i : 0 }));
    } else {
      if (blk.st === "br") {
        mergeFrags();
      } else {
        frags.push(blk);
      }
    }
  });

  mergeFrags();
  mergeSmallLines();

  return nodes;
}

export function line({ model }: { model: LineModel }) {
  if ("c" in model) {
    return React.createElement(
      "div",
      { className: "line", key: cnt++ },
      parseLineBlocks(model.c)
    );
  } else if (model.si === "large" && model.t) {
    return React.createElement(
      "div",
      { className: "line", key: cnt++ },
      large({ text: model.t, indent: model.i ? model.i : 0 })
    );
  } else {
    return null;
  }
}
