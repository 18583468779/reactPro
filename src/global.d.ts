export type ResType = {
  errno: number;
  data?: DataType;
  msg?: string;
};

export type DataType = {
  [key: string]: any;
};

export type ParamsType = {
  keyword?: string;
  isStar?: boolean;
  isDeleted?: boolean;
};
