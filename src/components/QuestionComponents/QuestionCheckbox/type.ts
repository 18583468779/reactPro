export type OptionType = {
  value: string;
  text: string;
  checked: boolean;
};

export type QuestionCheckboxType = {
  title?: string;
  isVertical?: boolean;
  list?: OptionType[];
  value?: string;
  onChange?: (newProps: QuestionCheckboxType) => void;
  disabled?: boolean;
};

export const QuestionCheckboxDefault: QuestionCheckboxType = {
  title: "多选标题",
  isVertical: false,
  list: [
    { value: "item1", text: "选项1", checked: true },
    { value: "item2", text: "选项2", checked: false },
    { value: "item3", text: "选项3", checked: false },
  ],
  value: "item1",
};
