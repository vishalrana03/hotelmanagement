import React from 'react'
import { useNavigate } from 'react-router-dom'

const DropdownLinks = [
  {
    id: 1,
    name: "Signin",
    // link: "/user/signin",
    link: "/auth",
    state:"signin"
  },
  {
    id: 2,
    name: "Signup",
    // link: "/user/signup",
    link: "/auth",
    state: "signup"
  },

]


const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav className ="bg-black h-15 flex justify-between">

      {/* left info */}
      <div className=" flex items-center pl-6 ">

        {/* logo */}
        <div>
          <img src="../../public/logo.png" alt="logo" className="h-16 hover:scale-125 duration-300 cursor-pointer"/>
        </div>

        {/* name */}
        <div>
          <h1 className="text-white hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 text-3xl font-bold hover:scale-110 duration-300 cursor-pointer">TWIN TOWER</h1>
        </div>

      </div>

        {/* right info */}
      <li className='group cursor-pointer relative'>
      <div className='flex pr-12 items-center justify-end pb-5'>
      <img src="../../public/mark.png" alt="mark" className='h-10 hover:scale-110 duration-300 cursor-pointer hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.8),0_0_20px_10px_rgba(0,0,255,0.6)] rounded-full transition-all hover:border-5 hover:border-white border-blue-500 border-2 p-0.5'/>
      </div>
      {/* dropdown menu */}
      <div className='absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md right-5'>
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a onClick={()=>{navigate(data.link,{state: {name: data.state}})}}
                    className='inline-block w-full  rounded-md p-2 hover:bg-blue-400/20 hover:scale-90 duration-300 pl-3 hover:font-semibold hover:border-l-4 hover:border-blue-500'>
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            </li>
    </nav>
  )
}

export default Navbar