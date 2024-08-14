import React from 'react';

function Intro() {
  return (
    <div id='home' className='h-auto sm:h-[110vh] bg-primary flex flex-col items-start justify-center gap-8 py-5 sm:py-20 lg:mt-[70px]'>
      <h1 className='text-white'>Hi, I am</h1>
      <h1 className='text-7xl sm:text-3xl text-secondary font-semibold'>
        Shekar B
      </h1>
      <h1 className='text-5xl sm:text-3xl text-white font-semibold'>
      Full Stack Java Developer.
      </h1>
      <p className='text-white w-2/3 sm:w-full'>
      Leveraging 7+ years of experience in Full Stack Development, I specialize in building high-performance, scalable web applications. My expertise spans across Core Java, Spring Framework, and RESTful services, along with front-end technologies like Angular and JavaScript.
      </p>


      {/* Added Statistic Section */}
      <div className='flex flex-wrap w-full justify-between mt-10 sm:mt-4 sm:gap-6'>
        <div className='flex flex-col items-center border-2 border-white text-tertiary px-10 py-3 rounded mb-4 sm:w-full'>
          <h1 className='text-4xl font-bold text-white'>7+</h1>
          <span>Years of Experience</span>
        </div>
        <div className='flex flex-col items-center border-2 border-white text-tertiary px-10 py-3 rounded mb-4 sm:w-full'>
          <h1 className='text-4xl font-bold text-white'>20+</h1>
          <span>Projects Completed</span>
        </div>
        <div className='flex flex-col items-center border-2 border-white text-tertiary px-10 py-3 rounded mb-4 sm:w-full'>
          <h1 className='text-4xl font-bold text-white'>10+</h1>
          <span>Satisfied Clients</span>
        </div>
      </div>

    
    </div>
  );
}

export default Intro;
