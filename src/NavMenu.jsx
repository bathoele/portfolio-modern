import React, { useState } from "react";

function NavMenu({ changePage, currentPage }) {

  return (
  
    <nav className="h-70 flex relative -left-25 flex-col justify-center z-5 border-2">
      <ul className="leading-relaxed border-2 fixed">
        <li><span className={`${currentPage === "home" ? "border-white" : "border-transparent"} border-2 mr-2 transition-all duration-300 ease-in-out`}></span><button onClick={() => changePage("home")}>HOME</button></li>
        <li><span className={`${currentPage === "projects" ? "border-white" : "border-transparent"} border-2 mr-2 transition-all duration-300 ease-in-out`}></span><button className={currentPage === "projects" ? "" : ""} onClick={() => changePage("projects")}>PROJECTS</button></li>
        <li><span className={`${currentPage === "about" ? "border-white" : "border-transparent"} border-2 mr-2 transition-all duration-300 ease-in-out`}></span><button className={currentPage === "about" ? "" : ""} onClick={() => changePage("about")}>ABOUT</button></li>
      </ul>
    </nav>
    
  )
}

export default NavMenu;