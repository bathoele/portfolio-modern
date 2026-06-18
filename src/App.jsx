import React, { useState } from "react"
import PageDisplay from "./PageDisplay"
import NavMenu from "./NavMenu"
import ContactCard from "./ContactCard";
import GrainBackground from "./GrainBackground";

function App() {
  const [currentPage, setPage] = useState("home");

  return (
    <div className="bg-gray-800 scroll-smooth">
      <GrainBackground />
      <div className="flex flex-row p-15 pt-20 justify-center gap-30 text-gray-300 max-w-[90%] mx-auto">
        <NavMenu changePage={setPage} currentPage={currentPage} />
        <PageDisplay page={currentPage} setPage={setPage} />
        <ContactCard />
      </div>
    </div>
  )
}

export default App
