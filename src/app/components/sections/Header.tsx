import React from 'react';
import Menu from '../ui/Menu';

const Header = () => {

  return (
    <header className='py-8 px-4 md:px-20 flex items-center justify-between fixed w-screen z-50 bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
      <span className='font-semibold text-xl md:text-3xl cursor-pointer'>TheHikers</span>
      <div className='hidden md:block'>
        <Menu />
      </div>
    </header>
  )
}

export default Header