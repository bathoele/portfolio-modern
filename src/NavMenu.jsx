import React, { useEffect, useState } from "react";
import useActiveSection from "./useActiveSection";

function NavMenu() {
  const items = [
    { id: 'home', label: 'HOME' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'about', label: 'ABOUT' }
  ]

  const activeId = useActiveSection(items.map(i => i.id));

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = 89;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top, behavior: 'smooth' });
  }

  return (
  
    <nav className="relative -left-65 justify-center z-5 text-lg text-gray-400 font-head">
      <div className="fixed flex h-100 items-center">
        <div className="w-22 [transform:perspective(200px)_rotateY(300deg)] relative left-5">
          {items.map(item => (
            <div className={`${activeId === item.id ? "border-orange-100" : "border-transparent"} border-1 h-8 w-4 mb-2 ml-auto transition-all duration-300 ease-in-out`}></div>
          ))}
        </div>
        <ul className="leading-relaxed flex flex-col w-30 justify-center [transform:perspective(200px)_rotateY(40deg)]">
          {items.map(item => (
            <li className={`${activeId === item.id ? "text-orange-100" : "hover:text-gray-200"} ${activeId === item.id ? 'active' : ''} tracking-widest relative  mb-2 transition-all duration-300 ease-in-out h-8`}>
              <button className="w-full text-start pl-2" onClick={() => scrollToSection(item.id)}>{item.label}</button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
    
  )
}

export default NavMenu;