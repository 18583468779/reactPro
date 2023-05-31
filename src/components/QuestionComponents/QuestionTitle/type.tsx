export type QuestionTitleType = {
  level?: string;
  text?: string;
  isCenter?: string;
  onChange?: (val: QuestionTitleType) => void;
};

export const QuestionTitleProps = {
  level: "1",
  text: "一行标题",
  isCenter: "left",
};
