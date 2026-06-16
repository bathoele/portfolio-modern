import React, { useState } from "react";

function NavMenu({ changePage, currentPage }) {

  return (
  
    <nav className="relative -left-35 justify-center z-5 text-lg text-gray-400 font-head">
      <ul className="leading-relaxed fixed flex flex-col h-100 w-30 justify-center [transform:perspective(200px)_rotateY(40deg)]">
        <li className={`${currentPage === "home" ? "text-white" : "border-transparent"} border-l-2 tracking-widest relative  mb-2 transition-all duration-300 ease-in-out h-8`}>
          <button className="w-full text-start pl-2" onClick={() => changePage("home")}>HOME</button>
        </li>
        <li className={`${currentPage === "projects" ? "text-white" : "border-transparent"} border-l-2 tracking-widest relative mb-2 transition-all duration-300 ease-in-out h-8`}>
          <button  className="w-full text-start pl-2" onClick={() => changePage("projects")}>PROJECTS</button>
        </li>
        <li className={`${currentPage === "about" ? "text-white" : "border-transparent"} border-l-2 tracking-widest relative mb-2 transition-all duration-300 ease-in-out h-8`}>
          <button className="w-full text-start pl-2" onClick={() => changePage("about")}>ABOUT</button>
        </li>
      </ul>
    </nav>
    
  )
}

export default NavMenu;