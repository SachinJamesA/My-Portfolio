import React from 'react'
import Html from '../assets/Html.png'
import Css from '../assets/CSS.png'
import JS from '../assets/JS.png'
import ReactL from '../assets/React.png'
import Redux from '../assets/Redux.png'
import Tailwind from '../assets/Tailwind Css.png'
import Bootstrap from '../assets/Bootstrap.png'
import Nodejs from "/src/assets/Nodejs.png";
import Mongodb from '../assets/mongodb.svg'
import Express from '../assets/Express.png'
import MernStack from '../assets/mernstack.png'
import Skills from '../assets/skills.png'
import NextJs from '../assets/NextJs.png'

const About = () => {
    return (
        <div className='relative' id="about">
            <div className="bg-gray-100 dark:bg-gray-900 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">About Me</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-400 sm:text-4xl">
                            Hi, I'm Sachin James Ajagarni
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
                            A Full-Stack Developer with expertise in web development, Frontend development, SEO, and the MERN stack.
                        </p>
                    </div>

                    <div className="mt-10">
                        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                            <div className='rounded-lg md:p-7 py-7  flex flex-col gap-8 items-center shadow-lg'>
                                <div className='flex items-center justify-center flex-wrap gap-3'>
                                    <img src={Skills} alt="" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-900">My Journey</h3>
                                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                                    I started my journey in web development with a passion for creating intuitive and scalable applications. With proficiency in the MERN stack (MongoDB, Express.js, React, and Node.js), I have built the full-stack projects which you can see in project's section . My projects demonstrate my ability to integrate powerful backend solutions with sleek, user-friendly frontend designs.
                                </p>
                                <img src={MernStack} alt="" className='p-2 rounded-lg w-52 mt-4' />
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-200">More About Me</h3>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                            Apart from coding, I am passionate about learning new technologies and keeping myself up-to-date with the latest trends in web development. I also love to play sports especially Cricket & Volleyball.
                        </p>
                    </div>
                </div>

                <div className="border border-gray-400 rounded-lg md:p-7 p-4 flex flex-col gap-6 md:gap-8 items-center shadow-lg mt-6">
                    <h3 className="text-xl md:text-2xl font-semibold text-red-600 text-center">Skills & Expertise</h3>
                    <div className="flex items-center justify-center flex-wrap gap-3">
                        <div className="p-4 md:p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-lg flex flex-wrap gap-3 md:gap-4 justify-center">
                            <div className="border border-purple-300 flex items-center gap-2 w-full sm:w-max px-2 md:px-3 py-1 md:py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out">
                                <img src={Html} alt="HTML" className="w-8 md:w-10" />
                                <span className="font-semibold text-purple-700 text-sm md:text-base">HTML</span>
                            </div>
                            <div className="border border-purple-300 flex items-center gap-2 w-full sm:w-max px-2 md:px-3 py-1 md:py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out">
                                <img src={Css} alt="CSS" className="w-8 md:w-10" />
                                <span className="font-semibold text-purple-700 text-sm md:text-base">CSS</span>
                            </div>
                            <div className="border border-purple-300 flex items-center gap-2 w-full sm:w-max px-2 md:px-3 py-1 md:py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out">
                                <img src={JS} alt="JavaScript" className="w-8 md:w-10" />
                                <span className="font-semibold text-purple-700 text-sm md:text-base">JavaScript</span>
                            </div>
                            <div className="border border-purple-300 flex items-center gap-2 w-full sm:w-max px-2 md:px-3 py-1 md:py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out">
                                <img src={ReactL} alt="React" className="w-8 md:w-10 rounded-full" />
                                <span className="font-semibold text-purple-700 text-sm md:text-base">React</span>
                            </div>
                            <div className="border border-purple-300 flex items-center gap-2 w-full sm:w-max px-2 md:px-3 py-1 md:py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out">
                                <img src={Redux} alt="Redux" className="w-8 md:w-10" />
                                <span className="font-semibold text-purple-700 text-sm md:text-base">Redux</span>
                            </div>
                            <div className="border border-purple-300 flex items-center gap-2 w-full sm:w-max px-2 md:px-3 py-1 md:py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out">
                                <img src={Tailwind} alt="Tailwind" className="w-8 md:w-10 rounded-full" />
                                <span className="font-semibold text-purple-700 text-sm md:text-base">Tailwind</span>
                            </div>
                            <div className="border border-purple-300 flex items-center gap-2 w-full sm:w-max px-2 md:px-3 py-1 md:py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out">
                                <img src={Bootstrap} alt="Bootstrap" className="w-8 md:w-10" />
                                <span className="font-semibold text-purple-700 text-sm md:text-base">Bootstrap</span>
                            </div>
                            <div className="border border-purple-300 flex items-center gap-2 w-full sm:w-max px-2 md:px-3 py-1 md:py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out">
                                <img src={Nodejs} alt="Node.js" className="w-8 md:w-10" />
                                <span className="font-semibold text-purple-700 text-sm md:text-base">Node.js</span>
                            </div>
                            <div className="border border-purple-300 flex items-center gap-2 w-full sm:w-max px-2 md:px-3 py-1 md:py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out">
                                <img src={Mongodb} alt="MongoDB" className="w-8 md:w-10" />
                                <span className="font-semibold text-purple-700 text-sm md:text-base">MongoDB</span>
                            </div>
                            <div className="border border-purple-300 flex items-center gap-2 w-full sm:w-max px-2 md:px-3 py-1 md:py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out">
                                <img src={Express} alt="Express" className="w-8 md:w-10" />
                                <span className="font-semibold text-purple-700 text-sm md:text-base">Express.js</span>
                            </div>
                            <div className="border border-purple-300 flex items-center gap-2 w-full sm:w-max px-2 md:px-3 py-1 md:py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out">
                                <img src={NextJs} alt="Next.js" className="w-8 md:w-10" />
                                <span className="font-semibold text-purple-700 text-sm md:text-base">Next.js</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
