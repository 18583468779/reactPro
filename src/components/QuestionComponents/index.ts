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

//组件分组
export const componentConfGroup = [
  { groupName: "文本显示", components: [QuestionTitleConf] },
  { groupName: "用户输入", components: [QuestionInputConf] },
];
export function getComponentConfByType(type: string) {
  return componentConfList.find((c) => c.type === type);
}
