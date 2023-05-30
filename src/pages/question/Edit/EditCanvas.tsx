import * as React from "react";
import styles from "./EditCanvas.module.scss";
import { Spin } from "antd";
import { useGetComponentInfo } from "../../../hook/useGetComponentInfo";
import { getComponentConfByType } from "../../../components/QuestionComponents";
import { ComponentInfoType } from "../../../store/componentsReducer";

type Props = {
  loading: boolean;
};
export const EditCanvas: React.FC<Props> = (props) => {
  const { loading } = props;
  const { componentList } = useGetComponentInfo();

  function getComponent(componentInfo: ComponentInfoType) {
    const { type, props } = componentInfo;
    const componentConf = getComponentConfByType(type);
    if (componentConf == null) return null;
    const { Component } = componentConf;
    return <Component {...props} />;
  }
  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "24px" }}>
        <Spin />
      </div>
    );
  }
  return (
    <div className={styles.canvas}>
      {componentList.map((c) => {
        const { fe_id } = c;
        return (
          <div className={styles["component-wrapper"]} key={fe_id}>
            <div className={styles.component}>{getComponent(c)}</div>
          </div>
        );
      })}
    </div>
  );
};
