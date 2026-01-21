import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='flex justify-between items-center p-5 bg-gray-900 text-white'>
      <Link to='/' className='text-lg font-bold'>Logo</Link>
      <ul className='flex justify-around space-x-10'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </nav>
  );
};
