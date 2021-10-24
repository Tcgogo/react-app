import { useAuth } from "context/auth-context";
import React, { FormEvent, useState } from "react";
import { apiUrl } from "../auth-provider";

const Register = () => {
  const context = useAuth();

  const [isLog, setIsLog] = useState<boolean>(false);

  // 注册
  const onsubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const resDoms = Array.from(e.currentTarget.elements).filter((e) => {
      return e.id === "password" || e.id === "username";
    }) as HTMLInputElement[];
    const username = resDoms[0].value;
    const password = resDoms[1].value;

    const data = await context.register({
      username,
      password,
    });
    console.log(data);
    setIsLog(true);
  };

  return (
    <form onSubmit={onsubmit}>
      {isLog ? <div>注册成功，token为{context.user?.token}</div> : null}
      <label htmlFor="username">账号</label>
      <input id={"username"} type="text" />
      <br />
      <label htmlFor="password">密码</label>
      <input id={"password"} type="password" />
      <button>注册</button>
    </form>
  );
};

export default Register;
