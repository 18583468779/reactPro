import * as React from "react";
import { useLoadingQuestionData } from "../../../hook/useLoadingQuestionData";
import { Spin } from "antd";
import styles from "./index.module.scss";
import { StatHeader } from "./StatHeader";
export const Stat: React.FC = () => {
  const { loading } = useLoadingQuestionData();

  function loadingElement() {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <Spin></Spin>
      </div>
    );
  }
  function getContentElement() {
    return (
      <div className={styles.content}>
        <div className={styles.left}>left</div>
        <div className={styles.main}>main</div>
        <div className={styles.right}>right</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <StatHeader />
      <div className={styles["content-wrapper"]}>
        {loading && loadingElement()}
        {!loading && getContentElement()}
      </div>
    </div>
  );
};
