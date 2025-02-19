import React, { useState } from 'react';
import Slider from "react-slick";
import 'tailwindcss/tailwind.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoBed } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import styled from 'styled-components';
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { updateItem } from "../../lib/store"

const Header = () => {

    // const [isHovered, setIsHovered] = useState(false);

    const clipTextStyles = {
        background: 'linear-gradient(to bottom, black 50%, white 50%)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        backgroundClip: 'text',
        transform: 'scale(1)',
        filter: 'drop-shadow(15px 15px 5px rgba(0, 0, 0, 0.7))', // Apply shadow without affecting the white portion
        transition: 'transform 300ms, filter 300ms', // Smooth shadow transition

        
    };
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [Value,setValue] = React.useState({
        location: "Mohali",
        fromDate: null,
        toDate: null,
        RoomType: null,
        Rooms: 1,
    });

    function handlechange(type,e){
        setValue((value) => ({
            ...value,
            [type]: e.target.value
        })
    )}

    function handlesubmit(){
        console.log(Value,"Value")
        dispatch(updateItem(Value))
        navigate("/search")
    }

    return (
        <div className='container-fluid pt-9 relative top-5' style={{width: '96%',marginLeft: 'auto',marginRight: 'auto'}}>

    <div className="z-10 top-[1%] left-[20%] absolute focus:outline-none"> 
        <h1 className="text-9xl scale-x-150 tracking-wide font-primary" style={clipTextStyles} >
            TWIN TOWER
        </h1>
    </div>


        <div className='h-[800px] rounded-3xl border overflow-hidden mt-10 container-fluid relative'>
            <img src="../../public/sunlight.jpg" alt="sunlight" className='h-[1000px] w-full rounded-3xl overflow-hidden '/>
            <div className='grid grid-cols-2 inset-0 absolute'>
                <div className='flex flex-col justify-center items-center gap-20'>
                    <h1 className='text-white text-5xl font-primary text-left w-3/4 hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 hover:scale-110 duration-300 cursor-pointer  hover:drop-shadow-[20px_20px_5px_rgba(0,0,0,0.7)]'>Where you get Trapped in the Beauty of the World and Unforgettable Happiness!</h1>
                    <h4 className='text-white text-xl font-primary text-left w-3/4 hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 hover:scale-110 duration-300 cursor-pointer  hover:drop-shadow-[20px_20px_5px_rgba(0,0,0,0.7)]'>At Twin Tower, we believe that every journey is an opportunity for adventure,discovery, and unforgettable experiences.</h4>
                </div>

                <div className='flex items-center justify-center'>
                    <form className='container w-1/2 rounded-3xl bg-white hover:scale-105 duration-300 transition-all hover:shadow-[-10px_10px_12px_rgba(0,0,0,0.5)]' onSubmit={handlesubmit}>

                        <div className='row'>
                        <div className='col-md-12 flex items-center gap-4 text-2xl font-primary m-4 '>
                        <IoBed/>
                        <h2 className=' hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 hover:scale-110 duration-300 cursor-pointer'>Find Hotels</h2>
                        </div>

                        <div className='flex flex-col gap-2 text-md font-primary m-4'>
                        <label className='text-gray-500 hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 hover:scale-105 duration-300 cursor-pointer'>City or Hotel Name</label>
                        <input type="text" placeholder=" Name" className='bg-gray-100 h-10 rounded-lg outline-none hover:bg-gray-300 transition-all duration-300 ' onChange={(e)=> handlechange("location",e)}/>
                        </div>

                        <div className='row flex gap-2 m-4 text-md font-primary'>

                        <div className='col-md-6'>
                        <label className='text-gray-500 hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 hover:scale-105 duration-300 cursor-pointer'>Check-in</label>
                        <input type="date" placeholder='' className='bg-gray-100 h-10 rounded-lg outline-none hover:bg-gray-300 transition-all duration-300 w-[98%]' onChange={(e)=> handlechange("fromDate",e)}/>
                        </div>

                        <div className='col-md-6'>
                        <label className='text-gray-500 hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 hover:scale-105 duration-300 cursor-pointer'>Check-out</label>
                        <input type="date" placeholder='Time' className='bg-gray-100 h-10 rounded-lg outline-none hover:bg-gray-300 transition-all duration-300 w-36' onChange={(e)=>handlechange("toDate",e)}/>
                        </div>
                        </div>
                        


                        <div className='flex flex-col gap-2 text-md font-primary m-4'>
                        <label className='text-gray-500 hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 hover:scale-105 duration-300 cursor-pointer'>Guest Rooms</label>
                        <input type="text" placeholder='' className='bg-gray-100 h-10 rounded-lg outline-none hover:bg-gray-300 transition-all duration-300' onChange={(e)=>handlechange("Rooms",e)}/>
                        </div>

                        <div className='flex flex-col gap-2 text-md font-primary m-4'>
                        <label className='text-gray-500 hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 hover:scale-105 duration-300 cursor-pointer'>Room Type</label>
                        <select placeholder='' className='bg-gray-100 h-10 rounded-lg outline-none hover:bg-gray-300 transition-all duration-300' onChange={(e)=> handlechange("RoomType",e)}>
                        <option value={""}>Select</option>
                        <option value={"AC"}>AC</option>
                        <option value={"Non-AC"}>Non-AC</option>
                        </select>
                        </div>

                        <button className='text-white  bg-black hover:bg-gray-800  transition-all  rounded-full ml-4 w-[90%] mb-4 h-14  bg-gradient-to-r from-pink-500 to-violet-500 hover:scale-105 duration-300 cursor-pointer' onClick={(e)=>handlesubmit(e)}>Search Hotel</button>

                        </div>
                    </form>
                </div>
            </div>


        </div>
        </div>
    )
}

export default Header