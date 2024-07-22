import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import Welcome from "./Welcome";
import { Counter1 } from "./Counter1";
import { ShowGitHubUser } from "./ShowGitHubUser";
import { NotFound } from "./NotFound"

function App() {
  return (
    <Fragment>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to={"/users/Maurilio93"}>GitHub User</Link>
          </li>
        </ul>
        <Outlet />
      </div>
      <Routes>
        <Route path="/" element={<Welcome name="Maurilio Valenti"/>} />
        <Route path="/counter" element={<Counter1 />} />
        <Route path="/users/:username" element={<ShowGitHubUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
}

export default App;
