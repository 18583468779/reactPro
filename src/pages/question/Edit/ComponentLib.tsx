import * as React from "react";
import styles from "./ComponentLib.module.scss";
import {
  ComponentConfType,
  componentConfGroup,
} from "../../../components/QuestionComponents";
import { Typography } from "antd";
import { useDispatch } from "react-redux";
import {
  ComponentInfoType,
  addComponent,
} from "../../../store/componentsReducer";
import { nanoid } from "nanoid";

const { Title } = Typography;

export const ComponentLib: React.FC = () => {
  const dispatch = useDispatch();

  function getComponent(c: ComponentConfType) {
    const { title, type, Component, defaultProps } = c;

    const handleClickAdd = () => {
      //点击添加到画布
      dispatch(
        addComponent({
          fe_id: nanoid(5),
          type,
          title,
          props: defaultProps,
        })
      );
    };

    return (
      <div
        key={type}
        className={styles.wrapper}
        onClick={() => handleClickAdd()}
      >
        <div className={styles.component}>
          <Component />
        </div>
      </div>
    );
  }

  return (
    <>
      {componentConfGroup.map((group, index) => {
        const { groupName, components } = group;
        return (
          <div key={group.groupName}>
            <Title
              level={3}
              style={{
                fontSize: "16px",
                marginTop: index > 0 ? "20px" : "0px",
              }}
            >
              {groupName}
            </Title>
            <div>{components.map((c) => getComponent(c))}</div>
          </div>
        );
      })}
    </>
  );
};
