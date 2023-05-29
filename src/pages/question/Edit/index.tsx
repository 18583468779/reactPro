import * as React from "react";
import styles from "./index.module.scss";

import { useLoadingQuestionData } from "../../../hook/useLoadingQuestionData";

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
              <div style={{ height: "1000px", background: "white" }}>
                center
              </div>
            </div>
          </div>
          <div className={styles.right}>right</div>
        </div>
      </div>
    </div>
  );
};
