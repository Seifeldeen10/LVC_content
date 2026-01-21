import React from 'react';

export const Navbar = () => {
  return (
    <nav className='flex justify-between p-5 bg-blue-500'>
      <div className='text-white'>Logo</div>
      <ul className='flex space-x-4'>
        <li><a href='#about' className='text-white'>About</a></li>
        <li><a href='#services' className='text-white'>Services</a></li>
        <li><a href='#contact' className='text-white'>Contact</a></li>
      </ul>
    </nav>
  );
}