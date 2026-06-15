import React, { useState } from "react";

export default function({ changePage }) {
  const [active, setActive] = useState("");
  
  const handleClick = (page) => {
    setActive(page);
    changePage(page);
  }

  return (
    <div>
      <ul>
        <li><button className={active === "home" ? "text-red-500" : ""} onClick={() => handleClick("home")}>HOME</button></li>
        <li><button className={active === "projects" ? "text-red-500" : ""} onClick={() => handleClick("projects")}>PROJECTS</button></li>
        <li><button className={active === "about" ? "text-red-500" : ""} onClick={() => handleClick("about")}>ABOUT</button></li>
      </ul>
    </div>
  )
}