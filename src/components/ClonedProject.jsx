import React from 'react';
import { useState } from 'react';
import Cards from './Cards';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Spotify from '../assets/Spotify.png';

const TopProjects = () => {
  const navigate = useNavigate();

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
    <div className="relative w-full bg-gray-100 dark:bg-gray-900 py-16 px-4">
      <div className="mb-16 max-w-7xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600 font-semibold space-x-2"
        >
          <FaArrowLeft className="mr-1" />
          <span>Back</span>
        </button>
        <h2 className="text-3xl font-bold mb-8 text-black border-b border-red-500 w-max pb-4 dark:text-gray-400">
          Cloned Projects
        </h2>
        <p className='text-xl mb-4 dark:text-gray-400'>These are the cloned projects.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
          {clonedProjectJson.map((items, index) => (
            <Cards key={index} item={items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProjects;
