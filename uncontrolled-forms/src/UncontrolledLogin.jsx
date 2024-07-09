export function UncontrolledLogin() {
  function handleFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      session: formData.get("session") === "on" ? true : false,
    };
    console.log(data);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <h1>My UncontrolledForm</h1>
      <input name="username" placeholder="username"/>
      <input name="password" type="password" placeholder="password"/>
      <input name="session" type="checkbox" />
      <button>Login</button>
      <button type="reset">Reset</button>
    </form>
  );
}
