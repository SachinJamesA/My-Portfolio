import { Mail } from 'lucide-react'
import Lottie from 'lottie-react'
import contact from '../assets/Contact.json'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_cepvpxi', 'template_tmx7avs', form.current, {
        publicKey: 'A7sUk7qMgzVstlHy4',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contact" className='z-50 bg-gray-100 relative py-10 px-5 md:px-0 dark:bg-gray-900 border-b border-gray-700 border-solid'>
      <div className="mb-16 max-w-7xl mx-auto ">
        <div className="flex flex-col md:flex-row justify-between items-center ">
          <div className="md:w-1/2 mb-8 ml-2 md:mb-0 ">
            <h2 className="text-3xl font-bold mb-3 text-red-500">Get in Touch</h2>
            <p className="mb-4 text-black dark:text-gray-400">I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/60 hover:text-foreground/80">
              <img src={facebook} alt="" className="h-6 w-6"/>
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground/80">
              <img src={instagram} alt="" className="h-6 w-6"/>
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground/80">
              <img src={linkedin} alt="" className="h-6 w-6"/>
              </a>
            </div>
             <Lottie animationData={contact} className='w-[350px] mx-auto lg:w-[500px]'/>
          </div>
          <form className="w-full md:w-1/2 dark:bg-gray-700 bg-gray-100 rounded-lg border border-gray-300 shadow-lg shadow-gray-500 p-10" ref={form} onSubmit={sendEmail}>
            <h1 className='text-gray-900 text-4xl font-bold mb-7 dark:text-black'>Contact Me</h1>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-black">Name</label>
              <input id="name" placeholder='Full Name' type="text" name="from_name" className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-black">Email</label>
              <input type="email" placeholder='Email' id="email" name="from_email" className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-black">Message</label>
              <textarea id="message" placeholder='Enter Your Message' name="messages" rows={4} className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
            </div>
            {/* <input type="submit" value="Send" /> */}
            <button type="submit"  className='bg-red-500 text-white px-3 py-2 rounded-lg'>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
