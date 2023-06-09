/**
 * @description 问卷 标题
 * @author 小谢
 * **/

import { QuestionTitle } from "./Index";
import { PropComponent } from "./PropComponent";
import { QuestionTitleProps } from "./type";

export * from "./type";

export default {
  title: "标题",
  type: "questionTitle",
  Component: QuestionTitle,
  PropComponent,
  defaultProps: QuestionTitleProps,
};
