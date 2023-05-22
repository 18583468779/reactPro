import * as React from "react";
import { FormOutlined } from "@ant-design/icons";
import { Space, Typography } from "antd";
import styles from "./Logo.module.scss";
import { Link } from "react-router-dom";

const { Title } = Typography;
export const Logo: React.FC = () => {
  return (
    <div className={styles.container}>
      <Link to={"/"}>
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
