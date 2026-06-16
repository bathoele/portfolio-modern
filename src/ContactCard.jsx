import React from "react";

export default function ContactCard() {
  return (
    <div className="h-70 z-5">
      <div className="fixed flex -right-15 top-10">
        <ul className="border-2 border-gray-400 p-3 tracking-widest [transform:perspective(500px)_rotateY(-30deg)]">
          <li><h3>Contact:</h3></li>
          <li>brendanathoele@gmail.com</li>
          <li>linkedin</li>
        </ul>
        <div className="border-2 border-gray-400 w-30 [transform:perspective(500px)_rotateY(75deg)] relative -left-10.5"></div>
      </div>
    </div>
  )
}