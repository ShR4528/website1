import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaYoutube } from 'react-icons/fa';
import Wrapper from './Wrapper';
import nem from '../assets/nem.jpg';

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState('translate-y-0');
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <nav
      className={`w-full h-[20px] md:h-[80px]  bg-orange-400 flex items-center
      justify-between z-20 sticky top-0 transition-transform duration-300 ${show}
     `}>
      <div className='flex ml-7'>
        <div className='flex-shrink-0 flex items-center'>
          <a href='#' className='text-white font-bold text-lg'>
            <img
              src={nem}
              alt='Logo'
              className='w-10 ml-auto rounded-xl h-10'
            />
          </a>
        </div>
      </div>
      {/* <div className='mx-auto px-4 sm:px-6 lg:px-8 '> */}
      <div
        className={`dropdown ${
          isDropdownOpen ? 'open' : ''
        } mx-auto px-4 sm:px-6 lg:px-8`}>
        <div className='flex justify-between h-16'>
          <div className='flex font-style:italic'>
            <div className='hidden sm:flex sm:items-center sm:ml-100'>
              <ul>
                <li>
                  <a href='/'>Home</a>
                </li>
                <li
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}>
                  <a href='/'>Dropdown</a>
                  {isDropdownOpen && (
                    <div className='dropdown-content'>
                      {/* Всплывающее окно */}
                      <a href='/'>Link 1</a>
                      <a href='/'>Link 2</a>
                      <a href='/'>Link 3</a>
                    </div>
                  )}
                </li>
              </ul>
              <a
                href='#'
                className='text-black hover:text-white  px-3 py-2 rounded-md text-sm font-medium'>
                Who we are
              </a>
              <a
                href='#'
                className='text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                Our Products
              </a>
              <a
                href='#'
                className='text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                Our Services
              </a>
              <a
                href='#'
                className='text-black  hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                Our Capabilities
              </a>
              <a
                href='#'
                className='text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                Careers
              </a>
              <a
                href='#'
                className='text-black hover:text-white px-3  py-2 rounded-md text-sm font-medium'>
                News
              </a>
              <a
                href='#'
                className='text-black hover:text-white  px-3 py-2 rounded-md text-sm font-medium'>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <label class='relative block'>
        <span class='sr-only'>Search</span>
        <span class='absolute inset-y-0 left-0 flex items-center pl-2'>
          {/* <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"><!-- ... --></svg> */}
        </span>
        <input
          class='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
          placeholder='Search...'
          type='text'
          name='search'
        />
      </label>
      <div className='flex'>
        {/* Иконки LinkedIn и YouTube */}
        <div className='flex items-center mr-6'>
          <a
            href='https://www.linkedin.com/'
            className='text-gray-300 hover:bg-gray-700 px-3 py-2 mr-5 ml-3 rounded-md text-sm font-medium'
            target='_blank'
            rel='noopener noreferrer'>
            <FaLinkedin size={30} />
          </a>
          <a
            href='https://www.youtube.com/'
            className='text-gray-300 hover:bg-gray-700 px-3 py-2 mr-4  rounded-md text-sm font-medium'
            target='_blank'
            rel='noopener noreferrer'>
            <FaYoutube size={30} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
