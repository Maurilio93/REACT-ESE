import { useState } from "react";

export function useGitHubUsers1() {
  const [data, setData] = useState(null);
  const [username, setUsername] = useState("");

  function fetchUser() {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }

  function handleUsernameChange(evt) {
    setUsername(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    fetchUser();
    setUsername("");
  }

  return { data, username, handleUsernameChange, handleSubmit };
}
