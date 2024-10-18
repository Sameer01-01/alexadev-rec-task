import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  // State to toggle mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Navbar Container */}
      <div className='bg-neutral-800 text-white font-semibold flex items-center justify-between px-6 py-4 sticky top-0 z-50'>
        {/* Logo */}
        <div className='flex items-center'>
          <img
            src={logo}
            alt="Logo"
            className='w-10 md:w-12' // Adjust logo size for mobile
          />
          <p className='font-semibold text-white ml-3 text-lg md:text-xl'>
            {/* Adjust text size for mobile */}
            Alexa Developers SRM
          </p>
        </div>

        {/* Navigation Links for larger screens */}
        <nav className='hidden md:flex items-center gap-10 md:gap-28 pr-4 md:pr-10'>
          <a href="#" className=''>
            <button className='p-1 px-3 rounded-full bg-gradient-to-r from-cyan-300 to-green-400 hover:from-purple-400 hover:to-cyan-200'>
              Home
            </button>
          </a>
          <a href="#" className='hover:text-cyan-300'>Events</a>
          <a href="#" className='hover:text-cyan-300'>Our Team</a>
          <a href="#" className='hover:text-cyan-300'>Blogs</a>
          <a href="#">
            <button className='p-2 px-6 md:px-10 font-semibold rounded-full bg-gradient-to-t from-cyan-500 to-green-600'>
              About Us
            </button>
          </a>
        </nav>

        {/* Hamburger Icon for mobile screens */}
        <div className='md:hidden'>
          <button
            onClick={toggleMobileMenu}
            className='text-black p-1 px-3 rounded-full bg-gradient-to-r from-cyan-300 to-green-400'
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden flex flex-col items-center bg-black text-white'>
          <a href="#" className='py-2'>
            <button className='p-1 px-3 rounded-full bg-gradient-to-r from-blue-400 to-green-400 hover:from-purple-400 hover:to-cyan-200'>
              Home
            </button>
          </a>
          <a href="#" className='py-2 hover:text-cyan-300'>Events</a>
          <a href="#" className='py-2 hover:text-cyan-300'>Our Team</a>
          <a href="#" className='py-2 hover:text-cyan-300'>Blogs</a>
          <a href="#" className='py-2'>
            <button className='p-2 px-6 font-semibold rounded-full bg-gradient-to-t from-blue-400 to-green-600'>
              About Us
            </button>
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
