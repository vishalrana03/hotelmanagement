import React from 'react';
import Img1 from '../../public/hotel1.png';
import Img2 from '../../public/hotel2.png';
import Img3 from '../../public/hotel3.png';
import Img4 from '../../public/hotel4.png';
import { animate, motion, useAnimation, useMotionValue } from 'framer-motion';
const ProductsData = [
    {
        id: 1,
        img: Img1,
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        aosDelay: "400",
    },
    {
        id: 3,
        img: Img3,
        aosDelay: "200",
    },
    {
        id: 4,
        img: Img4,
        aosDelay: "600",
    },
    {
        id: 5,
        img: Img2,
        aosDelay: "800",
    },
]
const Body = () => {

  return (

    <div className='mt-9 mb-5'>
        {/* Header Section */}
        <div className="container-fluid relative">
        <img src="../../public/back2.png" className="-z-30 absolute w-full"/>
        <div data-aos="fade-up" data-aos-delay="100">
        <h1 className="text-6xl mx-44 text-center hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 hover:scale-105 duration-300 cursor-pointer  hover:drop-shadow-[20px_20px_5px_rgba(0,0,0,0.7)]">Top Selling Hotels For You</h1>
        </div>
        </div>
        {/* Body Section */}
            <div className='flex container-fluid justify-center items-center flex-wrap'>

                {/* Card Section*/}
                {ProductsData.map((data) => (
                    <div 
                    data-aos="fade-up"
                    data-aos-delay={data.aosDelay}
                    key={data.id} 
                    className='space-y-3'>
                        <img src={data.img} 
                        className='h-[200px] hover:scale-125 duration-300 transition-all hover:drop-shadow-[25px_20px_12px_rgba(0,0,0,0.7)]'/>
                    </div>
                ))}
            </div>

        </div>
        
    
  )
}

export default Body