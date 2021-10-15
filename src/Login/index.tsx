import { useAuth } from "context/auth-context";
import React, { FormEvent, useState } from "react";
import { apiUrl } from "../auth-provider";

const Login = () => {
  const context = useAuth();

  const [logType, setLogType] = useState<number>(1);

  const onsubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const resDoms = Array.from(e.currentTarget.elements).filter((e) => {
      return e.id === "password" || e.id === "username";
    }) as HTMLInputElement[];
    const username = resDoms[0].value;
    const password = resDoms[1].value;

    context[logType === 1 ? "login" : "register"]({ username, password });
  };

  const handleChange = (type: number) => {
    setLogType(type);
  };

  return (
    <form onSubmit={onsubmit}>
      <div>
        <button type={"button"} onClick={() => handleChange(1)}>
          登陆
        </button>
        <button type={"button"} onClick={() => handleChange(2)}>
          注册
        </button>
      </div>
      <label htmlFor="username">账号</label>
      <input id={"username"} type="text" />
      <br />
      <label htmlFor="password">密码</label>
      <input id={"password"} type="password" />
      <button type={"submit"}>{logType === 1 ? "登陆" : "注册"}</button>
    </form>
  );
};

export default Login;
