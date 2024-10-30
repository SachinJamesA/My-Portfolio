import React from 'react'
import hero from '../assets/Hero.png'
// import facebook from '../assets/facebook.png'
// import twitter from '../assets/twitter.png'
// import instagram from '../assets/instagram.png'
// import linkedin from '../assets/linkedin.png'
import reactlogo from '../assets/React.png'
import Redux from '../assets/Redux.png'
import tailwind from '../assets/Tailwind Css.png'

const Hero = () => {
  return (
    <>
      <section className='relative border-b border-gray-700 border-solid'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-4 md:px-0 lg:mt-0 mt-10">
              <h1 className="lg:text-7xl text-4xl font-bold lg:leading-snug leading-tight text-white">
                Hi There, <br /> I'm <span className='text-red-500'>Sachin</span>
              </h1>

              <p className="md:text-2xl text-xl mb-4 text-white">Full Stack Web Developer</p>
              <p className="text-base md:text-lg mb-4 text-white">
                I'm a passionate web developer with expertise in React, Next.js, and modern web technologies. I love creating beautiful and functional websites that solve real-world problems.
              </p>
              <a href="https://docs.google.com/document/d/1JjksnpuQmqmgMiFbISa0O_1jWO1n_YF4/edit?usp=drive_link&ouid=111431926135040583907&rtpof=true&sd=true" download target='_blank'>
                <button className='bg-black text-white px-4 py-2 w-max rounded-md'>
                  Download CV
                </button>
              </a>
            </div>
            <div className="md:w-1/2 relative flex justify-center items-end">
              <img
                src={hero}
                alt="Jane Doe"
                className="h-72 md:h-80 lg:h-[75vh] xl:h-[85vh] object-cover"
              />
              <img src={reactlogo} alt="" className='absolute w-8 lg:w-10 top-8 md:top-16 left-2 md:left-0 rounded-full md:hidden' />
              <img src={Redux} alt="" className='absolute w-8 lg:w-10 top-0 right-2 md:right-5 md:hidden' />
              <img src={tailwind} alt="" className='absolute w-8 lg:w-10 rounded-full right-2 bottom-24 md:bottom-36 md:hidden' />
            </div>
          </div>
        </div>
        {/* <div className='absolute top-32 md:top-40 right-4 md:right-10 hidden md:flex bg-gray-200 p-2 md:p-4 flex-col gap-4 md:gap-6 rounded-full'>
          <img src={facebook} alt="Facebook" className='w-8 md:w-10 lg:w-12' />
          <img src={instagram} alt="Instagram" className='w-8 md:w-10 lg:w-12' />
          <img src={twitter} alt="Twitter" className='w-8 md:w-10 lg:w-12' />
          <img src={linkedin} alt="LinkedIn" className='w-8 md:w-10 lg:w-12' />
        </div> */}
      </section>
    </>
  )
}

export default Hero
