import React from 'react';
import Project from '../components/Project';

function Portfolio() {
    const projects = [
      {
        name: 'Note Taker',
        description: 'HTML/JS/CSS',
        link: 'https://fierce-eyrie-23256-871d02cb655a.herokuapp.com/',
        repo: 'https://github.com/Joeokivie/Express.js-Challenge-Note-Taker',
        image: 'notetaker',
      },
      {
        name: 'Music App',
        description: 'Front End',
        link: 'https://smindre1.github.io/Project-One-Front-End-Dev/',
        repo: 'https://github.com/smindre1/Project-One-Front-End-Dev',
        image: 'musicapp',
      },
      {
        name: 'Text-editor',
        description: 'JS',
        link: 'https://enigmatic-anchorage-52034-687f3412666f.herokuapp.com/',
        repo: 'https://github.com/Joeokivie/Text-editor',
        image: 'texteditor',
      },
    ];
  
    return (
      <div className="portfolio-container">
        <div className="d-flex justify-content-center">
          {projects.map((project) => (
            <Project project={project} key={`project-${project.name}`} />
          ))}
        </div>
      </div>
    );
  }
  
  export default Portfolio;