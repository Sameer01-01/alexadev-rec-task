import React from 'react'
import team from '../assets/team.png'
import  line from '../assets/line.png'

const About = () => {
  return (
    <>
      <div className='bg-neutral-800 pt-20'>
        
        {/* Title Section */}
        <div className='w-full text-center'>
          <span className='bg-gradient-to-r from-green-600 to-cyan-500 bg-clip-text text-transparent text-3xl md:text-5xl inline-block'>
            About Us
          </span>
        </div>
        <div className='flex items-center justify-center mt-2'>
            
        <img 
  src={line} 
  alt="Line" 
  className='w-[150px] h-[3px] md:w-[220px] md:h-[5px] lg:w-[250px] lg:h-[6px]' 
/>

        </div>

        {/* Image and Text Section */}
        <div className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-32 mt-10 md:mt-16'>

          {/* Image Section */}
          <div>
            <img src={team} alt="Team" className='rounded-2xl w-[90%] md:w-[550px] mx-auto' />
          </div>

          {/* Text Section */}
          <div className='text-lg md:text-2xl text-white w-[90%] md:w-[550px]'>
            <p>
              Welcome to <span className='bg-gradient-to-r from-green-600 to-cyan-500 bg-clip-text text-transparent'>Alexa Developers</span> SRM, a thriving, student-run technical organization at SRMIST that brings technology and community together. We create an open atmosphere for tech enthusiasts to explore, learn, and grow, with a focus on voice-controlled technologies, application development, and UI/UX design via hands-on events and workshops. Our club is a hotbed of collaboration and innovation, where members can experiment, share expertise, and make a real difference. Whether you're a newcomer to technology or a seasoned professional, our wide range of workshops, hackathons, and contests provide ongoing learning and practical skill development.
            </p>
            <p className='mt-6 md:mt-10'>
              Together we build a community, where creativity knows no bounds and collaboration is key.
            </p>
          </div>
        </div>

      </div>
    </>
  )
}

export default About;
