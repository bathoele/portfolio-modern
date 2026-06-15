import React from "react";

function HomePage({ setPage }) {
  
  return (
    <div>
      <h1>Brendan Thoele</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae pariatur dolore nemo magni incidunt distinctio. Asperiores, cupiditate quod voluptatem quisquam quis at. Et similique repudiandae ipsa odit, iste assumenda neque?</p>
      <button onClick={() => setPage("projects")}>PROJECTS</button>
    </div>
  )
}

export default HomePage;