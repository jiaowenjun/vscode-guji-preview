interface BlockModel {
  t: string | undefined;
  st: string | undefined;
  si: string | undefined;
  i: number | undefined;
}

interface CompoLineModel {
  c: BlockModel[];
}

type LineModel = CompoLineModel | BlockModel;

interface LinesModel {
  p: number;
  l: LineModel[];
}
