export type ResType = {
  errno: number;
  data: DataType;
  msg: string;
};

export type DataType = {
  [key: string]: any;
};
