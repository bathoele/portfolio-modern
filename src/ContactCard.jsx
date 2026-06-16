import React from "react";

export default function ContactCard() {
  return (
    <div className="h-70 flex flex-col z-5">
      <div className="fixed right-10 top-10 border-2 border-gray-400 p-3 tracking-widest [transform:perspective(500px)_rotateY(-30deg)]">
        <h3>Contact:</h3>
        <ul>
          <li>brendanathoele@gmail.com</li>
          <li>linkedin</li>
        </ul>
      </div>
    </div>
  )
}