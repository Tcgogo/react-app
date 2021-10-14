import React, { FormEvent } from "react";
import { apiUrl } from "../auth-provider";

const Login = () => {
  const register = (params: { username: string; password: string }) => {
    console.log(JSON.stringify(params));
    fetch(`${apiUrl}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
  };

  const login = (params: { username: string; password: string }) => {
    console.log(JSON.stringify(params));
    fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
  };

  const onsubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
    login({ username, password });
  };

  return (
    <form onSubmit={onsubmit}>
      <label htmlFor="username">账号</label>
      <input id={"username"} type="text" />
      <br />
      <label htmlFor="password">密码</label>
      <input id={"password"} type="password" />
      <button type={"submit"}>提交</button>
    </form>
  );
};

export default Login;
