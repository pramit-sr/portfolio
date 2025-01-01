import React from 'react';
import Projects from './Projects';
import "./projects.css";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
        <div className="section__title">
        <div className="flex justify-center items-center w-full">
        <h2 className="project-title">My Projects</h2>
        </div>
        </div>
        <span className="section__subtitle">
          <h2>
            Check out my latest work
          </h2>
        </span>
        <Projects />
    </section>
  );
}

export default Portfolio;