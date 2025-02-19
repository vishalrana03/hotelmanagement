import React from 'react'
import Input from '../../Components/Input'
import axios from "axios"
import { BACKEND_URL } from '../../../lib/config' 
import {Toaster, toast} from "sonner"
import {Link, useNavigate} from "react-router-dom"
const UserSignup = ({position}) => {
    const navigate = useNavigate()
    const [formData,setFormData] = React.useState({
      name: "",
      username: "",
      email: "",
      password: ""
    })

    function handleChange(type,e){
      setFormData(
        {
          ...formData,
          [type]: e.target.value
        }
      )
    }

    async function handleSubmit(){
      try {
        const response = await axios.post(`${BACKEND_URL}/user/signup`,formData)
        localStorage.setItem("token",response.data.token)
        toast.success("Signup Successful")
        setTimeout(()=>{
          navigate("/")
        },2000)
      } catch (error) {
        toast.error("invalid credentials")
        console.log("error while signing up",error)
      }
    }
  return (
<div className="flex items-center justify-center min-h-screen">
  <div className=" w-[400px] p-6">
    <div className="flex flex-col gap-2 mb-4">
      <h1 className="text-center text-3xl font-semibold">SIGN UP</h1>
    </div>
    <div className="flex flex-col gap-4">
      <Input type="text" name="Name" id="name" onChange={(e) => handleChange("name", e)} />
      <Input type="text" name="Username" id="username" onChange={(e) => handleChange("username", e)} />
      <Input type="email" name="Email" id="email" onChange={(e) => handleChange("email", e)} />
      <Input type="password" name="Password" id="password" onChange={(e) => handleChange("password", e)} />
      <button
        className="w-full bg-secondary hover:bg-primary transition-all ease-linear duration-300 h-10 rounded-md"
        onClick={handleSubmit}
        style={{
          background: 'linear-gradient(135deg, #6b73ff 0%, #000dff 100%)',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'background 3s ease-in-out',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.background = 'linear-gradient(135deg, #000dff 0%, #6b73ff 100%)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.background = 'linear-gradient(135deg, #6b73ff 0%, #000dff 100%)';
        }}
      >
        Signup
      </button>
      <p className="text-white">
        Already have an account?{" "}
        <a className="underline cursor-pointer" onClick={() => position("signin")}>
          Sign in
        </a>
      </p>
    </div>
  </div>
  <Toaster/>
</div>


  )
}

export default UserSignup