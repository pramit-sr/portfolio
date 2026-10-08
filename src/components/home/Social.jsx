import React from "react";
import CV from "../../assets/CV.pdf";
const Social = () => {
    return (
        <div className="home__social">
            <span>Links:</span>
            <a href="https://www.linkedin.com/in/pramit-sarkar-0b2884251/" target="_blank" rel="noreferrer">[LinkedIn]</a>
            <a href="https://github.com/pramit-sr" target="_blank" rel="noreferrer">[GitHub]</a>
            <a href="https://www.instagram.com/pramit.sr/" target="_blank" rel="noreferrer">[Instagram]</a>
            <a href={CV} download>[Resume]</a>
        </div> 
    ); 
}

export default Social;