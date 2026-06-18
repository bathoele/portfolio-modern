import React from "react";

function HomePage({ setPage }) {
  
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-5xl animate-color-pulse font-light font-head tracking-tight">I'm Brendan Thoele</h1>
      <p className="leading-6.5">A web developer and designer who loves making websites that are efficient, beautiful, and unique. Graphic and UX design are my strong suites; and my web development abilities are always expanding!</p>
    </div>
  )
}

export default HomePage;