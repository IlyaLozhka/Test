export interface IPages {
  readonly path: string;
  readonly title: string;
}

export interface IProps {
  readonly pages: Array<IPages>;
}
