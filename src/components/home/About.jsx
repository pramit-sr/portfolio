import React from 'react';
import {HiOutlineArrowSmDown} from "react-icons/hi";

const Scroll = () => {
  return (
    <div className="home__scroll">
        <a href="#about" className="home__scroll-button button--flex">
            <div className="home__scroll-name">About</div>
        </a>
        <p>
        From a young age, I’ve been fascinated by computers, technology, and gaming. While gaming fueled my curiosity, it was programming and problem-solving that truly captured my interest. I enjoy solving problems on LeetCode, constantly challenging myself to improve. Beyond coding, gaming remains a favorite pastime. Over time, I’ve developed a passion for exploring new technologies, building innovative websites, and tackling complex challenges through creative projects.
        </p>
    </div>
  )
}

export default Scroll;