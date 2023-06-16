export function split(text: string) {
  let clean = text
    .replace(/[\s\S]*==.*/, "")
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
        .replace(/[。，·":：、《》]/g, "")
        .replace(/\/\/.*/, "")
        .replace(/[◎〇]/g, "○")
    )
    .filter((line) => line.length > 0);
}
