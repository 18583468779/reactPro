import { RadioChangeEvent, Radio, Space, Typography } from "antd";
import * as React from "react";
import { useState } from "react";
import { QuestionRadioDefault, QuestionRadioType } from "./type";

const { Paragraph } = Typography;

export const QuestionRadio: React.FC<QuestionRadioType> = (props) => {
  const {
    title,
    options = [],
    value,
    isVertical,
  } = { ...QuestionRadioDefault, ...props };

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
  };

  return (
    <div>
      <Paragraph>{title}</Paragraph>
      <Radio.Group onChange={onChange} value={value}>
        <Space direction={isVertical ? "vertical" : "horizontal"}>
          {options.map((r) => {
            return (
              <Radio value={r.value} key={r.value}>
                {r.text}
              </Radio>
            );
          })}
        </Space>
      </Radio.Group>
    </div>
  );
};
