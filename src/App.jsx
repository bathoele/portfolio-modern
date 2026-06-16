import React, { useState } from "react"
import PageDisplay from "./PageDisplay"
import NavMenu from "./NavMenu"
import ContactCard from "./ContactCard";
import GrainBackground from "./GrainBackground";

function App() {
  const [currentPage, setPage] = useState("home");

  return (
    <div className="bg-gray-800 h-screen">
      <GrainBackground />
      <div className="flex flex-row p-15 pt-20 justify-around text-gray-300">
        <NavMenu changePage={setPage} currentPage={currentPage} />
        <PageDisplay page={currentPage} setPage={setPage} />
        <ContactCard />
      </div>
    </div>
  )
}

export default App
