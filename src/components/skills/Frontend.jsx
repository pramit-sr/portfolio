import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

const Frontend = () => {
    const skills = [
        { name: "HTML", level: "Intermediate", progress: 75, color: "#E34F26", emoji: "🌐" },
        { name: "CSS", level: "Intermediate", progress: 70, color: "#1572B6", emoji: "🎨" },
        { name: "Next.js", level: "Intermediate", progress: 65, color: "#000000", emoji: "⚡" },
        { name: "JavaScript", level: "Intermediate", progress: 80, color: "#F7DF1E", emoji: "💛" },
        { name: "React", level: "Basic", progress: 60, color: "#61DAFB", emoji: "⚛️" },
        { name: "TypeScript", level: "Basic", progress: 55, color: "#3178C6", emoji: "📘" }
    ];

    return (
        <div className="skills__content">
            <h3 className="skills__title">Frontend Development</h3>
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

export default Frontend;