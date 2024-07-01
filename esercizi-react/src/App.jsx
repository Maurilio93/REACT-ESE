import Hello from "./Hello";
import Welcome from "./Welcome";


function App() {
  return (
    <div>
      <Hello />
      <Welcome name= "Maurilio" age={31}></Welcome>
    </div>
  );
}

export default App;
