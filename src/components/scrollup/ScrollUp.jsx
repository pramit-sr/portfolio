
import React from 'react';
import './scrollup.css';
import { HiOutlineArrowSmUp } from "react-icons/hi";

const ScrollUp = () => {
    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector(".scrollup");

        if (this.scrollY >= 560) {
            scrollUp.classList.add("show-scroll");
        } else {
            scrollUp.classList.remove("show-scroll");
        }
    });

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <button
            type="button"
            className="scrollup"
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <HiOutlineArrowSmUp className="scrollup__icon" />
        </button>
    );
};

export default ScrollUp;
