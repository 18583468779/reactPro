import * as React from "react";
import { Link } from "react-router-dom";
import { LOGIN_PATHNAME } from "../router";
export const UserInfo: React.FC = () => {
  return (
    <div>
      <Link to={LOGIN_PATHNAME}>登录</Link>
    </div>
  );
};
