import React, { useState } from 'react';
import Navigation from "./Nav.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Portfolio from "./Portfolio.jsx";
import Resume from "./Resume.jsx";

function Header() {
  const [currentPage, handlePageChange] = useState("About");

  
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <a
            className="navbar-item"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/Joeokivie"
          >
            <span className="content is-large">Joseph Okivie</span>
          </a>
        </div>
      </nav>
      {}
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <header>
        {}
        <h1>{JosephOkivie}</h1>
      </header>
      {}
      <main>
        <div>{renderPage()}</div>
      </main>
    </div>
  );
}

export default Header;
