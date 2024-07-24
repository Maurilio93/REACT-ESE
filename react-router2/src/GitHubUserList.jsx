import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

export function GitHubUserList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <Link to={`${user.login}`}>{user.login}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}
