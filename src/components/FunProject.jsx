import React from 'react';
import Cards from './Cards';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import sanaClg from '../assets/sanaClg.png';
import travel from '../assets/travel.png';

const TopProjects = () => {
    const navigate = useNavigate();

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
                My Fun Projects
                </h2>
                <p className='text-xl mb-4 dark:text-gray-400'>In this section these are the projects i built using many different technologies.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
                    {funProjectJson.map((items, index) => (
                        <Cards key={index} item={items} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopProjects;
