export function split(text: string) {
  let clean = text
    .split(/\n/)
    .map((line) =>
      line
        .replace(/　/g, "*")
        .trim()
        .replace(/[ \t]+/, " ")
    )
    .join("\n");
  return clean
    .split(/\n\s*\n/)
    .map((line) =>
      line
        .trim()
        .replace(/[。，·":：、]/g, "")
        .replace(/\/\/.*/, "")
    )
    .filter((line) => line.length > 0);
}
