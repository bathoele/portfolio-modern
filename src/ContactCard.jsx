import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";

export default function ContactCard() {
  return (
    <div className="h-70 z-5 flex flex-col justify-end">
      <div className="fixed flex -right-15">
        <ul className="border-2 border-gray-400 p-3 pl-6 tracking-widest [transform:perspective(500px)_rotateY(-30deg)] flex flex-col gap-2.5">
          <li className="text-xl">Contact:</li>
          <li>brendanathoele@gmail.com</li>
          <li>
            <div className="flex gap-4">
              <a href="https://github.com/bathoele" target="_blank">
                <FaGithub className="hover:-translate-x-1.5 hover:text-orange-100" size={30} />
              </a>
              <a href="https://www.upwork.com/freelancers/~011bcbe120a0abc12b" target="_blank">
                <FaUpwork className="hover:-translate-x-1.5 hover:text-orange-100" size={30} />
              </a>
            </div>
          </li>
        </ul>
        <div className="border-2 border-gray-400 w-32 [transform:perspective(500px)_rotateY(80deg)] relative -left-12.5"></div>
      </div>
    </div>
  )
}