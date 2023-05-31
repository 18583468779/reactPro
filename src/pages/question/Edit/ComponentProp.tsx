import * as React from "react";
import { useGetComponentInfo } from "../../../hook/useGetComponentInfo";
import {
  ComponentPropsType,
  getComponentConfByType,
} from "../../../components/QuestionComponents";
import { useDispatch } from "react-redux";
import { syncComponent } from "../../../store/componentsReducer";

const NoProp: React.FC = () => {
  return <div style={{ textAlign: "center" }}>未选择组件</div>;
};

export const ComponentProp: React.FC = () => {
  const dispatch = useDispatch();
  const { selectComponent, id } = useGetComponentInfo();
  if (selectComponent === undefined) return <NoProp />;
  const { type, props } = selectComponent;
  const componentConf = getComponentConfByType(type);
  if (componentConf === undefined) return <NoProp />;
  const { PropComponent } = componentConf;

  const onValuesChange = (val: ComponentPropsType) => {
    dispatch(syncComponent({ id, val }));
  };

  return (
    <div>
      <PropComponent {...props} onChange={onValuesChange} />
    </div>
  );
};
