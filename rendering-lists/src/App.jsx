import { useState } from "react";
import { Color } from "./Color";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Color 
      items={[
        { id: 1, name: "Maurilio" },
        { id: 2, name: "Gabriele" }
      ]}/>
    </>
  );
}

export default App;