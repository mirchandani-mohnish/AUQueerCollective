import React from 'react';
import logo from "../assets/logo.svg"


const Register = () => {
  return (
    <div className="flex  py-16 justify-between px-32">
      
      <div className="h-[175px] w-[175px] bg-white rounded-full opacity-20 absolute -top-10 left-[20%]"></div>
      <div className="h-[375px] w-[375px] bg-transparent rounded-full border-2 border-[#96A7AF] opacity-20 absolute -top-16 -right-24"></div>
      <div className="h-[375px] w-[375px] bg-transparent rounded-full border-2 border-[#96A7AF] opacity-20 absolute -bottom-60 right-[30%]"></div>
      <div className="h-[200px] w-[400px] bg-transparent rounded-[50%] border-2 border-[#96A7AF] opacity-20 absolute  -top-8 -left-72 "></div>
      
      

      <div>
        <div><img src={logo} alt="logo"></img></div>
        <div className="flex flex-col -space-y-10">
          <p className="text-[110px] font-bold font-sfpro text-white ">Because</p>
          <p className="text-[110px] font-bold font-sfpro text-[#25C685] ">Events</p>
          <p className="text-[110px] font-bold font-sfpro text-white "  >Matter</p>
        </div>
      </div>
      <div className="backdrop-blur-3xl font-sfpro p-10 w-[600px] h-[600px] bg-gradient-to-r from-white/20 to-white/10 border border-white/30 rounded-3xl">
        <p className="text-2xl text-white">Register</p>
        <div className="h-[2px] w-[200px] bg-white my-3"></div>
        <p className="text-lg text-white mb-5">Welcome on board with us!</p>
        <div className="flex flex-col space-y-5">
          <div><p className="text-md text-white ">Username</p>
        <input type="text" className="w-full h-[40px] bg-white/20 rounded-lg border border-white/30 placeholder:text-white/70 p-3" placeholder="Enter your username"></input></div>
        <div><p className="text-md text-white ">Email</p>
        <input type="text" className="w-full h-[40px] bg-white/20 rounded-lg border border-white/30 placeholder:text-white/70 p-3" placeholder="Enter your email"></input></div>
        <div><p className="text-md text-white ">Password</p>
        <input type="text" className="w-full h-[40px] bg-white/20 rounded-lg border border-white/30 placeholder:text-white/70 p-3" placeholder="Enter your password"></input>
        </div>
        <div><p className="text-md text-white ">Location</p>
        <input type="text" className="w-full h-[40px] bg-white/20 rounded-lg border border-white/30 placeholder:text-white/70 p-3" placeholder="Enter your location"></input></div>
        </div>

        <div className="pt-10"><button className="bg-[#3ED598] text-white w-full h-[50px] rounded-lg">REGISTER</button></div>
        
        

      </div>
    </div>
  )
}

export default Register