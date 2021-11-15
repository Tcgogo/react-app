import { useAuth } from "context/auth-context";
import React, { FormEvent, useState } from "react";
import { Button, Form, Input } from "antd";

const Login = () => {
  const context = useAuth();

  const [isLog, setIsLog] = useState<boolean>(false);

  // 登录
  const onsubmit = async (value: { username: string; password: string }) => {
    const { username, password } = value;
    const data = await context.login({
      username,
      password,
    });
    console.log(data);
    setIsLog(true);
  };

  return (
    <Form onFinish={onsubmit} className="flex-column h100">
      {isLog ? <div>登录成功，token为{context.user?.token}</div> : null}
      <Form.Item
        name={"username"}
        label="账号"
        rules={[{ required: true, message: "请输入账号" }]}
      >
        <Input></Input>
      </Form.Item>
      <Form.Item
        name={"password"}
        label="密码"
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input type="password"></Input>
      </Form.Item>
      <Button htmlType="submit" type="primary">
        登陆
      </Button>
    </Form>
  );
};

export default Login;
