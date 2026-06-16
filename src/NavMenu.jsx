import React, { useState } from "react";

function NavMenu({ changePage, currentPage }) {

  return (
  
    <nav className="relative -left-65 justify-center z-5 text-lg text-gray-400 font-head">
      <div className="fixed flex h-100 items-center">
        <div className="w-22 [transform:perspective(200px)_rotateY(300deg)] relative left-5">
          <div className={`${currentPage === "home" ? "border-white" : "border-transparent"} border-1 h-8 w-4 mb-2 ml-auto transition-all duration-300 ease-in-out`}></div>
          <div className={`${currentPage === "projects" ? "border-white" : "border-transparent"} border-1 h-8 w-4 mb-2 ml-auto transition-all duration-300 ease-in-out`}></div>
          <div className={`${currentPage === "about" ? "border-white" : "border-transparent"} border-1 h-8 w-4 ml-auto transition-all duration-300 ease-in-out`}></div>
        </div>
        <ul className="leading-relaxed flex flex-col w-30 justify-center [transform:perspective(200px)_rotateY(40deg)]">
          <li className={`${currentPage === "home" ? "text-white" : ""} tracking-widest relative  mb-2 transition-all duration-300 ease-in-out h-8`}>
            <button className="w-full text-start pl-2" onClick={() => changePage("home")}>HOME</button>
          </li>
          <li className={`${currentPage === "projects" ? "text-white" : ""} tracking-widest relative mb-2 transition-all duration-300 ease-in-out h-8`}>
            <button  className="w-full text-start pl-2" onClick={() => changePage("projects")}>PROJECTS</button>
          </li>
          <li className={`${currentPage === "about" ? "text-white" : ""} tracking-widest relative  transition-all duration-300 ease-in-out h-8`}>
            <button className="w-full text-start pl-2" onClick={() => changePage("about")}>ABOUT</button>
          </li>
        </ul>
      </div>
    </nav>
    
  )
}

export default NavMenu;