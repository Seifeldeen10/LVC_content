import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className='container mx-auto px-4 py-8'>
            <Link to='/' className='mr-4'>Home</Link>
            <Link to='/about' className='mr-4'>About</Link>
            <Link to='/contact' className='mr-4'>Contact</Link>
        </nav>
    );
}