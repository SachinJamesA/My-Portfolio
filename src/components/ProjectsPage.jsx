// src/components/ProjectsPage.jsx

import React from 'react';
import Cards from './Cards';
import Portfolio from '../assets/Portfolio.png';
// Import other project images as needed

const ProjectsPage = () => {
  const projectJson = [
    {
      title: 'Portfolio',
      desc: 'Webelite Builders did an amazing job on our website. Their professionalism and dedication to our project were outstanding.',
      image: Portfolio,
      live: "https://rohitsingh93300-portfolio.vercel.app/",
      github: "https://github.com/rohitsingh93300/portfolio"
    },
    // Add other projects here
  ];
  const projectJson2 = [
    {
      title2: 'Portfolio',
      desc2: 'Webelite Builders did an amazing job on our website. Their professionalism and dedication to our project were outstanding.',
      image2: Portfolio,
      live2: "https://rohitsingh93300-portfolio.vercel.app/",
      github2: "https://github.com/rohitsingh93300/portfolio"
    },
  ];
  const projectJson3 = [
    {
      title3: 'Portfolio',
      desc3: 'Webelite Builders did an amazing job on our website. Their professionalism and dedication to our project were outstanding.',
      image3: Portfolio,
      live3: "https://rohitsingh93300-portfolio.vercel.app/",
      github3: "https://github.com/rohitsingh93300/portfolio"
    },
  ];

  return (
    <section className='relative bg-gray-100 dark:bg-gray-900 py-10 px-4'>
      <div className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-black border-b border-red-500 w-max pb-4 dark:text-gray-400">All Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
          {projectJson.map((item, index) => (
            <Cards key={index} item={item} />
          ))}
        </div>
      </div>
      <div className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-black border-b border-red-500 w-max pb-4 dark:text-gray-400">All Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
          {projectJson2.map((item, index) => (
            <Cards key={index} item={item} />
          ))}
        </div>
      </div>
      <div className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-black border-b border-red-500 w-max pb-4 dark:text-gray-400">All Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
          {projectJson3.map((item, index) => (
            <Cards key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
