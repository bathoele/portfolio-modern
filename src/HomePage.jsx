import React from "react";

function HomePage({ setPage }) {
  
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-5xl">I'm Brendan Thoele</h1>
      <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae pariatur dolore nemo magni incidunt distinctio. Asperiores, cupiditate quod voluptatem quisquam quis at. Et similique repudiandae ipsa odit, iste assumenda neque?</p>
      <button onClick={() => setPage("projects")} className="border-2 p-2 mt-3">PROJECTS</button>
    </div>
  )
}

export default HomePage;