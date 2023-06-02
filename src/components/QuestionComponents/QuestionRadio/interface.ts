/**
 * @description 问卷 单选框
 * @author 小谢
 * **/

import { QuestionRadio } from "./Index";
import { QuestionRadioDefault } from "./type";

export * from "./type";

export default {
  title: "单选框",
  type: "questionRadio",
  Component: QuestionRadio, //画布显示
  //   PropComponent, //修改属性
  defaultProps: QuestionRadioDefault,
};
