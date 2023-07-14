import React from 'react';
import hero3 from '../assets/hero2.png';
import hero2 from '../assets/hero2.png';
import heroslider from '../assets/heroslider.jpeg';

const Main = () => {
  return (
    <div className='bg-transparent mt-20'>
      <div className='grid grid-flow-col grid-rows-2 grid-cols-3 gap-8 mt-19'>
        <div className='transform scale-110 -rotate-6'>
          <img src={hero2} alt='' loading='lazy' />
        </div>
        <div className='col-start-3 transform scale-75 rotate-6 translate-x-2 translate-y-15'>
          <img src={heroslider} alt='' loading='lazy' />
        </div>
        <div className='transform scale-150 translate-y-11'>
          <img src={hero3} alt='' loading='lazy' />
        </div>
        <div className='transform translate-y-24'>
          <img src={heroslider} alt='' loading='lazy' />
        </div>
        <div className='row-start-1 col-start-2 col-span-2 transform translate-x-20 translate-y-4'>
          <img src={heroslider} alt='' loading='lazy' />
        </div>
      </div>
    </div>
  );
};

export default Main;
