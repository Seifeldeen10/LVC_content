import React from 'react';
import HeroSection from '../components/HeroSection';

function Home() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <HeroSection />
      <h2 className='text-3xl font-bold text-gray-600 mb-8'>Featured Content</h2>
      <p className='text-gray-600 mb-8'>This is some example content for the home page.</p>
    </div>
  );
}

export default Home;
