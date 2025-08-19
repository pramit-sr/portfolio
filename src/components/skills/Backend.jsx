import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

const Backend = () => {
    const skills = [
        { name: "Java", level: "Basic", progress: 35, color: "#ED8B00", emoji: "☕" },
        { name: "Node.js", level: "Basic", progress: 60, color: "#339933", emoji: "🟢" },
        { name: "MySQL", level: "Basic", progress: 80, color: "#4479A1", emoji: "🐬" },
        { name: "CPP", level: "Intermediate", progress: 65, color: "#00599C", emoji: "⚙️" },
        { name: "Express.js", level: "Basic", progress: 65, color: "#000000", emoji: "🚀" },
        { name: "MongoDB", level: "Basic", progress: 45, color: "#47A248", emoji: "🍃" }
    ];

    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend Development</h3>
            <div className="skills__minimal-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill__minimal-item">
                        <div className="skill__minimal-icon" style={{ backgroundColor: skill.color }}>
                            <span className="skill__emoji">{skill.emoji}</span>
                        </div>
                        <span className="skill__minimal-name">{skill.name}</span>
                        <div className="skill__minimal-bar">
                            <div 
                                className="minimal__progress" 
                                style={{ 
                                    width: `${skill.progress}%`,
                                    backgroundColor: skill.color
                                }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Backend;