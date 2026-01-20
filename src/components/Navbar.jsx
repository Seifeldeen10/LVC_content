import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='bg-primary-500 text-primary-600 px-8 py-4'>
      <div className='container mx-auto'>
        <Link to='/' className='text-xl font-bold'>Logo</Link>
        <div className='space-x-4'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
