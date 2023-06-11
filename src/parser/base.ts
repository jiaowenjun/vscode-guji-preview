interface Block {
  t: string | undefined;
  st: string | undefined;
  si: string | undefined;
}

interface CompoLine {
  c: Block[];
}

type Line = CompoLine | Block;
