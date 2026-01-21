import React from 'react'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1>Welcome to LVC Corporate Website</h1>
      </main>
    </div>
  )
}

export default Home