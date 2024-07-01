import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`bg-black p-4 md:p-7 rounded-full relative mx-4 md:mx-20 flex flex-col md:flex-row md:justify-between items-center ${isOpen ? '' : 'border border-white'}`}>
      <div className="flex justify-between items-center w-full md:w-auto">
        <div className="flex items-center">
          <img src={logo} alt="FitLife Gym Logo" className="h-12 md:h-20 mr-2" />
          <span className="text-cyan-400 text-xl md:text-2xl font-bold"></span>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`flex-col md:flex-row items-center w-full md:w-auto justify-between md:justify-center ${isOpen ? 'flex' : 'hidden'} md:flex transition-all duration-300 ease-in-out`}>
        <ul className="flex flex-col md:flex-row list-none md:flex md:items-center md:text-center"> {/* Updated to md:text-center for centering in mobile */}
          <li className="mx-2 md:mx-4 my-2 md:my-0 ">
            <a href="#home" className="text-white text-xl md:text-2xl hover:text-cyan-400">Home</a>
          </li>
          <li className="mx-2 md:mx-4 my-2 md:my-0">
            <a href="#class" className="text-white text-xl md:text-2xl hover:text-cyan-400">Class</a>
          </li>
          <li className="mx-2 md:mx-4 my-2 md:my-0">
            <a href="#membership" className="text-white text-xl md:text-2xl hover:text-cyan-400">Membership</a>
          </li>
          <li className="mx-2 md:mx-4 my-2 md:my-0">
            <a href="#gallery" className="text-white text-xl md:text-2xl hover:text-cyan-400">Gallery</a>
          </li>
          <li className="mx-2 md:mx-4 my-2 md:my-0">
            <a href="#contact" className="text-white text-xl md:text-2xl hover:text-cyan-400">Contact</a>
          </li>
        </ul>
        <button className="bg-cyan-400 text-black py-2 md:py-4 px-3 md:px-5 rounded-full text-xl md:text-2xl hover:bg-cyan-300 mt-2 md:mt-0 md:ml-4">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
