import React from 'react'
import line from '../assets/line.png'
import js from '../assets/js.png'
import ux from '../assets/ux.png'
import sc from '../assets/sc.png'
import bz from '../assets/bz.png'

const Domain = () => {
  return (
    <>
      <div className='bg-neutral-800 pt-28'>
        <div className='w-full text-center'>
          <span className='bg-gradient-to-r from-green-600 to-cyan-500 bg-clip-text text-transparent text-3xl md:text-5xl inline-block '>
            Our Domains
          </span>
        </div>

        <div className='flex items-center justify-center mt-2 pb-10'>
          <img
            src={line}
            alt="Line"
            className='w-[150px] h-[3px] md:w-[220px] md:h-[5px] lg:w-[300px] lg:h-[6px]'
          />
        </div>

        {/* Technical Section */}
        <div className='flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 px-5 lg:px-0'>
          <div className='w-full lg:w-[550px] order-2 lg:order-none'>
            <p className='text-white text-4xl lg:text-7xl'>Technical</p>
            <p className='text-lg lg:text-2xl mt-5 text-white'>
              A vibrant community of tech enthusiasts collaborating and transforming the future. The tech domain works together to perfect frontend user experiences, build robust systems in backend, and innovate ideas through app dev, elevating their skills throughout the journey.
            </p>
          </div>
          <div className='w-full lg:w-auto order-1 lg:order-none'>
            <img src={js} alt="Technical" className='w-full h-auto' />
          </div>
        </div>

        {/* Creatives Section */}
        <div className='flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 mt-10 px-5 lg:px-0'>
          <div className='w-full lg:w-auto order-1'>
            <img src={ux} alt="Creatives" className='w-full h-auto' />
          </div>
          <div className='w-full lg:w-[550px] order-2'>
            <p className='text-white text-4xl lg:text-7xl'>Creatives</p>
            <p className='text-lg lg:text-2xl mt-5 text-white'>
              In the Creatives domain, ideas evolve into unforgettable experiences. The talented content writers and designers have mastered the creation of compelling narratives and seamless design interfaces. Experience the forefront of creativity as they shape the art of engagement.
            </p>
          </div>
        </div>

        {/* Events Section */}
        <div className='flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 mt-10 px-5 lg:px-0'>
          <div className='w-full lg:w-[550px] order-2 lg:order-none'>
            <p className='text-white text-4xl lg:text-7xl'>Events</p>
            <p className='text-lg lg:text-2xl mt-5 text-white'>
              The heartbeat of the club, from brainstorming brilliant ideas to executing them with precision, ensures that each event is not just memorable but leaves a lasting impact on everyone involved. Our events domain thrives because of the hard work and creativity of the team.
            </p>
          </div>
          <div className='w-full lg:w-auto order-1 lg:order-none'>
            <img src={sc} alt="Events" className='w-full h-auto' />
          </div>
        </div>

        {/* Business Section */}
        <div className='flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 mt-10 px-5 lg:px-0'>
          <div className='w-full lg:w-auto order-1'>
            <img src={bz} alt="Business" className='w-full h-auto' />
          </div>
          <div className='w-full lg:w-[550px] order-2'>
            <p className='text-white text-4xl lg:text-7xl'>Business</p>
            <p className='text-lg lg:text-2xl mt-5 text-white'>
              The heartbeat of the club, from brainstorming brilliant ideas to executing them with precision, ensures that each event is not just memorable but leaves a lasting impact on everyone involved. Our events domain thrives because of the hard work and creativity of the team.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Domain
