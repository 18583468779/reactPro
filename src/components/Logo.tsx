import * as React from "react";
import { FormOutlined } from "@ant-design/icons";
import { Space, Typography } from "antd";
import styles from "./common.module.scss";
import { Link } from "react-router-dom";
import { useGetUserInfo } from "../hook/useGetUserInfo";
import { useEffect, useState } from "react";
import { MANAGE_INDEX_PATHNAME } from "../router";

const { Title } = Typography;
export const Logo: React.FC = () => {
  const { username } = useGetUserInfo();
  const [pathname, setPathname] = useState("/");
  useEffect(() => {
    if (username) {
      setPathname(MANAGE_INDEX_PATHNAME);
    }
  }, [username]);
  return (
    <div className={styles.container}>
      <Link to={pathname}>
        <Space>
          <Title>
            <FormOutlined />
          </Title>
          <Title>我的问卷</Title>
        </Space>
      </Link>
    </div>
  );
};
