import * as React from "react";
import styles from "./EditCanvas.module.scss";

import { QuestionInput } from "../../../components/QuestionComponents/QuestionInput/Index";
import { QuestionTitle } from "../../../components/QuestionComponents/QuestionTitle/Index";
export const EditCanvas: React.FC = () => {
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
