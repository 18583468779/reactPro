import * as React from "react";
import styles from "./EditCanvas.module.scss";
import { QuestionInput } from "../../../components/QuestionComponents/QuestionInput/Index";
import { QuestionTitle } from "../../../components/QuestionComponents/QuestionTitle/Index";
import { Spin } from "antd";
import { useGetComponentInfo } from "../../../hook/useGetComponentInfo";

type Props = {
  loading: boolean;
};
export const EditCanvas: React.FC<Props> = (props) => {
  const { loading } = props;

  const { state } = useGetComponentInfo();
  console.log(state);
  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "24px" }}>
        <Spin />
      </div>
    );
  }
  return (
    <div className={styles.canvas}>
      <div className={styles["component-wrapper"]}>
        <div className={styles.component}>
          <QuestionTitle />
        </div>
      </div>
      <div className={styles["component-wrapper"]}>
        <div className={styles.component}>
          <QuestionInput />
        </div>
      </div>
    </div>
  );
};
