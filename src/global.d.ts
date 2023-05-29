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
  page?: number;
  pageSize?: number;
};

export type register = {
  username: string;
  password: string;
  nickname?: string;
};

export type login = {
  username: string;
  password: string;
  remember?: boolean;
};

export type userInfoType = {
  username: string;
  nickname: string;
};
