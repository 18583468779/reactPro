import * as React from "react";
import styles from "./EditCanvas.module.scss";
import { Spin } from "antd";
import { useGetComponentInfo } from "../../../hook/useGetComponentInfo";
import { getComponentConfByType } from "../../../components/QuestionComponents";
import {
  ComponentInfoType,
  changeComponentId,
} from "../../../store/componentsReducer";
import { useDispatch } from "react-redux";

type Props = {
  loading: boolean;
};
export const EditCanvas: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const { loading } = props;
  const { componentList, id } = useGetComponentInfo();

  // console.log(id, "id");
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

  const handleClick = (
    id: string,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    //选中组件
    dispatch(changeComponentId(id));
  };

  return (
    <div className={styles.canvas}>
      {componentList.map((c) => {
        const { fe_id } = c;

        const styleSelected =
          fe_id === id
            ? [styles["component-wrapper"], styles.selected].join(" ")
            : styles["component-wrapper"];

        return (
          <div
            className={styleSelected}
            key={fe_id}
            onClick={(e) => handleClick(fe_id, e)}
          >
            <div className={styles.component}>{getComponent(c)}</div>
          </div>
        );
      })}
    </div>
  );
};
