import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
 return (
  <footer className='bg-primary-500 text-primary-600 py-8'>
   <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4'>
    <div>
     <h2 className='text-3xl font-bold mb-2'>Links</h2>
     <Link to='/'>Home</Link>
     <Link to='/about'>About</Link>
     <Link to='/contact'>Contact</Link>
    </div>
    <div>
     <h2 className='text-3xl font-bold mb-2'>Resources</h2>
     <Link to='/'>Blog</Link>
     <Link to='/'>Docs</Link>
     <Link to='/'>Support</Link>
    </div>
    <div>
     <h2 className='text-3xl font-bold mb-2'>Social</h2>
     <Link to='/'>Twitter</Link>
     <Link to='/'>Facebook</Link>
     <Link to='/'>LinkedIn</Link>
    </div>
   </div>
  </footer>
 );
};

export default Footer;