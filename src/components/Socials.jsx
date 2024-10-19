import React from 'react';
import fb from '../assets/fb.png';
import gm from '../assets/gm.png';
import ig from '../assets/ig.png';
import ln from '../assets/ln.png';
import x from '../assets/x.png';
import yt from '../assets/yt.png';
import bg from '../assets/bg.png';

const Socials = () => {
  return (
    <>
      <div className='bg-neutral-800 p-0'> {/* Remove padding to eliminate white space */}
        <div className='flex items-center justify-center mt-0 relative flex-wrap lg:pt-72'>
          <img src={ig} alt="" className='w-[250px] mx-2 md:absolute md:-ml-[1200px]' />
          <img src={gm} alt="" className='w-[250px] mx-2 md:absolute md:-ml-[900px]' />
          <img src={ln} alt="" className='w-[250px] mx-2 md:absolute md:-ml-[600px]' />
          <img src={bg} alt="" className='hidden md:block absolute w-[500px]' /> {/* Show only on larger screens */}
          <img src={x} alt="" className='w-[250px] mx-2 md:absolute md:ml-[600px]' />
          <img src={yt} alt="" className='w-[250px] mx-2 md:absolute md:ml-[900px]' />
          <img src={fb} alt="" className='w-[250px] mx-2 md:absolute md:ml-[1200px]' />
        </div>

        <div>

            <p className='lg:mt-[300px] text-center text-white text-5xl'>Contact Us</p>
            <p  className='text-2xl text-center text-white mt-4 pb-10'>Designed and Developed by <span className='bg-gradient-to-r from-green-600 to-cyan-500 bg-clip-text text-transparent'> Alexa Developers</span> SRM.</p>
        </div>
      </div>
    </>
  );
};

export default Socials;
