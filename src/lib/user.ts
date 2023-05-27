import axios from "./ajax";
import { DataType, ParamsType, ResType, login, register } from "../global";

//获取用户信息
export async function getUserService(): Promise<DataType> {
  const url = `/api/user/info`;
  const data = (await axios.get(url)) as DataType;
  return data;
}

//用户注册
export async function registerUserService(opt: register): Promise<DataType> {
  const url = `/api/user/register`;
  const data = (await axios.post(url, opt)) as DataType;
  return data;
}

//用户登录
export async function loginUserService(opt: login): Promise<DataType> {
  const url = `/api/user/login`;
  const data = (await axios.post(url, opt)) as DataType;
  return data;
}
