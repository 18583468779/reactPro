import * as React from "react";
import { QuestionTitleType } from "./type";
import { Typography } from "antd";

const { Title } = Typography;
export const QuestionTitle: React.FC<QuestionTitleType> = (props) => {
  const { text = "一级标题", isCenter = "left", level = 1 } = props;
  return (
    <Title style={{ textAlign: isCenter }} level={level}>
      {text}
    </Title>
  );
};
