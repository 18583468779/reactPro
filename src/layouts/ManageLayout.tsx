import * as React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import styles from "./ManageLayout.module.scss";
import { Button, Divider, Space, Spin, message } from "antd";
import {
  BarsOutlined,
  DeleteOutlined,
  PlusOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { createQuestionService } from "../lib/question";
import { useState } from "react";
import { useRequest } from "ahooks";
import { useLoadingUserInfo } from "../hook/useLoadingUserInfo";
export const ManageLayout: React.FC = () => {
  const { waitUserData } = useLoadingUserInfo();

  const { pathname } = useLocation();
  const nav = useNavigate();
  //按钮颜色tab
  const getPath = (path: string) =>
    pathname === `/manage/${path}` ? "default" : "text";

  const {
    loading,
    // error,
    run: handleCreateQuestion,
  } = useRequest(createQuestionService, {
    manual: true,
    onSuccess(res) {
      nav(`/question/edit/${res.id}`);
      message.success("创建成功");
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Space direction="vertical">
          <Button
            type="primary"
            size="large"
            icon={<PlusOutlined />}
            onClick={handleCreateQuestion}
            disabled={loading}
          >
            创建问卷
          </Button>
          <Divider />
          <Link to={"/manage/list"}>
            <Button type={getPath("list")} size="large" icon={<BarsOutlined />}>
              我的问卷
            </Button>
          </Link>
          <Link to={"/manage/star"}>
            <Button type={getPath("star")} size="large" icon={<StarOutlined />}>
              星标问卷
            </Button>
          </Link>
          <Link to={"/manage/trash"}>
            <Button
              type={getPath("trash")}
              size="large"
              icon={<DeleteOutlined />}
            >
              回收站
            </Button>
          </Link>
        </Space>
      </div>
      <div className={styles.right}>
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
      </div>
    </div>
  );
};
