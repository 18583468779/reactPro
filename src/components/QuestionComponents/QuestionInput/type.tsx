export type QuestionInputType = {
  title?: string;
  placeholder?: string;
  onChange?: (val: QuestionInputType) => void;
};

export const QuestionInputProps = {
  title: "输入框标题",
  placeholder: "请输入内容",
};
