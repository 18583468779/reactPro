import { FC } from "react";
import { QuestionTitleType } from "./QuestionTitle/type";
import { QuestionInputType } from "./QuestionInput/type";
import { QuestionRadioType } from "./QuestionRadio/type";
import { QuestionCheckboxType } from "./QuestionCheckbox/type";

import QuestionTitleConf from "./QuestionTitle/interface";
import QuestionInputConf from "./QuestionInput/interface";
import QuestionRadioConf from "./QuestionRadio/interface";
import QuestionCheckboxConf from "./QuestionCheckbox/interface";

//各个组件的prop type

export type ComponentPropsType = QuestionTitleType &
  QuestionInputType &
  QuestionRadioType &
  QuestionCheckboxType;

//统一，组件的配置
export type ComponentConfType = {
  title: string;
  type: string;
  Component: FC<ComponentPropsType>;
  PropComponent?: React.FC<ComponentPropsType>;
  defaultProps: ComponentPropsType;
};

//全部的组件配置列表

const componentConfList: ComponentConfType[] = [
  QuestionTitleConf,
  QuestionInputConf,
  QuestionRadioConf,
  QuestionCheckboxConf,
];

//组件分组
export const componentConfGroup = [
  { groupName: "文本显示", components: [QuestionTitleConf] },
  { groupName: "用户输入", components: [QuestionInputConf] },
  {
    groupName: "用户选择",
    components: [QuestionRadioConf, QuestionCheckboxConf],
  },
];
export function getComponentConfByType(type: string) {
  return componentConfList.find((c) => c.type === type);
}
