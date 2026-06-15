import React, { useState } from "react";

function NavMenu({ changePage, currentPage }) {

  return (
    <div className="h-70 flex flex-col justify-center">
      <ul className="border-2">
        <li><span></span><button className={currentPage === "home" ? "text-red-500" : ""} onClick={() => changePage("home")}>HOME</button></li>
        <li><span></span><button className={currentPage === "projects" ? "text-red-500" : ""} onClick={() => changePage("projects")}>PROJECTS</button></li>
        <li><span></span><button className={currentPage === "about" ? "text-red-500" : ""} onClick={() => changePage("about")}>ABOUT</button></li>
      </ul>
    </div>
  )
}

export default NavMenu;