import React from 'react';
import Navbar from '../components/Navbar';

export const About = () => {
  return (
    <div>
      <Navbar />
      <main className='p-5'>
        <h2>About Us</h2>
        <p>This is About Us page.</p>
      </main>
    </div>
  );
};
