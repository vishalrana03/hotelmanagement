import React from 'react'
import Input from '../../Components/Input'
import { BACKEND_URL } from '../../../lib/config'
const SellerSignin = ({authType}) => {
    const [formData,setFormData] = React.useState({
        email: "",
        password: ""
    })

    function handleChange({type,e}){
        setFormData({
            ...formData,
            [type]: e.target.value
        })
    }
    async function handleSubmit(){
        try {
            const response = await axios.post(`${BACKEND_URL}/v1/owner/signin`,formData)
            toast.success("Signin Successful")
            localStorage.setItem("token",response.data.token)
            localStorage.setItem("username",response.data.username)
            setTimeout(()=>{
                navigate("/seller/dashboard")
            },2000)
        } catch (error) {
            toast.error("invalid credentials")
            console.log(error)
        }
    }
  return (
    <div className='h-screen w-[full] flex justify-center items-center bg-gradient-to-tl from-pink-600 to bg-purple-600'>
        <div className='w-[600px] h-[500px] p-6'>

        <div className='flex flex-col gap-6'>

        <h1 className='text-white text-7xl text-center pt-3 font-bold'>SIGN IN</h1>
        <Input type="email" name="Email" id="email" onChange={(e)=>handleChange("email",e)}  />
        <Input type="password" name="Password" id="password" onChange={(e)=>handleChange("password",e)}  />
        <button className='text-2xl text-white bg-black p-2 rounded-lg' onChange={handleSubmit}>LOGIN</button>
        <p className='text-xl'>Don't have a account? <a className='cursor-pointer' onClick={()=>{authType("signup")}}>Signup</a></p>

        </div>
    </div>
    </div>
  )
}

export default SellerSignin