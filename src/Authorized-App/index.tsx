import { useAuth } from "context/auth-context";
import React from "react";

const Home = () => {
  const { logout } = useAuth();
  return (
    <div>
      首页
      <button onClick={() => logout}>登出</button>
    </div>
  );
};

export default Home;
