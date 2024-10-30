import React from 'react';
import Cards from './Cards'
import Portfolio from '../assets/Portfolio.png'
// import SpicyBites from '../assets/SpicyBites.png'
// import Youtube from '../assets/Youtube.png'
// import Webelite from '../assets/Webelite.png'
// import Supercar from '../assets/Supercar.png'

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

  return (
    <section id="projects" className='relative bg-gray-100  dark:bg-gray-900 py-10 px-4 border-b border-t border-gray-700 border-solid'>
      <div id="projects" className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-black border-b border-red-500 w-max pb-4 dark:text-gray-400">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">           
              {projectJson.map((items) => {
                return <Cards item={items} />              
              })}     
        </div>
      </div>

    </section>
  )
}

export default Projects
