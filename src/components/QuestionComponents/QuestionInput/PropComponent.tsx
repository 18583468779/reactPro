import * as React from "react";
import { QuestionInputType } from "./type";

import { Form, Input } from "antd";
import { useEffect } from "react";
import { useGetComponentInfo } from "../../../hook/useGetComponentInfo";

export const PropComponent: React.FC<QuestionInputType> = (props) => {
  const { title, placeholder, onChange } = props;
  const [form] = Form.useForm();

  const { selectComponent } = useGetComponentInfo();

  useEffect(() => {
    form.setFieldsValue({ title, placeholder });
  }, [title, placeholder]);

  const onValuesChange = () => {
    if (onChange) {
      onChange(form.getFieldsValue());
    }
  };
  return (
    <Form
      layout="vertical"
      form={form}
      initialValues={{ title, placeholder }}
      onValuesChange={onValuesChange}
      disabled={selectComponent.isLocked ? true : false}
    >
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
