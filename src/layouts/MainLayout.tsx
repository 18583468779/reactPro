import * as React from "react";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.scss";
import { Layout, Space, Spin } from "antd";
import { Logo } from "../components/Logo";
import { UserInfo } from "../components/UserInfo";
import { useLoadingUserInfo } from "../hook/useLoadingUserInfo";

const { Header, Footer, Content } = Layout;

export const MainLayout: React.FC = () => {
  const { waitUserData } = useLoadingUserInfo();

  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout>
        <Header className={styles.header}>
          <div className={styles.left}>
            <Logo />
          </div>
          <div className={styles.right}>
            <UserInfo />
          </div>
        </Header>
        <Content className={styles.main}>
          {waitUserData ? (
            <div
              style={{
                textAlign: "center",
                height: "calc(100vh - 64px - 65px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Spin />
            </div>
          ) : (
            <Outlet />
          )}
        </Content>
        <Footer className={styles.footer}>
          我的问卷 &copy;2023-2023 Create by xie
        </Footer>
      </Layout>
    </Space>
  );
};
