import React from 'react';
import { HiOutlineArrowSmRight } from "react-icons/hi";

const ProjectItems = ({ item }) => {
  return (
    <div className="project__card" key={item.id}>
      <img className="project__img" src={item.image} alt={item.title} />
      <h3 className="project__title">{item.title}</h3>
      <p className="project__description">{item.description}</p>
     
    <div className="button-container">
        {item.technologies && item.technologies.map((tech, index) => (
          <button key={index} className="tech-button">{tech}</button>
        ))}
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
