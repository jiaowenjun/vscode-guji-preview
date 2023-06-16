import { parseInline } from "./parse-inline";

export function parseLine(line: string) {
  const matchPage = line.match(/^@(\d+)$/);
  if (matchPage) {
    return { page: parseInt(matchPage[1]) };
  }

  const matchLarge = line.match(/^(#+) (.*)$/);
  if (matchLarge) {
    return {
      t: matchLarge[2],
      si: "large",
      i: matchLarge[1].length - 1,
    };
  }

  if (line.match(/^#$/)) {
    return {
      st: "empty",
    };
  }

  return {
    c: parseInline(line),
  };
}
