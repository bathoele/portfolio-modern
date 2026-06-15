import React, { useState } from "react"
import PageDisplay from "./PageDisplay"
import NavMenu from "./NavMenu"
import ContactCard from "./ContactCard";
import GrainBackground from "./GrainBackground";

function App() {
  const [currentPage, setPage] = useState("home");

  return (
    <div className="flex flex-row p-15 pt-12 justify-around bg-gray-800 text-gray-300 h-screen">
      <GrainBackground />
      <NavMenu changePage={setPage} currentPage={currentPage} />
      <PageDisplay page={currentPage} setPage={setPage} />
      <ContactCard />
    </div>
  )
}

export default App
