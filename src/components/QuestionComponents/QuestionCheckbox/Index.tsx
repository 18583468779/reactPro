import * as React from "react";
import { QuestionCheckboxDefault, QuestionCheckboxType } from "./type";
import { Checkbox, Space, Typography } from "antd";

const { Paragraph } = Typography;

export const QuestionCheckbox: React.FC<QuestionCheckboxType> = (props) => {
  const {
    title,
    isVertical,
    list = [],
  } = { ...QuestionCheckboxDefault, ...props };
  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <Space direction={isVertical ? "vertical" : "horizontal"}>
        {list.map((opt) => {
          const { value, text, checked } = opt;
          return (
            <Checkbox key={value} value={value} checked={checked}>
              {text}
            </Checkbox>
          );
        })}
      </Space>
    </div>
  );
};
