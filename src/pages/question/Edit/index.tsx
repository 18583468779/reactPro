import * as React from "react";
import styles from "./index.module.scss";

import { useLoadingQuestionData } from "../../../hook/useLoadingQuestionData";
import { EditCanvas } from "./EditCanvas";
import { useDispatch } from "react-redux";
import { changeComponentId } from "../../../store/componentsReducer";
import { LeftPanel } from "./LeftPanel";

export const Edit: React.FC = () => {
  const { loading, error } = useLoadingQuestionData();
  const dispatch = useDispatch();

  const handleClickCancel = () => {
    //点击空余部位取消组件选中
    dispatch(changeComponentId(""));
  };

  return (
    <div className={styles.container}>
      header
      <div className={styles["content-wrapper"]}>
        <div className={styles.content}>
          <div className={styles.left}>
            <LeftPanel />
          </div>
          <div className={styles.main} onClick={() => handleClickCancel()}>
            <div className={styles["canvas-wrapper"]}>
              <div>
                <EditCanvas loading={loading} />
              </div>
            </div>
          </div>
          <div className={styles.right}>right</div>
        </div>
      </div>
    </div>
  );
};
