import React, { useState, useEffect } from "react";

export function GitHubUser({ username }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, [username]);

  return (
    <div>
      {data && <h1>{data.name}</h1>}
      {data && <h1>{data.login}</h1>}
      {data && <img src={data.avatar_url} alt={`${data.login}'s avatar`} />}
    </div>
  );
}
