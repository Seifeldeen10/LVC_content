import React from 'react';

function HeroSection() {
  return (
    <section className='bg-primary-500 text-primary-600 px-8 py-12'>
      <h1 className='text-3xl font-bold mb-4'>Welcome to Our Website</h1>
      <p className='mb-8'>This is a sample hero section with a heading and subheading text.</p>
      <button className='bg-primary-500 text-primary-600 hover:bg-primary-700 font-bold py-2 px-4 rounded'>Call to Action</button>
    </section>
  );
}

export default HeroSection;
