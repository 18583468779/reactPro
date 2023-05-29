import * as React from "react";
import { Outlet } from "react-router-dom";
import { useLoadingUserInfo } from "../hook/useLoadingUserInfo";
import { Spin } from "antd";
import { useNavPage } from "../hook/useNavPage";
export const QuestionLayout: React.FC = () => {
  const { waitUserData } = useLoadingUserInfo();
  useNavPage(waitUserData);

  return (
    <>
      <div>QuestionLayout header</div>
      <div>
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
    </>
  );
};
