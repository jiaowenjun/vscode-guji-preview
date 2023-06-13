export function split(text: string) {
  let clean = text
    .split(/\n/)
    .map((line) => line.trim().replace(/[ \t]+/, " "))
    .join("\n");
  return clean
    .split(/\n\s*\n/)
    .map((line) =>
      line
        .trim()
        .replace(/[。，·":：、]/g, "")
        .replace(/　/g, "*")
        .replace(/\/\/.*/, "")
    )
    .filter((line) => line.length > 0);
}
