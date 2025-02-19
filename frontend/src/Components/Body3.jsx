import React from "react";
import { RiHotelLine } from "react-icons/ri";
import { GiElvenCastle } from "react-icons/gi";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { GiSpookyHouse } from "react-icons/gi";
const Body3 = () => {
    return (

        
        
        <div className="container-fluid relative">
            <img src="../../public/back.png" className="-z-30 absolute w-full h-[1000px]" />
            <div data-aos="fade-up" data-aos-delay="100">
            <h1 className="text-6xl mx-44 text-center hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 hover:scale-105 duration-300 cursor-pointer  hover:drop-shadow-[20px_20px_5px_rgba(0,0,0,0.7)]">Each space is thoughtfully curated to spark connection and create lasting memories.</h1>
            </div>

            <div className="text-4xl justify-center items-center flex mt-8 gap-7">

            <div data-aos="fade-up" data-aos-delay="100">
            <div className="flex flex-col justify-center items-center">
            <div className="bg-black rounded-full text-white p-4 hover:bg-white hover:text-black duration-300 border hover:scale-110 
            hover:border-blue-500 hover:shadow-[0_0_5px_2px_rgba(255,255,255,0.8),0_0_7px_5px_rgba(0,0,255,0.6)]">
            <RiHotelLine />
            </div>
            <h3 className="text-4xl hover:scale-110 duration-200 mt-3" style={{fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>Hotels</h3>
            </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="100">
            <div className="flex flex-col justify-center items-center">
            <div className="bg-black rounded-full text-white p-4 hover:bg-white hover:text-black duration-300 border hover:scale-110 
            hover:border-blue-500 hover:shadow-[0_0_5px_2px_rgba(255,255,255,0.8),0_0_7px_5px_rgba(0,0,255,0.6)]">
            <GiSpookyHouse />
            </div>
            <h3 className="text-4xl hover:scale-110 duration-200 mt-3" style={{fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>Cabins</h3>
            </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="100">
            <div className="flex flex-col justify-center items-center">
            <div className="bg-black rounded-full text-white p-4 hover:bg-white hover:text-black duration-300 border hover:scale-110 
            hover:border-blue-500 hover:shadow-[0_0_5px_2px_rgba(255,255,255,0.8),0_0_7px_5px_rgba(0,0,255,0.6)]">
            <PiBuildingApartmentFill />
            </div>
            <h3 className="text-4xl hover:scale-110 duration-200 mt-3" style={{fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>Luxe</h3>
            </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="100">
            <div className="flex flex-col justify-center items-center">
            <div className="bg-black rounded-full text-white p-4 hover:bg-white hover:text-black duration-300 border hover:scale-110 
            hover:border-blue-500 hover:shadow-[0_0_5px_2px_rgba(255,255,255,0.8),0_0_7px_5px_rgba(0,0,255,0.6)]">
            <GiElvenCastle />
            </div>
            <h3 className="text-4xl hover:scale-110 duration-200 mt-3" style={{fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>Castle</h3>
            </div>
            </div>

            </div>

        </div>
        
    );
};

export default Body3;