import * as React from "react";
import { OptionType, QuestionRadioType } from "./type";
import { Button, Checkbox, Form, Input, Select, Space } from "antd";
import { useEffect } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { nanoid } from "nanoid";
export const PropComponent: React.FC<QuestionRadioType> = (props) => {
  const { title, value, isVertical, options, onChange, disable } = props;

  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({ title, value, isVertical, options });
  }, [title, value, isVertical, options]);

  const handleOnChange = () => {
    if (onChange == null) return;
    // 触发 onChange 函数
    const newValues = form.getFieldsValue() as QuestionRadioType;

    if (newValues.options) {
      // 需要清除 text undefined 的选项
      newValues.options = newValues.options.filter(
        (opt) => !(opt.text == null)
      );
    }
    const { options = [] } = newValues;
    options.forEach((opt) => {
      if (opt.value) return;
      opt.value = nanoid(5); // 补齐 opt value
    });

    onChange(newValues);
  };
  return (
    <Form
      layout="vertical"
      initialValues={{ title, value, isVertical, options }}
      onValuesChange={handleOnChange}
      disabled={disable}
      form={form}
    >
      <Form.Item
        label="标题"
        name={"title"}
        rules={[{ required: true, message: "请输入标题" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="选项">
        <Form.List name={"options"}>
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name }, index) => {
                return (
                  <Space key={key} align="baseline">
                    <Form.Item
                      name={[name, "text"]}
                      rules={[
                        { required: true, message: "请输入选项文字" },
                        {
                          validator: (_, text) => {
                            const { options = [] } = form.getFieldsValue();
                            let num = 0;
                            options.forEach((opt: OptionType) => {
                              if (opt.text === text) num++; // 记录 text 相同的个数，预期只有 1 个（自己）
                            });
                            if (num === 1) return Promise.resolve();
                            return Promise.reject(
                              new Error("和其他选项重复了")
                            );
                          },
                        },
                      ]}
                    >
                      <Input placeholder="请输入选项文字" />
                    </Form.Item>
                    {index > 1 && (
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    )}
                  </Space>
                );
              })}
              <Form.Item>
                <Button
                  type="link"
                  icon={<PlusOutlined />}
                  onClick={() => add({ text: "", value: "" })}
                  block
                >
                  添加选项
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form.Item>

      <Form.Item label="默认选中" name={"value"}>
        <Select
          value={value}
          options={options?.map(({ text, value }) => ({
            value,
            label: text || "",
          }))}
        ></Select>
      </Form.Item>
      <Form.Item name={"isVertical"} valuePropName="checked">
        <Checkbox>竖向排列</Checkbox>
      </Form.Item>
    </Form>
  );
};
