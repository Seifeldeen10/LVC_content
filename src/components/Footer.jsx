import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='bg-primary-500 text-primary-600 px-8 py-4 mt-8'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='space-y-4'>
          <h2 className='text-3xl font-bold'>Logo</h2>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </div>
        <div className='space-y-4'>
          <h2 className='text-3xl font-bold'>Resources</h2>
        </div>
        <div className='space-y-4'>
          <h2 className='text-3xl font-bold'>Follow</h2>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
