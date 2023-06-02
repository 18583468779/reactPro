import * as React from "react";
import { QuestionTitleType } from "./type";
import { Checkbox, Form, Input, Select } from "antd";
import { useEffect } from "react";
import { useGetComponentInfo } from "../../../hook/useGetComponentInfo";
export const PropComponent: React.FC<QuestionTitleType> = (props) => {
  const { text, level, isCenter, onChange } = props;
  const [form] = Form.useForm();
  const { selectComponent } = useGetComponentInfo();

  useEffect(() => {
    form.setFieldsValue({ text, level, isCenter });
  }, [text, level, isCenter]);

  const onValuesChange = () => {
    if (onChange) {
      onChange(form.getFieldsValue());
    }
  };

  return (
    <Form
      layout="vertical"
      initialValues={{ text, level, isCenter }}
      form={form}
      onValuesChange={() => onValuesChange()}
      disabled={selectComponent.isLocked ? true : false}
    >
      <Form.Item
        label="标题内容"
        name={"text"}
        rules={[{ required: true, message: "请输入内容" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="层级" name="level">
        <Select
          options={[
            { value: 1, text: 1 },
            { value: 2, text: 2 },
            { value: 3, text: 3 },
          ]}
        ></Select>
      </Form.Item>
      <Form.Item name={"isCenter"} valuePropName="checked">
        <Checkbox>居中显示</Checkbox>
      </Form.Item>
    </Form>
  );
};
