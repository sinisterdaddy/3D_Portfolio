// Projects.js

import React from 'react';
import { Link } from "react-router-dom";
import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import '../Projects.css';

const Projects = () => {
    return (
        <section className='max-container'>
            <h1 className='head-text'>
                My{" "}
                <span className='blue-gradient_text drop-shadow font-semibold'>
                    Projects
                </span>
            </h1>

            <p className='text-gray-900 mt-2 leading-relaxed'>
                I've embarked on numerous projects throughout the years, but these are
                the ones I hold closest to my heart. Many of them are open-source, so if
                you come across something that piques your interest, feel free to
                explore the codebase and contribute your ideas for further enhancements.
                Your collaboration is highly valued!
            </p>
            
            <div className='flex flex-wrap my-20 gap-16'>
                {projects.map((project) => (
                    <div className='lg:w-[400px] w-full' key={project.name}>
                        <div className='block-container'>
                            <div className={`btn-back rounded-xl ${project.theme}`} />
                            <div className='btn-front rounded-xl'>
                                <img
                                    src={project.iconUrl}
                                    alt='project-icon'
                                    className='w-1/2 h-1/2 object-contain'
                                />
                            </div>
                        </div>

                        <div className='mt-5 flex flex-col'>
                            <h4 className='text-2xl font-poppins font-semibold'>
                                {project.name}
                            </h4>
                            <p className='mt-2 text-gray-900'>{project.description}</p>
                            <div className='mt-5 flex items-center gap-2 font-poppins'>
                                <Link
                                    to={project.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='font-semibold text-blue-600'
                                >
                                    Live Link
                                </Link>
                                <img
                                    src={arrow}
                                    alt='arrow'
                                    className='w-4 h-4 object-contain'
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <a href="https://github.com/sinisterdaddy" className='text-blue-600 mt-2 leading-relaxed font-bold underline hover:text-blue-800'>
        SEE ALL PROJECTS.
    </a>
            <hr className='border-gray-900' />

            <CTA />
        </section>
    );
};

export default Projects;
