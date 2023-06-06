import * as React from "react";
import { useLoadingQuestionData } from "../../../hook/useLoadingQuestionData";
import { Spin } from "antd";
import styles from "./index.module.scss";
import { StatHeader } from "./StatHeader";
import ComponentList from "./ComponentList";
import { useState } from "react";
import { PageStat } from "./PageStat";
import { ChartStat } from "./ChartStat";
export const Stat: React.FC = () => {
  const { loading } = useLoadingQuestionData();
  const [selectedComponentId, setSelectedComponentId] = useState("");
  const [selectedComponentType, setSelectedComponentType] = useState("");
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
        <div className={styles.left}>
          <ComponentList
            selectedComponentId={selectedComponentId}
            setSelectedComponentId={setSelectedComponentId}
            setSelectedComponentType={setSelectedComponentType}
          />
        </div>
        <div className={styles.main}>
          <PageStat
            selectedComponentId={selectedComponentId}
            setSelectedComponentId={setSelectedComponentId}
            setSelectedComponentType={setSelectedComponentType}
          />
        </div>
        <div className={styles.right}>
          <ChartStat />
        </div>
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
