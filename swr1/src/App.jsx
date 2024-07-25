import { Link, Route, Routes } from "react-router-dom";
import { GithubUsers } from "./Components/GithubUsers";
import { GithubUser } from "./Components/GithubUser";

export function App() {
  return (
    <div>
      <div>
        <Link to="/users">Users</Link>
      </div>
      <Routes>
        <Route path="users" element={<GithubUsers />}>
          <Route path=":username" element={<GithubUser />} />
        </Route>
      </Routes>
    </div>
  );
}