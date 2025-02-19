import React from "react";

const Testimonial = () => {
    return ( 
    <div className="container-fluid relative pt-16">
        <div data-aos="fade-right" data-aos-delay="100">
        <h1 className="text-3xl border-b-2 border-black w-20 pl-1 hover:w-40 hover:scale-105 duration-200">Testimonial</h1>
        </div>

        <div data-aos="fade-up" data-aos-delay="100">
        <h1 className="text-4xl mx-44 text-center hover:scale-105 duration-300 cursor-pointer  hover:drop-shadow-[20px_20px_5px_rgba(0,0,0,0.7)] pt-16">I can't recommend this hotel enough— <span style={{color: "grey"}}>whether you're traveling for business or leisure, it's the perfect place to stay.</span> <span style={{color: "red"}}> I will definitely be coming back!</span></h1>
        </div>

        <div className="flex items-center justify-center pt-16">
            <img src="../../public/testimonial1.jpg" className=" h-[150px] rounded-xl hover:scale-110 duration-200 overflow-hidden" />
            <div className="text-center">
            <img src="../../public/testimonial2.jpg" className=" h-[200px] rounded-xl hover:scale-110 duration-200 overflow-hidden" />
            <h2 className="text-2xl">Justin Bieber</h2>
            <p className="text-sm">From Nepal</p>
            </div>
            <img src="../../public/testimonial3.jpg" className=" h-[150px] rounded-xl hover:scale-110 duration-200 overflow-hidden" />


        </div>

        </div>
    );
};
export default Testimonial;