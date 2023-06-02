export type OptionType = {
  value: string;
  text: string;
};

export type QuestionRadioType = {
  title?: string;
  isVertical?: boolean;
  options?: OptionType[];
  value?: string;
};

export const QuestionRadioDefault: QuestionRadioType = {
  title: "单选标题",
  isVertical: false,
  options: [
    { value: "item1", text: "text1" },
    { value: "item2", text: "text2" },
    { value: "item3", text: "text3" },
  ],
  value: "item1",
};
