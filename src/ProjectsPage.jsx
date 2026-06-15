import React from "react";

function ProjectsPage() {
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-5xl">Projects</h1>
      <span>
        <p className="leading-relaxed"><a href="" className="text-xl">Project 1</a> - &ensp;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi fugit dignissimos vel nemo, exercitationem repellendus non iusto iure, est pariatur suscipitnobis eveniet dolore? Quidem iure quasi voluptatibus minima consectetur.</p>
      </span>
      <div>
        <span>React.js</span>
        <span>Tailwind.css</span>
        <span>Node.js</span>
        <span>Express.js</span>
      </div>
    </div>
  )
}

export default ProjectsPage;