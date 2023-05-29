import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_PATHNAME } from "../router";
import { UserOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import { removeToken } from "../lib/userToken";
import { useGetUserInfo } from "../hook/useGetUserInfo";
import { useDispatch } from "react-redux";
import { logoutReducer } from "../store/userReducer";
export const UserInfo: React.FC = () => {
  const dispatch = useDispatch();
  const { username, nickname } = useGetUserInfo();
  const nav = useNavigate();
  const logout = () => {
    dispatch(logoutReducer()); //清空redux user
    removeToken();
    message.success("退出登录成功");
    nav(LOGIN_PATHNAME);
  };
  const UserInfo = (
    <>
      <span style={{ color: "white" }}>
        <UserOutlined />
        {nickname}
      </span>
      <Button type="link" onClick={logout}>
        退出
      </Button>
    </>
  );

  const Login = (
    <div>
      <Link to={LOGIN_PATHNAME}>登录</Link>
    </div>
  );
  return <div>{username ? UserInfo : Login}</div>;
};
