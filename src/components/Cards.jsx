import React from 'react';
import Github from '../assets/Github.png';
import { Link } from 'react-router-dom';

const Cards = ({ item }) => {
    return (
        <div className='border border-gray-400 rounded-lg w-[350px] lg:w-[400px] h-[30rem] bg-red-50 dark:bg-gray-600 flex flex-col justify-between'>
            <img src={item.image} alt="" className='rounded-t-lg h-[200px] object-cover' />
            <div className='p-4 flex-1 flex flex-col justify-between'>
                <h1 className='font-semibold text-2xl mb-2'>{item.title}</h1>
                <p className='flex-1 text-lg'>{item.desc}</p>
                <div className='flex gap-3 mt-4'>
                    <button className='bg-red-500 text-white px-3 py-2 rounded-md'>
                        <Link to={item.live} target='_blank'>Live Preview</Link>
                    </button>
                    <button className='bg-black text-white px-3 py-2 rounded-md'>
                        <Link to={item.github} target='_blank' className='flex gap-1'>
                            <img src={Github} alt="GitHub icon" className='w-6' />
                            Github Link
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cards;
