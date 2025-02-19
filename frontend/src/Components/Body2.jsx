import React from "react";
import Hotel1 from "../../public/hotel-image1.png"
import Hotel2 from "../../public/hotel-image2.png"
import Hotel3 from "../../public/hotel-image3.png"

const Body2 = () => {
    return (
        <div className="container-fluid pb-7">
            <div data-aos="fade-up" data-aos-delay="100">
            <h1 className="text-5xl hover:scale-105 hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 hover:drop-shadow-[20px_20px_5px_rgba(0,0,0,0.7)] duration-200 text-left mb-3 pl-24">Recommended For You</h1>
            </div>
            <div className="flex items-center justify-center gap-10">


                    <div className="flex flex-col">
                    <div data-aos="fade-right" data-aos-delay="100">
                    <img src={Hotel1} className='hover:scale-105 h-[400px] duration-300 transition-all rounded-2xl hover:drop-shadow-[10px_10px_12px_rgba(0,0,0,0.5)]' />
                    <div className="flex justify-between mt-4">
                    <h1 className="text-2xl font-semibold hover:scale-110 duration-200">Near the Beach</h1>
                    <p className="border rounded-lg border-gray-200 p-1 hover:bg-zinc-100 duration-200 hover:scale-105 hover:border-gray-400">320+ properties</p>
                    </div>
                    <p className="text-gray-500">1,22 kilometers away</p>
                    </div>
                    </div>

                    <div>
                    <div data-aos="fade-right" data-aos-delay="100">
                    <img src={Hotel2} className='hover:scale-105 h-[400px] duration-300 transition-all rounded-2xl hover:drop-shadow-[10px_10px_12px_rgba(0,0,0,0.5)]' />
                    <div className="flex justify-between mt-4">
                    <h1 className="text-2xl font-semibold hover:scale-110 duration-200">Pet Friendly</h1>
                    <p className="border rounded-lg border-gray-200 p-1 hover:bg-zinc-100 duration-200 hover:scale-105 hover:border-gray-400">New</p>
                    </div>
                    <p className="text-gray-500">1,922 kilometers away</p>
                    </div>
                    </div>

                    <div>
                    <div data-aos="fade-right" data-aos-delay="100">
                    <img src={Hotel3} className='hover:scale-105 h-[400px] duration-300 transition-all rounded-2xl hover:drop-shadow-[10px_10px_12px_rgba(0,0,0,0.5)]' />
                    <div className="flex justify-between mt-4">
                    <h1 className="text-2xl font-semibold hover:scale-110 duration-200">Near the Nature</h1>
                    <p className="border rounded-lg border-gray-200 p-1 hover:bg-zinc-100 duration-200 hover:scale-105 hover:border-gray-400">700+ properties</p>
                    </div>
                    <p className="text-gray-500">1,500 kilometers away</p>

                    </div>
                    </div>
                    </div>

        </div>
    );
};

export default Body2