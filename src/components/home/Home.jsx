import React from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import About from "./About";

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Data />
                    <Social />
                    <div className="home__img" role="img" aria-label="Pramit Sarkar" />
                </div>
                <About />
            </div> 
        </section>
    )
}

export default Home;