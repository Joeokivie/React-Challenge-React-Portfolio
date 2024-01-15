import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>My Portfolio for full-stack web development</strong> - a React
          site by{"Joseph Okivie "}
          <a
            href="https://github.com/Joeokivie?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
         
          <a
            href="https://www.linkedin.com/in/joseph-okivie-958799243/"
            target="_blank"
            rel="noreferrer"
            className="linkedin"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
