import React from "react";
import Unauthorized from "./Unauthorized-App";
import Authorized from "./Authorized-App";
import "./App.css";
import { useAuth } from "context/auth-context";

function App() {
  const { user } = useAuth();
  return <div className="App">{user ? <Authorized /> : <Unauthorized />}</div>;
}

export default App;
