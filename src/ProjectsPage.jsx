import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectsPage() {

  const projects = [
    {
      image: "weather.png",
      title: "Weather App",
      desc: "Web app that accesses weather data and displays across three pages; Today, Hourly, and 7 day forecasts. The data is accessed from an open-source API.",
      tools: ["React", "Express", "Tailwind", "Open-Meteo API"],
      links: ["https://bathoele.github.io/weather-app/"],
    },
    {
      image: "KCDR.png",
      title: "Kansas City Doberman Rescue Remake",
      desc: "Final project for a CSS Techniques class that included a complete redesign of a local organization's website. Designed with a mobile-first approach, the layout is responsive to mobile, tablet, and desktop screen sizes.",
      tools: [],
      links: ["https://bathoele.github.io/KCDR-site/web122-final-bat/"],
    },
    {
      image: "decoder.png",
      title: "Exploder Decoder",
      desc: "Bomb defusing game made with pure HTML, CSS, Javascript, and personal amusement. Can you prove yourself to be the ultimate Decoderator?",
      tools: [],
      links: ["https://bathoele.github.io/jccc-javascript/final-project/"],
    },
    {
      image: "NEKL.png",
      title: "Northeast Kansas Library Mockup",
      desc: "Redesign of the NEKL Foundation's website for a digital media concepts class presentation.",
      tools: ["Figma"],
      links: ["https://www.figma.com/design/se8Y6OYwEt3EibGHvXtLST/NEKLF-Prototype?node-id=0-1&t=OtjRDKEs6f0NBjNy-1"],
    },
    {
      image: "chris_elbow.png",
      title: "Christopher Elbow Mobile Mockup",
      desc: "Redesign of the Christopher Elbow mobile website as a user interface design project.",
      tools: ["Figma"],
      links: ["https://www.figma.com/design/NshJhkBUlDTNCt2kTDyvOQ/WEB126-Mockup-Project?node-id=0-1&t=ok3pU5gcSbdnlRLT-1"],
    },
    {
      image: "NOTLD.png",
      title: "Night of the Living Dead Mockup",
      desc: "Movie website design for the classic zombie horror.",
      tools: ["Figma"],
      links: ["https://www.figma.com/design/VPFOYDZ9plnN2BsNnoalVk/Movie-Mockup-Project?node-id=0-1&t=3r9snpqARw1GmyOJ-1"],
    },
    {
      image: "nerman.png",
      title: "Nerman Museum Info Tablet Mockup",
      desc: "Design to display museum and exhibit information on a tablet as a User Interface Design class.",
      tools: ["Figma"],
      links: ["https://www.figma.com/design/sM5kbgsVwdD7KAeJjHejRv/Museum-Interface-Design-Project?node-id=3-3&t=3r9snpqARw1GmyOJ-1"],
    },
  ];

  return (
    <section id="projects" className="flex flex-col items-center gap-12">
      <h1 className="text-5xl animate-color-pulse font-light font-head tracking-tight">Projects</h1>
      {projects.map(project => <ProjectCard data={project} />)}
    </section>
  )
}

export default ProjectsPage;