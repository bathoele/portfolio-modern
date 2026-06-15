import React, { useState } from "react";

function NavMenu({ changePage, currentPage }) {

  return (
    <div className="h-70 flex flex-col justify-center z-5">
      <ul className="leading-relaxed">
        <li><span></span><button className={currentPage === "home" ? "" : ""} onClick={() => changePage("home")}>HOME</button></li>
        <li><span></span><button className={currentPage === "projects" ? "" : ""} onClick={() => changePage("projects")}>PROJECTS</button></li>
        <li><span></span><button className={currentPage === "about" ? "" : ""} onClick={() => changePage("about")}>ABOUT</button></li>
      </ul>
    </div>
  )
}

export default NavMenu;