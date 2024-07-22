import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Welcome from "./Welcome";
import { Counter1 } from "./Counter1";
import { ShowGitHubUser } from "./ShowGitHubUser";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome name="Maurilio Valenti" />} />
          <Route path="/counter" element={<Counter1 />} />
          <Route path="/users/:username" element={<ShowGitHubUser />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
