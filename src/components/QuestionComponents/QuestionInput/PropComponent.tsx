import * as React from "react";
import { QuestionInputType } from "./type";

import { Form, Input } from "antd";
import { useEffect } from "react";

export const PropComponent: React.FC<QuestionInputType> = (props) => {
  const { title, placeholder } = props;
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({ title, placeholder });
  }, [title, placeholder]);

  return (
    <Form layout="vertical" form={form} initialValues={{ title, placeholder }}>
      <Form.Item
        label="标题"
        name="title"
        rules={[{ required: true, message: "输入框标题" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Placeholder" name="placeholder">
        <Input placeholder="请输入....." />
      </Form.Item>
    </Form>
  );
};
