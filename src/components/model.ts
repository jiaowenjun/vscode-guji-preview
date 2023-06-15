export interface BlockModel {
  t?: string;
  st?: string;
  si?: string;
  i?: number;
}

export interface CompoLineModel {
  c: BlockModel[];
}

export type LineModel = CompoLineModel | BlockModel;

export interface PageModel {
  p: number;
  l: LineModel[];
}
