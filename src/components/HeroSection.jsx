import React from 'react';

const HeroSection = () => {
 return (
  <section className='bg-primary-500 text-primary-600 py-8'>
   <div className='container mx-auto px-4'>
    <h1 className='text-3xl font-bold'>Welcome to our website!</h1>
    <p className='text-gray-600 mb-4'>We provide the best solutions for your business.</p>
    <button className='bg-primary-500 text-primary-600 hover:bg-primary-700'>Learn More</button>
   </div>
  </section>
 );
};

export default HeroSection;