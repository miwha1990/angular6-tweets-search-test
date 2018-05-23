export interface IResponse<T> {
  data: T;
  meta?: Imeta;
}

export interface Imeta {
  total?: number;
  message?: string;
}
