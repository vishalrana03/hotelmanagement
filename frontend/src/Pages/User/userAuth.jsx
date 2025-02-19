import React, { useState } from 'react' 
import UserSignup from '../../Model/User/userSignup' 
import UserSignin from '../../Model/User/userSignIn' 
import hotel from "/authbg.jpeg" 
import scenery from "../../../public/footer1.jpg" 
import sunlight from "../../../public/sunlight.jpg" 
import { useLocation } from 'react-router-dom'

const UserAuth = () => { 
  const location  = useLocation()
  console.log(location.state)

  const [position,setPosition] = useState(location.state.name) 
  return ( 
  <div className='relative'> 
  <div className=' z-0 min-h-screen grid grid-cols-2 ' 
  style={{ backgroundImage: `url(${scenery})`, backgroundSize: 'cover', backgroundPosition: 'center' }}> 
  <UserSignup position={setPosition} /> 
  <UserSignin position={setPosition} /> 
  </div> 
  <div className={` z-10 min-h-screen w-[50%] absolute transition-all ease-linear duration-300 top-0 ${position==="signup"? "translate-x-[50vw]":"translate-x-0"}`} 
  style={{ backgroundImage: `url(${sunlight})`, backgroundSize: 'cover', backgroundPosition: position === "signup" ? "right" : "left" }} > 
        <h1 className="z-30 flex justify-center items-center text-white text-9xl w-[100%] h-screen">
          {position === "signup" ? "SIGN UP" : "SIGN IN"}
        </h1>  </div> 
  </div> 
  ) } 
  export default UserAuth