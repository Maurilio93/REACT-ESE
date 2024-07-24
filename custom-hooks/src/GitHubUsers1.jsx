import { useGitHubUsers1 } from "./UseGitHubUsers1";

export function GitHubUsers1() {
  const { data, username, handleUsernameChange, handleSubmit } = useGitHubUsers1();

  return (
    <>
      <div>
        {data && <h1>{data.name}</h1>}
        {data && <h1>{data.login}</h1>}
        {data && <img src={data.avatar_url} alt="Avatar" />}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={handleUsernameChange} />
        <button type="submit">Cerca Utente</button>
      </form>
    </>
  );
}
