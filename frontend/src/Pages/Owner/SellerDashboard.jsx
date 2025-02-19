import React from 'react'
import { useNavigate } from 'react-router-dom'
const SellerDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className='w-[300px] h-screen bg-gradient-to-br from-pink-600 to bg-purple-600'>
      <h1 className='text-white text-3xl text-center pt-3 hover:scale-125 duration-300'>Seller Dashboard</h1>
      <h1 className='text-white text-xl text-left pt-6 pl-4 hover:scale-110 duration-300 cursor-pointer' onClick={() => navigate("/seller/add")}>add Hotels</h1>
      <h1 className='text-white text-xl text-left pt-2 pl-4 hover:scale-110 duration-300 cursor-pointer' onClick={() => navigate("/seller/edit")}>Hotel Bookings</h1>
      <h1 className='text-white text-xl text-left pt-2 pl-4 hover:scale-110 duration-300 cursor-pointer'>My Hotels</h1>
    </div>
  )
}

export default SellerDashboard