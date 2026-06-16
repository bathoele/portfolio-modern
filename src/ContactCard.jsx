import React from "react";

export default function ContactCard() {
  return (
    <div className="h-70 flex flex-col justify-center z-5">
      <div className="fixed border-1 border-gray-400 p-3">
        <div className="absolute border-1 border-gray-400 blur-xs w-full h-full inset-0"></div>
        <h3>Contact:</h3>
        <ul>
          <li>brendanathoele@gmail.com</li>
          <li>linkedin</li>
        </ul>
      </div>
    </div>
  )
}