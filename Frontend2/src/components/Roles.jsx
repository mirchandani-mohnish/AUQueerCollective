import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Roles = () => {
  return (
    <div className='flex justify-center items-center  h-screen '>
        <div>
        <div className="h-[175px] w-[175px] bg-white rounded-full opacity-20 absolute -top-10 left-[20%]"></div>
        <div className="h-[375px] w-[375px] bg-transparent rounded-full border-2 border-[#96A7AF] opacity-20 absolute -top-16 -right-24"></div>
        <div className="h-[375px] w-[375px] bg-transparent rounded-full border-2 border-[#96A7AF] opacity-20 absolute -bottom-60 right-[30%]"></div>
        <div className="h-[200px] w-[400px] bg-transparent rounded-[50%] border-2 border-[#96A7AF] opacity-20 absolute  -top-8 -left-72 "></div>
        </div>
        

        <div className="items-center flex flex-col justify-center backdrop-blur-3xl font-sfpro w-[1200px] h-[600px] bg-gradient-to-r from-white/20 to-white/10 border border-white/30 rounded-3xl">
            <div className='text-[50px] flex text-white font-bold space-x-3'><p>Please tell us your</p> <p className='text-[#25C685]'>Role</p></div>
            <div className='h-[30px] w-[700px] border-t-2 border-white pb-20 mt-2'></div>
            <div className='flex items-center justify-center space-x-40'>
                <div className='flex items-center justify-center flex-col'>
                <div className='w-[225px] h-[225px] rounded-2xl bg-white'></div>
                <div className='text-[40px] text-white font-bold'>User</div>
                </div>
                <div className='flex items-center justify-center flex-col'>
                <div className='w-[225px] h-[225px] rounded-2xl bg-white'></div>
                <div className='text-[40px] text-white font-bold'>Admin</div>
                </div>
                
            </div>

            <div className='h-[50px] w-[50px] cursor-pointer ml-[80%] rounded-lg bg-[#25C685] text-white flex justify-center items-center'><ArrowForwardIcon fontSize="large" /></div>
        </div>

        

    </div>
  )
}

export default Roles