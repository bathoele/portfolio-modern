import React, { useState } from "react"
import PageDisplay from "./PageDisplay"
import NavMenu from "./NavMenu"

function App() {
  const [currentPage, setPage] = useState("");

  return (
    <div>
      <NavMenu changePage={setPage} />
      <PageDisplay page={currentPage} setPage={setPage} />
    </div>
  )
}

export default App
