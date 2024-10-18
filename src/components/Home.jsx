import React from 'react';
import bg from '../assets/bg.png'; 
import line from '../assets/line.png';
import { FaLongArrowAltDown } from "react-icons/fa"; 

const Home = () => {
  return (
    <div className='relative'>
      {/* Background Color */}
      <div className='absolute inset-0 bg-neutral-800'></div>

      {/* Background Image */}
      <img 
  src={bg} 
  alt="" 
  className='absolute hidden md:block md:w-[755px] -mt-[20px] md:-mt-[60px] ml-[100px] md:ml-[650px] z-10' 
/>


      {/* Text on Top of Image */}
      <div className='relative z-20'>
        <p className='text-2xl md:text-5xl ml-5 md:ml-40 pt-16 md:pt-32 text-white text-center md:text-left'>
          Alexa Developers SRM
        </p>

        <p className='text-4xl md:text-7xl ml-5 md:ml-40 font-semibold bg-gradient-to-r from-green-600 to-blue-400 bg-clip-text text-transparent mt-4 md:mt-8 text-center md:text-left'>
          “Voices United,
        </p>
        <p className='text-4xl md:text-7xl ml-5 md:ml-[440px] font-semibold bg-gradient-to-r from-green-600 to-cyan-300 bg-clip-text text-transparent mt-2 text-center md:text-left'>
          Tech Amplified”
        </p>

        {/* Centering the line image for mobile */}
        <img src={line} alt="" className='mt-8 md:mt-40 md:ml-40 w-[50%] md:w-[460px] mx-auto md:mx-0' />
        
        <p className='font-semibold text-white text-center mt-6 md:mt-16'>Scroll down</p>
        <div className='flex justify-center items-center mt-3'>
          <FaLongArrowAltDown color='white' size={25}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
