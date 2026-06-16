import React from "react";
import HomePage from "./HomePage"
import ProjectsPage from "./ProjectsPage"
import AboutPage from "./AboutPage"
import ContactCard from "./ContactCard"
import SectionBorder from "./SectionBorder";

function PageDisplay({ page, setPage }) {

  return (
    <div className="w-1/2 max-w-190 z-5 text-lg flex flex-col gap-25">
      <HomePage setPage={setPage} />
      <SectionBorder />
      <ProjectsPage />
      <SectionBorder />
      <AboutPage />
    </div>
  )
}

export default PageDisplay;