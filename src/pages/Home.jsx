import React from 'react';
import HeroSection from '../components/HeroSection';

export default function Home() {
    return (
        <div className='container mx-auto px-4 py-8'>
            <HeroSection title='Home' subtitle='Our homepage' buttonText='Learn more' />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
               <div className='feature'>Feature 1</div>
               <div className='feature'>Feature 2</div>
               <div className='feature'>Feature 3</div>
            </div>
        </div>
    )
}