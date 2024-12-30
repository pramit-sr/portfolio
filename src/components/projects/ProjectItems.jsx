import React from 'react';
import { HiOutlineArrowSmRight } from "react-icons/hi";

const ProjectItems = ({ item }) => {
  return (
    <div className="project__card" key={item.id}>
      <img className="project__img" src={item.image} alt={item.title} />
      <h3 className="project__title">{item.title}</h3>
      <p className="project__description">{item.description}</p>
     
    <div class="button-container">
        <button class="tech-button">React</button>
        <button class="tech-button">Node.js</button>
        <button class="tech-button">TypeScript</button>
        <button class="tech-button">Vercel</button>
        <button class="tech-button">DSA</button>
        <button class="tech-button">HTML</button>
        <button class="tech-button">CSS</button>
        <button class="tech-button">TailwindCSS</button>
    </div>
      <div className="project__button">
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          <button>Website</button>
        </a>
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          <button>Repository</button>
        </a>
      </div>

    </div>
  );
};

export default ProjectItems;
