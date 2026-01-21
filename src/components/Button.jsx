import React from 'react';

export const Button = ({ children }) => {
  return (
    <button className='px-4 py-2 text-white bg-blue-500 rounded'>
      {children}
    </button>
  );
}