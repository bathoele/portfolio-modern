import React, { useState } from "react";

function NavMenu({ changePage, currentPage }) {

  return (
  
    <nav className="h-70 relative -left-25 justify-center z-5 text-lg font-head">
      <ul className="leading-relaxed fixed flex flex-col h-70 justify-center">
        <li className={`${currentPage === "home" ? "[transform:perspective(500px)_rotateY(50deg)] -left-4 tracking-widest" : "left-0"} relative  mb-2 transition-all duration-300 ease-in-out`}><button className="w-full text-start" onClick={() => changePage("home")}>HOME</button></li>
        <li className={`${currentPage === "projects" ? "[transform:perspective(500px)_rotateY(50deg)] -left-4 tracking-widest" : "left-0"} relative mb-2 transition-all duration-300 ease-in-out`}><button  className="w-full text-start" onClick={() => changePage("projects")}>PROJECTS</button></li>
        <li className={`${currentPage === "about" ? "[transform:perspective(500px)_rotateY(50deg)] -left-4 tracking-widest" : "left-0"} relative  mb-2 transition-all duration-300 ease-in-out`}><button className="w-full text-start" onClick={() => changePage("about")}>ABOUT</button></li>
      </ul>
    </nav>
    
  )
}

export default NavMenu;