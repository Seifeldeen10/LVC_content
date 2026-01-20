import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
 return (
  <nav className='bg-primary-500 text-primary-600'>
   <div className='container mx-auto px-4 py-2'>
    <Link to='/'>Home</Link>
    <Link to='/about' className='ml-4'>About</Link>
    <Link to='/contact' className='ml-4'>Contact</Link>
   </div>
  </nav>
 );
};

export default Navbar;