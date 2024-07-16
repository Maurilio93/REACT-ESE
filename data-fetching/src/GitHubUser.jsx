import { useState } from "react";
import { useEffect } from "react";

export function GitHubUser({ username }) {
  const [data, Setdata] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
    .then((response) => {
      return response.json();
    })
    .then((json) =>{
      console.log(json)
      Setdata(json)
    })
  }, [username]);

  return <div>
    {data && <h1>{data.name}</h1>}
    {data && <h1>{data.login}</h1>}
    {data && <h1>{data.avatar_url}</h1>}
  </div>; 
}
