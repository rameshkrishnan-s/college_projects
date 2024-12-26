import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between bg-gray-200 p-4'>
      <ul className='flex flex-row'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
