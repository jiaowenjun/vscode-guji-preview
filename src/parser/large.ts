import { toLarge } from "../html/large";

export function parseLarge(obj: Block) {
  if (obj.t) {
    return toLarge(obj.t);
  }
}
