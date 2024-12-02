import React from 'react';
import { useState } from 'react';
import Cards from './Cards';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import wedding from '../assets/wedding.png';
import foodWebsite from '../assets/food-website.png';
import tikTakToe from '../assets/tikTakToe.png';
import analogClock from '../assets/analogClock.png';
import lamborghiniAnimation from '../assets/lamborghiniAnimation.png';
import actionGame from '../assets/actionGame.png';
import snakeGame from '../assets/snakeGame.png';
import simpleDashboard from '../assets/simple-dashboard.png';
import textEditor from '../assets/texteditor.png';
import passwordGenerator from '../assets/passwordGenerator.png';
import countdownTimer from '../assets/coutdownTimer.png';
import quizApp from '../assets/quizApp.png';
import receipeApp from '../assets/receipeApp.png';
// import simplenotesApp from '../assets/simplenotesApp.png';
import simpleTodoApp from '../assets/simpleTodoApp.png';

const TopProjects = () => {
  const navigate = useNavigate();

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
    {
      title: "Snake Game",
      desc: "This is the project i built using html, css and javascript from youtube it's a simple snake game.",
      image: snakeGame,
      live: "https://snake-game-livid-eta.vercel.app/",
      github: "https://github.com/SachinJamesA/snake-game"
    },
    {
      title: "Simple Dashboard",
      desc: "This is the project i built using html, css and javascript from youtube it's a simple dashboard template which has dark light toggle switch.",
      image: simpleDashboard,
      live: "https://simple-dashboard-theta.vercel.app/",
      github: "https://github.com/SachinJamesA/simple-dashboard"
    },
    {
      title: "Online text editor",
      desc: "This is the project i built using html, css and javascript from youtube it's online text editor",
      image: textEditor,
      live: "https://online-text-editor-two.vercel.app/",
      github: "https://github.com/SachinJamesA/online-text-editor"
    },
    {
      title: "Password Generator",
      desc: "This is the project i built using html, css and javascript from youtube it's a simple password generator.",
      image: passwordGenerator,
      live: "https://password-generator-sigma-jade-51.vercel.app/",
      github: "https://github.com/SachinJamesA/password-generator"
    },
    {
      title: "Countdown Timer",
      desc: "This is the project i built using html, css and javascript from youtube it's a simple countdown timer.",
      image: countdownTimer,
      live: "https://countdown-timer-nine-delta.vercel.app/",
      github: "https://github.com/SachinJamesA/countdown-timer"
    },
    {
      title: "Quiz application",
      desc: "This is the project i built using html, css and javascript from youtube it's a simple hardcoded quiz appliaction.",
      image: quizApp,
      live: "https://quiz-app-nu-virid-32.vercel.app/",
      github: "https://github.com/SachinJamesA/quizApp"
    },
    {
      title: "Receipe application",
      desc: "This is the project i built using html, css and javascript from youtube it's a simple Receipe which needs more features for now you can add the meals to your favourite section.",
      image: receipeApp,
      live: "https://recipe-app-blue-three.vercel.app/",
      github: "https://github.com/SachinJamesA/recipe-app"
    },
    // {
    //   title: "Simple notes application",
    //   desc: "This is the project i built using html, css and javascript from youtube it's a simple note taking application which uses local storage to store your notes.",
    //   image: simplenotesApp,
    //   live: "https://simple-notes-app-xi.vercel.app/",
    //   github: "https://github.com/SachinJamesA/simple-notes-app"
    // },
    {
      title: "Simple todo application",
      desc: "This is the project i built using html, css and javascript from youtube it's a simple todo  application which uses local storage to store your todos.",
      image: simpleTodoApp,
      live: "https://simple-todo-zeta-six.vercel.app/",
      github: "https://github.com/SachinJamesA/Simple-todo"
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
          Guided Projects
        </h2>
        <p className='text-xl mb-4 dark:text-gray-400'>In this section these are the projects i built with the help of youtube while i was learning the development. One thing is clear that it is not easy to simply copy and paste the code from youtube if you don't know the JavaScript concrpt well.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
          {guidedProjectJson.map((items, index) => (
            <Cards key={index} item={items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProjects;
