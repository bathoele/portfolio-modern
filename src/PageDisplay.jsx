import React from "react";
import HomePage from "./HomePage"
import ProjectsPage from "./ProjectsPage"
import AboutPage from "./AboutPage"
import ContactCard from "./ContactCard"

export default function PageDisplay({ page }) {

  return (
    <div>
      {page === "home" && <HomePage />}
      {page === "projects" && <ProjectsPage />}
      {page === "about" && <AboutPage />}
    </div>
  )
}