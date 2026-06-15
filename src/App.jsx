import React, { useState } from "react"
import PageDisplay from "./PageDisplay"
import NavMenu from "./NavMenu"
import ContactCard from "./ContactCard";

function App() {
  const [currentPage, setPage] = useState("home");

  return (
    <div className="flex flex-row p-15 pt-12 justify-around">
      <NavMenu changePage={setPage} currentPage={currentPage} />
      <PageDisplay page={currentPage} setPage={setPage} />
      <ContactCard />
    </div>
  )
}

export default App
