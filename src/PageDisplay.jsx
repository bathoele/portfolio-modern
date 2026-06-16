import React from "react";
import HomePage from "./HomePage"
import ProjectsPage from "./ProjectsPage"
import AboutPage from "./AboutPage"
import ContactCard from "./ContactCard"

function PageDisplay({ page, setPage }) {

  return (
    <div className="w-1/2 max-w-200 z-5 text-lg flex flex-col gap-25">
      <HomePage setPage={setPage} />
      <ProjectsPage />
      <AboutPage />
    </div>
  )
}

export default PageDisplay;