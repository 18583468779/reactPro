import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography, Space, Form, Input, Button, Checkbox } from "antd";
import { UserAddOutlined } from "@ant-design/icons";

import { REGISTER_PATHNAME } from "../router";

import styles from "./Login.module.scss";

const { Title } = Typography;

const USERNAME_KEY = "USERNAME";
const PASSWORD_KEY = "PASSWORD";

const Login: FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    const { username, password, remember } = values;
    if (remember) {
      rememberUser(username, password);
    } else {
      deleteRememberUser();
    }
  };

  const rememberUser = (username: string, password: string) => {
    localStorage.setItem(USERNAME_KEY, username);
    localStorage.setItem(PASSWORD_KEY, password);
  };
  const deleteRememberUser = () => {
    localStorage.removeItem(USERNAME_KEY);
    localStorage.removeItem(PASSWORD_KEY);
  };

  const getUserInfo = () => {
    return {
      username: localStorage.getItem(USERNAME_KEY),
      password: localStorage.getItem(PASSWORD_KEY),
    };
  };

  useEffect(() => {
    const { username, password } = getUserInfo();
    form.setFieldsValue({ username, password });
  }, []);
  return (
    <div className={styles.container}>
      <div>
        <Space>
          <Title level={2}>
            <UserAddOutlined />
          </Title>
          <Title level={2}>用户登录</Title>
        </Space>
      </div>
      <div>
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          form={form}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[
              { required: true, message: "请输入用户名!" },
              {
                type: "string",
                min: 2,
                max: 10,
                message: "长度只能在2-10之间",
              },
              {
                pattern: /^[_a-zA-Z0-9]+$/,
                message: "只能是数字字母下划线",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[
              { required: true, message: "请输入密码!" },
              {
                type: "string",
                min: 2,
                max: 10,
                message: "长度只能在2-10之间",
              },
              {
                pattern: /^[_a-zA-Z0-9]+$/,
                message: "只能是数字字母下划线",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 6, span: 16 }}
          >
            <Checkbox>记住我</Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
              <Link to={REGISTER_PATHNAME}>注册新用户</Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
