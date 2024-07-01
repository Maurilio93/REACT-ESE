import Message from "./Message";
import Welcome from "./Welcome"

function Hello() {
  return (
    <>
      <h2>Hello,World!</h2>
      <Message>
        <Welcome></Welcome>
      </Message>
    </>
  );
}

export default Hello;
