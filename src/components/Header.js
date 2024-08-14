import React from 'react';

function Header() {
  return (
    <div className='p-5 bg-primary flex justify-between items-center fixed top-0 left-0 w-full z-50 border-b-2 border-gray-800'>
      {/* Left Side: Logo or Initials */}
      <div className='flex'>
        <h1 className='text-secondary text-4xl font-semibold sm:text-2xl'>S</h1>
        <h1 className='text-white text-4xl font-semibold sm:text-2xl'>B</h1>
      </div>

      {/* Center: Menu Options */}
      <div className='flex-1 flex justify-center sm:hidden'>
        <nav className="flex gap-6 sm:gap-4">
          <a href="#home" className="text-white hover:text-tertiary">Home</a>
          <a href="#about" className="text-white hover:text-tertiary">About</a>
          <a href="#experience" className="text-white hover:text-tertiary">Experience</a>
          <a href="#projects" className="text-white hover:text-tertiary">Projects</a>
          <a href="#education" className="text-white hover:text-tertiary">Education</a>
          <a href="#contact" className="text-white hover:text-tertiary">Contact</a>
        </nav>
      </div>

      {/* Right Side: Download Resume Button */}
      <div className='ml-auto'>
        <a
          href="https://drive.google.com/file/d/1lq_gYxutaFNDgv5LrTv4dk0jhhBAr6bO/view?usp=sharing" // Replace with the actual path to your resume
          download
          className='bg-secondary text-white px-6 py-3 rounded opacity-600 hover:bg-tertiary hover:text-black hover:font-semibold transition-colors duration-300 sm:px-4 sm:py-1 sm:text-sm'
        >
          Download Resume
        </a>

      </div>

    </div>
  );
}

export default Header;
