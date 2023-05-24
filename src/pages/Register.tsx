import { FC } from "react";
import { Typography, Space, Form, Input, Button, message } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_PATHNAME } from "../router";
import styles from "./Register.module.scss";

const { Title } = Typography;

const Register: FC = () => {
  const nav = useNavigate();

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <div className={styles.container}>
      <div>
        <Space>
          <Title level={2}>
            <UserAddOutlined />
          </Title>
          <Title level={2}>注册新用户</Title>
        </Space>
      </div>
      <div>
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
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
            label="确认密码"
            name="confirm"
            dependencies={["password"]}
            rules={[
              { required: true, message: "请输入再次确认密码!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("两次密码输入不一致！"));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="昵称"
            name="nickname"
            rules={[
              { required: true, message: "请输入昵称!" },
              {
                type: "string",
                min: 2,
                max: 10,
                message: "长度只能在2-10之间",
              },
              {
                pattern: /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/,
                message: "只能是数字字母下划线",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                注册
              </Button>
              <Link to={LOGIN_PATHNAME}>已有账户，登录</Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
