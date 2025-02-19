import React from "react";

const Footer1 = () => {
    return (
        <div className="container-fluid  relative h-[80%] mt-10 mb-64">
            <img src="../../public/footer1.jpg" className="w-full  h-[600px] -z-40 absolute" />
            <h1 className="text-6xl text-black top-1/2 text-center px-20 pt-40 font-semibold hover:scale-105 duration-300 hover:drop-shadow-[20px_20px_5px_rgba(0,0,0,0.5)]">Ready to embark on your next adventure? <span style={{color: "grey"}}>Connect with Twin Tower Today to start </span><span style={{color: "red"}}>planning your dream hotel stay.</span></h1>
        </div>
    );
};

export default Footer1;