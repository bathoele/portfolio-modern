import React, { useState } from "react";

function NavMenu({ changePage, currentPage }) {

  return (
    <div className="h-70 flex flex-col justify-center z-5">
      <ul className="leading-relaxed w-30">
        <li><span className={`${currentPage === "home" ? "border-white" : "border-transparent"} border-2 mr-2 transition-all duration-300 ease-in-out`}></span><button onClick={() => changePage("home")}>HOME</button></li>
        <li><span className={`${currentPage === "projects" ? "border-white" : "border-transparent"} border-2 mr-2 transition-all duration-300 ease-in-out`}></span><button className={currentPage === "projects" ? "" : ""} onClick={() => changePage("projects")}>PROJECTS</button></li>
        <li><span className={`${currentPage === "about" ? "border-white" : "border-transparent"} border-2 mr-2 transition-all duration-300 ease-in-out`}></span><button className={currentPage === "about" ? "" : ""} onClick={() => changePage("about")}>ABOUT</button></li>
      </ul>
    </div>
  )
}

export default NavMenu;