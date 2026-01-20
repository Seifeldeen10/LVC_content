import React from 'react';

export default function HeroSection({ title, subtitle, buttonText }) {
    return (
        <section className='space-y-4'>
            <h1 className='text-3xl font-bold'>{title}</h1>
            <p className='text-gray-600'>{subtitle}</p>
            <button className='bg-primary-500 text-primary-600 hover:bg-primary-700'>{buttonText}</button>
        </section>
    );
}