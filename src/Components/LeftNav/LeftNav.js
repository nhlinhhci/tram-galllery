import React from 'react';
import { useEffect } from 'react';
import logo from '../../img/Site_Icon.png';

const LeftNav = () => {
  useEffect(() => {
    const btn = document.querySelector('.mobile-menu-button');
    const sidebar = document.querySelector('.sidebar');
    btn.addEventListener('click', () => {
      sidebar.classList.toggle('-translate-x-full');
    });
  }, []);
  return (
    <>
      {/* mobile menu bar */}
      <div className='bg-white text-black flex justify-between sm:hidden'>
        {/* logo */}
        <a href='/' className='block p-4 ml-4'>
          <img className='w-14 h-auto' src={logo} alt='' />
        </a>
        {/* mobile menu button */}
        <button className='bg-gray-100 block mobile-menu-button p-4 px-6 focus:outline-none focus:bg-green-50'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </div>

      <div className='sidebar bg-green-200 text-black-100 w-64 h-full space-y-6 px-2 py-7 absolute inset-y-0 left-0 transform -translate-x-full sm:relative sm:translate-x-0 transition duration-200 ease-in-out'>
        {/* siderbar */}
        <div>
          {/* logo */}
          <a href='/' className='block space-x-2 pb-12'>
            <img
              className='max-w-full max-h-full w-auto h-auto'
              src={logo}
              alt=''
            />
          </a>
          {/* navbar */}
          <nav className='ml-10 mr-14 '>
            <a
              href='/'
              className='block text-2xl py-2.5 px-4 hover:bg-green-50 rounded transition duration-200 hover:text-gray-500'
            >
              works
            </a>
            <a
              href='/about'
              className='block text-2xl py-2.5 px-4 hover:bg-green-50 rounded transition duration-200 hover:text-gray-500'
            >
              about
            </a>
            <a
              href='/etsy'
              className='block text-2xl py-2.5 px-4 hover:bg-green-50 rounded transition duration-200 hover:text-gray-500'
            >
              shop
            </a>
            <a
              href='http://instagram.com/'
              className='block text-2xl py-2.5 px-4 hover:bg-green-50 rounded transition duration-200 hover:text-gray-500'
            >
              instagram
            </a>
          </nav>
        </div>
      </div>
      <toggleBtn />
    </>
  );
};

export default LeftNav;
