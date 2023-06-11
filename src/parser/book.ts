import { toBook } from "../html/book";

export function parseBook(obj: Block) {
  if (obj.t) {
    return toBook(obj.t);
  }
}
