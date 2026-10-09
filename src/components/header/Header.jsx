import React, { useEffect, useState } from "react";
import './header.css';
import { HiOutlineHome, HiOutlineBadgeCheck, HiOutlinePhotograph, HiOutlineMail, HiX, HiOutlineMenu } from "react-icons/hi";
import { FiMoon, FiSun } from 'react-icons/fi';


const Header = () => {
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if(this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });
   
    const[Toggle, showMenu] = useState(false);
    const[activeNav, setActiveNav] = useState("#home");
    const [isDark, setIsDark] = useState(() => {
        const savedTheme = window.localStorage.getItem('portfolio-theme');
        return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        const theme = isDark ? 'dark' : 'light';
        document.documentElement.dataset.theme = theme;
        window.localStorage.setItem('portfolio-theme', theme);
    }, [isDark]);

    return(
        <header className="header">
            <nav className="nav container">
                <a href="#home" className="nav__logo" aria-label="Pramit Sarkar, home">
                    <span className="nav__logo-name">Pramit Sarkar</span>
                </a>
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={() => setActiveNav("#home")} 
                            className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineHome className="nav__icon"/>Home
                            </a>
                        </li>
        
                        <li className="nav__item">
                            <a href="#skills" onClick={() => setActiveNav("#skills")} 
                            className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineBadgeCheck className="nav__icon"/>Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} 
                            className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlinePhotograph className="nav__icon"/>Projects
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" onClick={() => setActiveNav("#contact")} 
                            className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineMail className="nav__icon"/>Contact
                            </a>
                        </li>
                    </ul>
                    <HiX className="nav__close" onClick={() => showMenu(!Toggle)} />
                </div>
                <button
                    type="button"
                    className="nav__theme"
                    onClick={() => setIsDark(!isDark)}
                    aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
                    aria-pressed={isDark}
                    title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
                >
                    {isDark ? <FiSun /> : <FiMoon />}
                </button>
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <HiOutlineMenu />
                </div>
            </nav>
        </header>
    )
}

export default Header