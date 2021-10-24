import React, { useState } from "react";
import Login from "./login";
import Register from "./register";

const Unauthorized = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="w100">
      {isLogin ? <Login /> : <Register />}
      <div onClick={() => setIsLogin(!isLogin)}>
        切换到{isLogin ? "注册" : "登录"}
      </div>
    </div>
  );
};

export default Unauthorized;
