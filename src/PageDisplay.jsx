import React from "react";
import HomePage from "./HomePage"
import ProjectsPage from "./ProjectsPage"
import AboutPage from "./AboutPage"
import ContactCard from "./ContactCard"

export default function PageDisplay({ page, setPage }) {

  return (
    <div>
      {page === "home" && <HomePage setPage={setPage} />}
      {page === "projects" && <ProjectsPage />}
      {page === "about" && <AboutPage />}
    </div>
  )
}