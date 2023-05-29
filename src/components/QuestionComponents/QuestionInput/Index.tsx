import * as React from "react";
import { QuestionInputType } from "./type";
import { Typography, Input } from "antd";

const { Paragraph } = Typography;
export const QuestionInput: React.FC<QuestionInputType> = (props) => {
  const { title, placeholder } = props;
  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <div>
        <Input placeholder={placeholder}></Input>
      </div>
    </div>
  );
};
