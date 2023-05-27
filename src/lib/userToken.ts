/**
 * @description 存取token
 * @author 小谢
 * **/

const KEY = "USER_TOKEN";

export function setToken(token: string) {
  localStorage.setItem(KEY, token);
}

export function getToken() {
  return localStorage.getItem(KEY) || "";
}

export function removeToken() {
  return localStorage.removeItem(KEY);
}
