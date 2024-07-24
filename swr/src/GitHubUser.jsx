import { useParams } from "react-router-dom";
import { useGithubUser } from "./useGithubUser";

export function GithubUser() {
  const { username } = useParams();
  const { data, loading, error } = useGithubUser(username);

  return (
    <div>
      {loading && <h3>Loading data...</h3>}
      {error && <h3>An error has occurred.</h3>}
      {data && <h3>{data.name}</h3>}
    </div>
  );
}
