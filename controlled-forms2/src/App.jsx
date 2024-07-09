import { useState } from "react";
import { Login } from "./Login";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    <>
      <Login onLogin={handleLogin}></Login>
    </>
  );
}

export default App;
