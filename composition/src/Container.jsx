import { useState } from "react";

export function Container({ title, children }) {
  const [collapsed, setCollapsed] = useState(false);

  function handleToggleCollapse() {
    setCollapsed((t) => !t);
  }

  return (
    <div className="container">
      <div className="title" onClick={handleToggleCollapse}>{title}</div>
      {<div className={collapsed ? "app-content" : "app-content-hidden"}>{children}</div>}
    </div>
  );
}
