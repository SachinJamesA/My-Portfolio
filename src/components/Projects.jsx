import React from 'react';
import { Link } from 'react-router-dom';
import Cards from './Cards';
import Portfolio from '../assets/Portfolio.png';

const Projects = () => {
  const projectJson = [
    {
      title: 'Portfolio',
      desc: 'Webelite Builders did an amazing job on our website. Their professionalism and dedication to our project were outstanding.',
      image: Portfolio,
      live: "https://rohitsingh93300-portfolio.vercel.app/",
      github: "https://github.com/rohitsingh93300/portfolio"
    },
  ];
  const projectJson2 = [
    {
      title: 'Portfolio',
      desc: 'Webelite Builders did an amazing job on our website. Their professionalism and dedication to our project were .',
      image: Portfolio,
      live: "https://rohitsingh93300-portfolio.vercel.app/",
      github: "https://github.com/rohitsingh93300/portfolio"
    },
  ];
  const projectJson3 = [
    {
      title: 'Portfolio',
      desc: 'Webelite Builders did an amazing job on our website. Their professionalism and dedication to our .',
      image: Portfolio,
      live: "https://rohitsingh93300-portfolio.vercel.app/",
      github: "https://github.com/rohitsingh93300/portfolio"
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-[50rem] bg-gray-100 dark:bg-gray-900 py-10 px-4 border-b border-t border-gray-700 border-solid"
    >
      <div className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-black border-b border-red-500 w-max pb-4 dark:text-gray-400">
          My Top Projects
        </h2>
        <p className='text-xl mb-4 dark:text-gray-400'>In this section these are the projects i built using MERN stack.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
          {projectJson.map((items, index) => (
            <Cards key={index} item={items} />
          ))}
        </div>
      </div>

      <div className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-black border-b border-red-500 w-max pb-4 dark:text-gray-400">
          My Fun Projects
        </h2>
        <p className='text-xl mb-4 dark:text-gray-400'>In this section these are the projects i built using many different technologies.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
          {projectJson2.map((items, index) => (
            <Cards key={index} item={items} />
          ))}
        </div>
      </div>

      <div className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-black border-b border-red-500 w-max pb-4 dark:text-gray-400">
          Guided Projects
        </h2>
        <p className='text-xl mb-4 dark:text-gray-400'>In this section these are the projects i built with the help of youtube while i was learning the development.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
          {projectJson3.map((items, index) => (
            <Cards key={index} item={items} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
