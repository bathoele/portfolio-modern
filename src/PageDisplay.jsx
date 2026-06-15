import React from "react";
import HomePage from "./HomePage"
import ProjectsPage from "./ProjectsPage"
import AboutPage from "./AboutPage"
import ContactCard from "./ContactCard"

function PageDisplay({ page, setPage }) {

  return (
    <div className="w-1/2">
      {page === "home" && <HomePage setPage={setPage} />}
      {page === "projects" && <ProjectsPage />}
      {page === "about" && <AboutPage />}
    </div>
  )
}

export default PageDisplay;