import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Cards from './Cards';
import Portfolio from '../assets/Portfolio.png';
import rentalWebsite from '../assets/Rental-Website.png';
import Spotify from '../assets/Spotify.png';
import sanaClg from '../assets/sanaClg.png';
import wedding from '../assets/wedding.png';
import travel from '../assets/travel.png';
import foodWebsite from '../assets/food-website.png';
import tikTakToe from '../assets/tikTakToe.png';
import analogClock from '../assets/analogClock.png';
import lamborghiniAnimation from '../assets/lamborghiniAnimation.png';
import actionGame from '../assets/actionGame.png';

const Projects = () => {
  const [displayLimit, setDisplayLimit] = useState(6); // Limit to 6 cards initially
  const navigate = useNavigate();

  const topProjectJson = [
    {
      title: 'Rental Website',
      desc: 'A website where you can rent your house all in one place in a various cities and countries. This was my final year college project which got score of 131 out of 150.',
      image: rentalWebsite,
      live: "https://house-rental-two.vercel.app/",
      github: "https://github.com/SachinJamesA/House-Rental"
    },
  ];

  const funProjectJson = [
    {
      title: 'Sana Shaheen Group Of Institution',
      desc: 'Sana Shaheen Independent PU College in association with the renowned Shaheen Institutions, Bidar and approved by the Government of Karnataka. This was the project i built in my internship (Frontend Only).',
      image: sanaClg,
      live: "https://sanaclgproject.vercel.app/",
      github: "https://github.com/SachinJamesA/sanaclgproject"
    },
    {
      title: 'Travel Website',
      desc: 'This is travel guide for the traveler who gets to know about the place they want to visit i built this in my internship this was collaborative website built with four members team.',
      image: travel,
      live: "https://travel-website-chi-two.vercel.app/",
      github: "https://github.com/SachinJamesA/Travel-website"
    },
  ];

  const guidedProjectJson = [
    {
      title: 'Wedding Project',
      desc: 'This is the project i built for my relative wedding to guide the once who are coming to the wedding. (from github)',
      image: wedding,
      live: "https://cletan-weds-usha.vercel.app/",
      github: "https://github.com/SachinJamesA/Wedding"
    },
    {
      title: 'Food website',
      desc: 'This is the project i built using html, css and javascript from youtube when i was learnig the development.',
      image: foodWebsite,
      live: "https://food-website-beta-seven.vercel.app/",
      github: "https://github.com/SachinJamesA/food-website"
    },
    {
      title: "Tik Tak Toe",
      desc: "This is the project i built using html, css and javascript from youtube it's a simple game.",
      image: tikTakToe,
      live: "https://tik-tak-toe-three-kappa.vercel.app/",
      github: "https://github.com/SachinJamesA/tik-tak-toe"
    },
    {
      title: "Analog Clock",
      desc: "This is the project i built using html, css and javascript from youtube it's a simple Analog Clock.",
      image: analogClock,
      live: "https://analog-clock-amber-ten.vercel.app/",
      github: "https://github.com/SachinJamesA/Analog-clock"
    },
    {
      title: "Moving Lamborghini Animation",
      desc: "This is the project i built using html, css and javascript from youtube it's a simple moving car animation.",
      image: lamborghiniAnimation,
      live: "https://caranimated.vercel.app/",
      github: "https://github.com/SachinJamesA/moving-car-animation"
    },
    {
      title: "iDragon - action game",
      desc: "This is the project i built using html, css and javascript from youtube it's a simple action dodging game.",
      image: actionGame,
      live: "https://action-game-ten.vercel.app/",
      github: "https://github.com/SachinJamesA/Action-game"
    },
  ];

  const clonedProjectJson = [
    {
      title: 'Spotify Clone',
      desc: 'Webelite Builders did an amazing job on our website. Their professionalism and dedication to our .',
      image: Spotify,
      live: "https://spotify-clone-alpha-red.vercel.app/.well-known/vercel/toolbar?path=%2F%3FvercelToolbarCode%3DeVPX5gKCS89f0ev",
      github: "https://github.com/SachinJamesA/Spotify-clone"
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
          {topProjectJson.slice(0, displayLimit).map((items, index) => (
            <Cards key={index} item={items} />
          ))}
        </div>
        {/* View More button */}
        {displayLimit === 6 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => navigate('/topprojects')}
              className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              View More
            </button>
          </div>
        )}
      </div>

      <div className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-black border-b border-red-500 w-max pb-4 dark:text-gray-400">
          My Fun Projects
        </h2>
        <p className='text-xl mb-4 dark:text-gray-400'>In this section these are the projects i built using many different technologies.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
          {funProjectJson.slice(0, displayLimit).map((items, index) => (
            <Cards key={index} item={items} />
          ))}
        </div>
        {/* View More button */}
        {displayLimit === 6 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => navigate('/funprojects')}
              className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              View More
            </button>
          </div>
        )}
      </div>

      <div className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-black border-b border-red-500 w-max pb-4 dark:text-gray-400">
          Guided Projects
        </h2>
        <p className='text-xl mb-4 dark:text-gray-400'>In this section these are the projects i built with the help of youtube while i was learning the development. One thing is clear that it is not easy to simply copy and paste the code from youtube if you don't know the JavaScript concrpt well.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
        {guidedProjectJson.slice(0, displayLimit).map((items, index) => (
          <Cards key={index} item={items} />
        ))}
        </div>
        {/* View More button */}
        {displayLimit === 6 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => navigate('/guidedProjects')}
              className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              View More
            </button>
          </div>
        )}
      </div>

      <div className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-black border-b border-red-500 w-max pb-4 dark:text-gray-400">
          Cloned Projects
        </h2>
        <p className='text-xl mb-4 dark:text-gray-400'>These are the cloned projects.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
          {clonedProjectJson.slice(0, displayLimit).map((items, index) => (
            <Cards key={index} item={items} />
          ))}
        </div>
        {/* View More button */}
        {displayLimit === 6 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => navigate('/clonedprojects')}
              className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
