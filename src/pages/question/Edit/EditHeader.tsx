import * as React from "react";
import styles from "./EditHeader.module.scss";
import { LeftOutlined } from "@ant-design/icons";
import { Space, Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

export const EditHeader: React.FC = () => {
  const nav = useNavigate();

  return (
    <div className={styles["header-wrapper"]}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Space>
            <Button type="link" icon={<LeftOutlined />} onClick={() => nav(-1)}>
              返回
            </Button>
            <Title>问卷标题</Title>
          </Space>
        </div>
        <div className={styles.main}>main</div>
        <div className={styles.right}>
          <Space>
            <Button>保存</Button>
            <Button type="primary">提交</Button>
          </Space>
        </div>
      </div>
    </div>
  );
};
