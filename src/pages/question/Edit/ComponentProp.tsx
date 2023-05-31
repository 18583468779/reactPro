import * as React from "react";
import { useGetComponentInfo } from "../../../hook/useGetComponentInfo";
import { ComponentInfoType } from "../../../store/componentsReducer";
import { getComponentConfByType } from "../../../components/QuestionComponents";

const NoProp: React.FC = () => {
  return <div style={{ textAlign: "center" }}>未选择组件</div>;
};

export const ComponentProp: React.FC = () => {
  const { selectComponent } = useGetComponentInfo();
  if (selectComponent === undefined) return <NoProp />;
  const { type, props } = selectComponent;
  const componentConf = getComponentConfByType(type);
  if (componentConf === undefined) return <NoProp />;
  const { PropComponent } = componentConf;

  return (
    <div>
      <PropComponent {...props} />
    </div>
  );
};
