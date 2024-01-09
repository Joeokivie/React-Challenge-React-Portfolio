import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./pages/About";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  );
}

export default App;