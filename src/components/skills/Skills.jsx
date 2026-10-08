import React from 'react';
import "./skills.css";

const techSkills = [
  "HTML",
  "CSS",
  "Next.js",
  "JavaScript",
  "React",
  "TypeScript",
  "Java",
  "Node.js",
  "MySQL",
  "C++",
  "Express.js",
  "MongoDB",
];

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <div className="skills__container container">
            <h2 className="skills__title">Tech Skills</h2>
            <ul className="skills__list">
                {techSkills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
        </div>
    </section>
  );
}

export default Skills;