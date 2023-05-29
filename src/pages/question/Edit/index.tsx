import * as React from "react";
import styles from "./index.module.scss";

import { useLoadingQuestionData } from "../../../hook/useLoadingQuestionData";
import { EditCanvas } from "./EditCanvas";

export const Edit: React.FC = () => {
  // const { loading, data, error } = useLoadingQuestionData();
  return (
    <div className={styles.container}>
      header
      <div className={styles["content-wrapper"]}>
        <div className={styles.content}>
          <div className={styles.left}>left</div>
          <div className={styles.main}>
            <div className={styles["canvas-wrapper"]}>
              <div>
                <EditCanvas />
              </div>
            </div>
          </div>
          <div className={styles.right}>right</div>
        </div>
      </div>
    </div>
  );
};
