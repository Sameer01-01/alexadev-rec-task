import wrkshp from '../assets/e1.png'
import prty from '../assets/e2.png'
import cdcmp from '../assets/e3.png'
import hck from '../assets/e4.png'
import line from '../assets/line.png'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

  return (
    <>
     <div className="bg-neutral-800  pt-28 w-full overflow-x-hidden" >
     <div className='w-full text-center'>
          <span className='bg-gradient-to-r from-green-600 to-cyan-500 bg-clip-text text-transparent text-3xl md:text-5xl inline-block '>
            Our Events
          </span>
        </div>
        <div className='flex items-center justify-center mt-2'>
          <img
            src={line}
            alt="Line"
            className='w-[150px] h-[3px] md:w-[220px] md:h-[5px] lg:w-[240px] lg:h-[6px]'
          />
        </div>


                {/* Slider container */}
                <div className="w-full sm:w-3/4 mx-auto ">
                    <div className="mt-20">
                        <Slider {...settings}>
                            {data.map((d, index) => (
                                <div
                                key={index}
                                className="bg-gradient-to-r from-green-600 to-cyan-500 border-2 border-zinc-700 rounded-2xl h-[290px] w-[280px] flex flex-col justify-center items-center hover:border-cyan-300">
                               
                                <div className='flex justify-center items-center '>

                                <img src={d.img} alt="" className='h-[287px] w-[340px] py-2 rounded-2xl' />
                                </div>
                            </div>
                            
                            ))}
                        </Slider>
                    </div>

                    <div className='flex items-center justify-center mt-20 pb-10'>
    <img src={line} alt="" className='w-full h-auto max-w-[1200px] rounded-full' />
</div>

                </div>
            </div>
    
    
    </>
  )
}


const data = [
    {
        text: 'Coding Camp',
        name: 'Event 1',
      
        img: cdcmp
    },
    {
        text: 'Codenex Hackathon',
        name: 'Event 2',
        
        img: hck
    },
    {
        text: "House Party",
        name: 'Event 3',
        img: prty
    },
    {
        text: "",
        name: '',
        img: wrkshp
    }
];
export default Carousel