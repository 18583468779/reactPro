export type QuestionTitleType = {
  level?: 1 | 2 | 3 | 4 | 5;
  text?: string;
  isCenter?: "center" | "left" | "right";
};

export const QuestionTitleProps = {
  level: 1,
  text: "请输入内容",
  isCenter: "left",
};
