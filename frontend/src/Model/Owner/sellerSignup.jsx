import React from 'react'
import Input from '../../Components/Input'
import { BACKEND_URL } from '../../../lib/config' 
import { toast, Toaster } from 'sonner'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const SellerSignup = ({authType}) => {
    const navigate = useNavigate()
    const [formData,setFormData] = React.useState({
        name: "",
        email: "",
        phone: null,
        idProof: "",
        password: ""
    })

    function handleChange(type,e){
        setFormData({
            ...formData,
            [type]: e.target.value
        })
    }
    async function handleSubmit(){
        const data = {
            ...formData,
            phone: parseInt(formData.phone)
        }
        try {
            const response = await axios.post(`${BACKEND_URL}/owner/signup`,data)
            toast.success("Signup Successful")
            localStorage.setItem("token",response.data.token)
        localStorage.setItem("username",response.data.username)
            setTimeout(()=>{
                navigate("/seller/add")
            },2000)
        } catch (error) {
            toast.error("invalid credentials")
            console.log(error)
        }

    }
  return (
    <div className='h-screen w-[full] flex justify-center items-center bg-gradient-to-br from-pink-600 to bg-purple-600'>
        <div className='w-[600px] h-[500px] p-6'>
        <div className='flex flex-col gap-6'>

        <h1 className='flex items-center justify-center text-white text-7xl font-bold'>SIGN UP</h1>
        <Input type="text" name="Name" id="name" onChange={(e)=>handleChange("name",e)}  />
        <Input type="email" name="Email" id="email" onChange={(e)=>handleChange("email",e)}  />
        <Input type="number" name="Phone" id="phone" onChange={(e)=>handleChange("phone",e)}  />
        <Input type="text" name="Id Proof" id="idproof" onChange={(e)=>handleChange("idProof",e)}  />
        <Input type="password" name="Password" id="password" onChange={(e)=>handleChange("password",e)}  />
        <button className='text-2xl text-white bg-black p-2 rounded-lg' onClick={handleSubmit}>Sign Up</button>
        <p className='text-xl'>Already have an account? <a className='cursor-pointer' onClick={()=>{authType("signin")}}>Signin</a></p>
        <Toaster />

        </div>
        </div>
    </div>
  )
}

export default SellerSignup