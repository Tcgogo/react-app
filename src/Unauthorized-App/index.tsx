import React, { useState } from "react";
import Login from "./login";
import Register from "./register";
import "./index.css";

const Unauthorized = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="loginBox w100">
      {isLogin ? <Login /> : <Register />}
      <div onClick={() => setIsLogin(!isLogin)}>
        切换到{isLogin ? "注册" : "登录"}
      </div>
    </div>
  );
};

export default Unauthorized;
