/**
 * @description 问卷 单选框
 * @author 小谢
 * **/

import { QuestionCheckbox } from "./Index";
import { PropComponent } from "./PropComponent";
import { QuestionCheckboxDefault } from "./type";

export * from "./type";

export default {
  title: "多选框选框",
  type: "questionCheckbox",
  Component: QuestionCheckbox, //画布显示
  PropComponent, //修改属性
  defaultProps: QuestionCheckboxDefault,
};
