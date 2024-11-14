import React from 'react';
import Cards from './Cards';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import rentalWebsite from '../assets/Rental-Website.png';

const TopProjects = () => {
    const navigate = useNavigate();
    const topProjectJson = [
        {
            title: 'Rental Website',
            desc: 'A website where you can rent your house all in one place in various cities and countries. This was my final year college project which got a score of 131 out of 150.',
            image: rentalWebsite,
            live: "https://house-rental-two.vercel.app/",
            github: "https://github.com/SachinJamesA/House-Rental"
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
                    My Top Projects
                </h2>
                <p className='text-xl mb-4 dark:text-gray-400'>In this section these are the projects i built using MERN stack.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
                    {topProjectJson.map((items, index) => (
                        <Cards key={index} item={items} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopProjects;
