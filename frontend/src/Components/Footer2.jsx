import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const Footer2 = () => {

  const navigate = useNavigate();
  const clipTextStyles = {
    webkitboxReflect: "below 0 linear-gradient(to bottom, #0001, #0004)",
};


  return (
    <div className='container-fluid relative'>
        <img src="../../public/back3.png" className='w-full -z-30 absolute h-[600px] transition-all bg-gradient-to-b from-gray-700 to-gray-900' style={clipTextStyles}/>

        <div className='flex justify-between'>
          <h1 className='text-5xl text-white text-center pl-10 pt-24 font-semibold hover:scale-105 duration-300 hover:text-red-600'>TWIN TOWER</h1>
          <h1 className='right-12 absolute pt-40 font-semibold hover:scale-105 duration-300 flex space-x-4'><span className='text-8xl text-white'>Get </span> <span className='text-8xl text-white'> In</span><span className='text-8xl text-red-600'>Touch</span></h1>
        </div>


        <div className='text-white text-mg w-[470px] pt-10 pl-10  hover:scale-105 duration-300'>
         <p>With modern amenities and personalized service, it's the perfect haven for those seeking adventure and relaxation.</p>
        </div>

        <div className='flex flex-col'>
          <h1 className='text-white text-mg pt-10 pl-10 font-semibold cursor-pointer' onClick={() => navigate("/admin/auth")}>Hotel Admin</h1>
          <h1 className='text-white text-mg pl-10 font-semibold cursor-pointer' onClick={() => navigate("/seller/auth")}>Hotel Owner</h1>
        </div>

        <div className='flex flex-col items-end pr-20'>
          <div className='text-white text-4xl pt-28 font-semibold hover:scale-105 duration-300'>+(91) 1234567890</div>
          <div className='text-white text-4xl font-semibold hover:scale-105 duration-300'>twintower@example.com</div>
        </div>
    </div>
  )
}

export default Footer2;