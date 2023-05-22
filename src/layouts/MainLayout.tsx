import * as React from "react";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.scss";
import { Layout, Space } from "antd";
import { Logo } from "../components/Logo";

const { Header, Footer, Content } = Layout;

export const MainLayout: React.FC = () => {
  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout>
        <Header className={styles.header}>
          <div className={styles.left}>
            <Logo />
          </div>
          <div className={styles.right}>登录</div>
        </Header>
        <Content className={styles.main}>
          <Outlet />
        </Content>
        <Footer className={styles.footer}>
          我的问卷 &copy;2023-2023 Create by xie
        </Footer>
      </Layout>
    </Space>
  );
};
