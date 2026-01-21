import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-white px-6 py-4 shadow'>
      <div className='flex items-center justify-between'>
        <div>
          <a className='text-gray-800 text-xl font-bold' href='/'>LVC Corporate</a>
        </div>

        <div className='space-x-4'>
          <a className='text-gray-600 hover:text-red-600' href='/about'>About Us</a>
          <a className='text-gray-600 hover:text-red-600' href='/investment-strategy'>Investment Strategy</a>
          <a className='text-red-600 px-4 py-2 rounded shadow' href='/contact'>Contact Us</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar