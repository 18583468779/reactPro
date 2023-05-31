import * as React from "react";
import styles from "./ComponentLib.module.scss";
import {
  ComponentConfType,
  componentConfGroup,
} from "../../../components/QuestionComponents";
import Title from "antd/es/typography/Title";
export const ComponentLib: React.FC = () => {
  function getComponent(c: ComponentConfType) {
    const { title, type, Component } = c;
    return (
      <div key={type} className={styles.wrapper}>
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
