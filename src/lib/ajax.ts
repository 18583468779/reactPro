import axios from "axios";
import { ResType } from "../global";
import { message } from "antd";

const instance = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10 * 1000,
});

instance.interceptors.response.use((res) => {
  const { data, errno, msg } = (res.data || {}) as ResType;
  if (errno !== 0) {
    if (msg) {
      message.error(msg);
    }
    throw new Error(msg);
  }
  return data as any;
});

export default instance;
