import { FC } from "react";
import { QuestionTitleType } from "./QuestionTitle/type";
import { QuestionInputType } from "./QuestionInput/type";
import QuestionTitleConf from "./QuestionTitle/interface";
import QuestionInputConf from "./QuestionInput/interface";

//各个组件的prop type

export type ComponentPropsType = QuestionTitleType & QuestionInputType;

//统一，组件的配置
export type ComponentConfType = {
  title: string;
  type: string;
  Component: FC<ComponentPropsType>;
  defaultProps: ComponentPropsType;
};

//全部的组件配置列表

const componentConfList: ComponentConfType[] = [
  QuestionTitleConf,
  QuestionInputConf,
];

export function getComponentConfByType(type: string) {
  return componentConfList.find((c) => c.type === type);
}
