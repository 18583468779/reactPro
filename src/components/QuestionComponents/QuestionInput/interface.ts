/**
 * @description 问卷 输入框
 * @author 小谢
 * **/

import { QuestionInput } from "./Index";
import { PropComponent } from "./PropComponent";
import { QuestionInputProps } from "./type";

export * from "./type";

export default {
  title: "输入框",
  type: "questionInput",
  Component: QuestionInput, //画布显示
  PropComponent, //修改属性
  defaultProps: QuestionInputProps,
};
