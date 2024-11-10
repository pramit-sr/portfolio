import React from 'react';
import { HiOutlineArrowSmRight } from "react-icons/hi";

const ProjectItems = ({ item }) => {
  return (
    <div className="project__card" key={item.id}>
      <img className="project__img" src={item.image} alt={item.title} />
      <h3 className="project__title">{item.title}</h3>
      <p className="project__description">{item.description}</p>
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="project__button">
        Website <HiOutlineArrowSmRight className="project__button-icon" />
      </a>
    </div>
  );
};

export default ProjectItems;
