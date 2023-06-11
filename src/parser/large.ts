import { toLarge } from "../html/large";

export function parseLarge(obj: Block) {
  if (obj.t) {
    const indent = obj.i ? " ".repeat(obj.i) : "";
    return toLarge(indent + obj.t);
  }
}
