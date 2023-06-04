import * as React from "react";
import { useGetComponentInfo } from "../../../hook/useGetComponentInfo";
import { EyeInvisibleOutlined, LockOutlined } from "@ant-design/icons";
import styles from "./ComponentLayer.module.scss";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import {
  changeComponentId,
  lockedComponent,
  visibleAndHidden,
} from "../../../store/componentsReducer";
export const ComponentLayer: React.FC = () => {
  const dispatch = useDispatch();
  const { componentList, id, selectComponent, copyComponent } =
    useGetComponentInfo();
  //   console.log(componentList, id, selectComponent, copyComponent);

  const handleSelectId = (selectId: string) => {
    dispatch(changeComponentId(selectId));
  };
  const handleHidden = () => {
    //隐藏
    dispatch(visibleAndHidden({ isHidden: !selectComponent.isHidden }));
  };

  const handleLocked = () => {
    //锁定
    dispatch(lockedComponent());
  };

  return (
    <div>
      {componentList.map((c) => {
        const stylesLock = c.isLocked ? styles.locked : "";

        return (
          <div
            className={styles.container + " " + stylesLock}
            key={c.fe_id}
            onClick={() => handleSelectId(c.fe_id)}
          >
            <div className={c.fe_id === id ? styles.selected : ""}>
              {c.title}
            </div>
            <div>
              <Button style={{ padding: "0" }} onClick={handleHidden}>
                <EyeInvisibleOutlined />
              </Button>
              <Button>
                <LockOutlined onClick={handleLocked} />
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
