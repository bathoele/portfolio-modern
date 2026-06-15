import React, { useState } from "react"
import PageDisplay from "./PageDisplay"
import NavMenu from "./NavMenu"

function App() {
  const [currentPage, setPage] = useState("home");

  return (
    <div className="flex flex-row p-15 pt-20">
      <NavMenu changePage={setPage} currentPage={currentPage} />
      <PageDisplay page={currentPage} setPage={setPage} />
    </div>
  )
}

export default App
