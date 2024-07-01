import Button from "./Button";

function AlertClock() {
  function buttonClick() {
    const time = new Date();
    alert(`L'ora attuale è ${time.toLocaleTimeString()}`);
  }
  return (
    <div>
      <h2>clicca il Pulsante per visualizzare l'ora</h2>
      <Button onClick={buttonClick} label="Click me" />
    </div>
  );
}

export default AlertClock;
