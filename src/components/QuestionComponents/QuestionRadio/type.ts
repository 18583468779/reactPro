export type OptionType = {
  value: string;
  text: string;
};

export type QuestionRadioType = {
  title?: string;
  isVertical?: boolean;
  options?: OptionType[];
  value?: string;
  onChange?: (newProps: QuestionRadioType) => void;
  disable?: boolean;
};

export const QuestionRadioDefault: QuestionRadioType = {
  title: "单选标题",
  isVertical: false,
  options: [
    { value: "item1", text: "选项1" },
    { value: "item2", text: "选项2" },
    { value: "item3", text: "选项3" },
  ],
  value: "item1",
};
