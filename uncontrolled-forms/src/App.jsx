import { useState } from "react";
import "./App.css";
import { UncontrolledLogin } from "./UncontrolledLogin";

function App() {
  const [count, setCount] = useState(0);

  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    <>
      <UncontrolledLogin/>
    </>
  );
}

export default App;
