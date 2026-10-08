import React from 'react';
import Projects from './Projects';
import "./projects.css";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
            <div className="portfolio__inner container">
                <h2 className="portfolio__title">Projects</h2>
                <p className="portfolio__subtitle">Selected work</p>
                <Projects />
            </div>
    </section>
  );
}

export default Portfolio;