import * as React from "react";
import { QuestionInputType } from "./type";
import { Typography, Input } from "antd";

const { Paragraph } = Typography;
export const QuestionInput: React.FC<QuestionInputType> = (props) => {
  const { title = "输入框标题", placeholder = "请输入内容" } = props;
  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <div>
        <Input placeholder={placeholder}></Input>
      </div>
    </div>
  );
};
