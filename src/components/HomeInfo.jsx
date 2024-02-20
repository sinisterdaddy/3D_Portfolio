import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import React, { useState, useEffect } from "react";


const HomeInfo = ({ currentStage }) => {
    console.log('Current stage:', currentStage);

    if (currentStage === 1)
        return (
            <h1 className="text-white mx-5">
                Hello, I'm
                <span className="font-semibold mx-2 text-white">Radha Krishna</span>
                👋
                <br />
                a CSE student from India
            </h1>
        );

    if (currentStage === 2) {
        return (
            <div>
                <h1 className="text-white mx-5">
                    <p className="font-medium sm:text-xl text-center">
                        Worked with many companies <br /> and picked up many skills along the way
                    </p>
                </h1>
                <Link to="/about" className="neo-brutalism-white neo-btn">
                    More Info
                    <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
                </Link>
            </div>
        );
    }

    if (currentStage === 3) {
        return (
            <div>
                <p className="font-medium text-center sm:text-xl text-white mx-5">
                    Participated in Numerous Hackathons over the years. <br /> Curious?
                </p>

                <Link to="/projects" className="neo-brutalism-white neo-btn">
                    PORTFOLIO
                    <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
                </Link>
            </div>
        );
    }

    if (currentStage === 4) {
        return (
            <div>
                <p className="font-medium sm:text-xl text-center text-white mx-5">
                    Need a project done or looking for a dev? <br /> I'm just a few keystrokes away
                </p>

                <Link to="/contact" className="neo-brutalism-white neo-btn">
                    Let's talk
                    <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
                </Link>
            </div>
        );
    }
    return null;
};

export default HomeInfo;