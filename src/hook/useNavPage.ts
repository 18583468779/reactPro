import { useEffect } from "react";
import { useGetUserInfo } from "./useGetUserInfo";
import { useLocation, useNavigate } from "react-router-dom";
import {
  LOGIN_PATHNAME,
  MANAGE_INDEX_PATHNAME,
  isLoginOrRegister,
  isNoNeedUserInfo,
} from "../router";

export function useNavPage(waitUserData: boolean) {
  const { username } = useGetUserInfo();
  const { pathname } = useLocation();
  const nav = useNavigate();
  useEffect(() => {
    if (waitUserData) return;
    if (username) {
      //已经登录后，登录注册页面跳转
      if (isLoginOrRegister(pathname)) {
        nav(MANAGE_INDEX_PATHNAME);
      }
      return;
    }
    //未登录
    if (isNoNeedUserInfo(pathname)) {
      return;
    } else {
      nav(LOGIN_PATHNAME);
    }
  }, [username, pathname, waitUserData]);
}
