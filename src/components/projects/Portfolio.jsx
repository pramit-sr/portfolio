import React from 'react';
import Projects from './Projects';
import "./projects.css";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
        <div className="section__title">
        <div className="flex justify-center items-center w-full">
          <h2 
            className="inline-block bg-black text-white px-6 py-3 rounded-xl text-4xl font-bold m-4"
            style={{ display: "inline-block", backgroundColor: "#000", color: "#fff", borderRadius: "8px" , paddingLeft:"10px" , paddingRight:"10px" }}
          >
            My Projects
          </h2>
        </div>
        </div>
        <span className="section__subtitle" >
        <h2 
          className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-center mx-auto !text-7xl"
          style={{ fontSize: "4rem", lineHeight: "1.2" }}
        >
          Check out my latest work
        </h2>
        </span>
        <Projects />
    </section>
  );
}

export default Portfolio;