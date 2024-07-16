import { useState } from "react";

export function GitHubUsers() {
  const [data, setData] = useState(null);
  const [username, setUsername] = useState("");

  function fetchUser() {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }

  function handleUsernameChange(evt) {
    let value = evt.target.value;
    setUsername(value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    fetchUser();
    setUsername("");
  }

  return (
    <>
      <div>
        {data && <h1>{data.name}</h1>}
        {data && <h1>{data.login}</h1>}
        {data && <img src={data.avatar_url}></img>}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={handleUsernameChange} />
        <button type="submit">Cerca Utente</button>
      </form>
    </>
  );
}
