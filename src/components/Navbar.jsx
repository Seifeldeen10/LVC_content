import React from 'react'

function Navbar() {
  return (
    <header className="bg-primary-600 text-white py-6">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold">LVC Corporate Website</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar