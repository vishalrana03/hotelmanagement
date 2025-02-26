import React from 'react'
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { updateItem } from "../../lib/store"
import { IoBed } from "react-icons/io5";
const Searchbar = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [Value,setValue] = React.useState({
        location: "Mohali",
        fromDate: null,
        toDate: null,
        RoomType: null,
        rooms: null,
    });

        function handlechange(type,e){
            setValue((value) => ({
                ...value,
                [type]: e.target.value
            })
        )}
    
        function handlesubmit(e){
            e.preventdefault()
            console.log(Value,"Value")
            dispatch(updateItem(Value))
            navigate("/search")
        }
  return (

    <div className='flex items-center justify-center p-4 bg-white shadow-md'>
      <form className='flex items-center gap-4' onSubmit={handlesubmit}>
        <div className='flex items-center gap-2 text-2xl font-primary'>
          <IoBed />
          <h2 className='hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 hover:scale-110 duration-300 cursor-pointer'>Find Hotels</h2>
        </div>
        
        <input type='text' placeholder='City or Hotel Name' className='bg-gray-100 h-10 rounded-lg outline-none px-2 hover:bg-gray-300 transition-all duration-300' onChange={(e) => handlechange("location", e)} />
        
        <input type='date' className='bg-gray-100 h-10 rounded-lg outline-none px-2 hover:bg-gray-300 transition-all duration-300' onChange={(e) => handlechange("fromDate", e)} />
        
        <input type='date' className='bg-gray-100 h-10 rounded-lg outline-none px-2 hover:bg-gray-300 transition-all duration-300' onChange={(e) => handlechange("toDate", e)} />
        
        <input type='text' placeholder='Guest Rooms' className='bg-gray-100 h-10 rounded-lg outline-none px-2 hover:bg-gray-300 transition-all duration-300' onChange={(e) => handlechange("rooms", e)} />
        
        <select className='bg-gray-100 h-10 rounded-lg outline-none px-2 hover:bg-gray-300 transition-all duration-300' onChange={(e) => handlechange("RoomType", e)}>
          <option value=''>Select</option>
          <option value='AC'>AC</option>
          <option value='Non-AC'>Non-AC</option>
        </select>
        
        <button className='text-white bg-black hover:bg-gray-800 transition-all rounded-full px-6 h-10 bg-gradient-to-r from-pink-500 to-violet-500 hover:scale-105 duration-300 cursor-pointer' onClick={handlesubmit}>Search Hotel</button>
      </form>
    </div>
  )
}

export default Searchbar
