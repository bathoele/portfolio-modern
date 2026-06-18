import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectsPage() {

  const projects = [
    {
      image: "weather.png",
      title: "Weather App",
      desc: "Web app that accesses weather data and displays across three pages; Today, Hourly, and 7 day forecasts. The data is accessed from an open-source API.",
      tools: ["React", "Express", "Tailwind", "Open-Meteo API"]
    },
    {
      image: "weather.png",
      title: "Kansas City Doberman Rescue Remake",
      desc: "Final project for a CSS Techniques class that included a complete redesign of a local organization's website.",
      tools: []
    },
    {
      image: "weather.png",
      title: "Exploder Decoder",
      desc: "Bomb defusing game made with pure HTML, CSS, Javascript, and personal amusement. Can you prove yourself to be the ultimate Decoderator?",
      tools: []
    },
    {
      image: "weather.png",
      title: "Northeast Kansas Library Mockup",
      desc: "Redesign of the NEKL Foundation's website for a digital media concepts class presentation.",
      tools: []
    },
  ];

  return (
    <div className="flex flex-col items-center gap-12">
      <h1 className="text-5xl animate-color-pulse font-light font-head tracking-tight">Projects</h1>
      {projects.map(project => <ProjectCard data={project} />)}
    </div>
  )
}

export default ProjectsPage;