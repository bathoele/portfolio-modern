import React, { useRef } from "react";
import HomePage from "./HomePage"
import ProjectsPage from "./ProjectsPage"
import AboutPage from "./AboutPage"
import ContactCard from "./ContactCard"
import SectionBorder from "./SectionBorder";

function PageDisplay({ page, setPage }) {
  const targetRef = useRef(page);

  const handleScroll = () => {
    targetRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
 
  return (
    <div className="w-1/2 max-w-190 z-5 text-lg flex flex-col gap-25">
      <HomePage />
      <SectionBorder />
      <ProjectsPage />
      <SectionBorder />
      <AboutPage />
    </div>
  )
}

export default PageDisplay;