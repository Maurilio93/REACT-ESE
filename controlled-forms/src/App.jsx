import { useState } from "react";
import { Login } from "./Login";
import "./App.css"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Login></Login>
    </>
  );
}

export default App;