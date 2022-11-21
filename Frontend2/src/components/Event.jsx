import React from 'react'
import bell from "../assets/bell.png"
import calendar from "../assets/calendar.png"
import chotadaku from "../assets/chotadaku.png"
import mohnish from "../assets/mohnish.png"

function Event() {
  return (
        <div className='flex justify-between items-center w-full h-full text-gray-300 flex-row gap-3'>
        <div className='top-0 w-4/5 h-full  flex flex-1 flex-col gap-4 overflow-scroll scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100  mt-4'>
        <div className='text-4xl font-semibold'>Global World Quiz</div>
        <div className='text-xl'>32nd August 2022</div>
        <div className='text-lg'>12:00 A.M - 3:00 A.M</div>
        <div className='flex flex-row gap-3'>
            <div>
                <button className='w-[150px] h-[40px] bg-dark-greys rounded-lg text-md font-medium flex justify-center items-center space-x-2 '><p>Register</p>
                </button>
            </div>
            <div>
                <button className='w-[40px] h-[40px] bg-dark-greys rounded-lg text-md font-medium flex justify-center items-center space-x-2 '><img src={bell} alt=""/>
                </button>
            </div>
            <div>
                <button className='w-[40px] h-[40px] bg-dark-greys rounded-lg text-md font-medium flex justify-center items-center space-x-2 '><img src={calendar} alt=""/>
                </button>
            </div>
        </div>
        <div className='text-md text-justify mr-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem</div>
        <div className='text-2xl font-semibold'>Speakers</div>
        <div className='flex flex-row gap-12 items-center'>
            <div className='flex flex-col gap-2 justify-center items-center'>
            <img src={chotadaku} alt="" className='rounded-full w-40 h-40'/>
            <p>ChotaDaku</p>
            </div>
            <div className='flex flex-col gap-2 justify-center items-center'>
            <img src={mohnish} alt="" className='rounded-full w-40 h-40'/>
            <p>Mohnish</p>
            </div>
        </div>
        <div className='text-2xl font-semibold'>Extra jankari</div>
        <div className='text-md text-justify mr-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem</div>
        </div>
        <div className='top-0 p-7 pt-5  bg-gradient-to-r from-white/20 to-white/5 w-1/4 h-full rounded-t-3xl'>
            <div className='flex flex-col flex-1 gap-8 h-full '>
            <div className='relative  h-64 bg-yellow-500 rounded-2xl drop-shadow-lg'></div>
            <div className='text-lg'>Time Duration : 3 hrs</div>
            <div className='text-lg'>Cost : Muft ka</div>
            <div className='text-lg'>Topics : Budhapa, Motapa, Akelapan</div>
            </div>

        </div>
    </div>
  )
}

export default Event;





// import React, {useState} from 'react'

// const Event = () => {
// return (
//   <div className='flex justify-between items-center w-full h-full text-gray-300 border-2 border-red-600 flex-row gap-5'>
//       <div className='relative top-0 w-3/5 h-full border-2 border-yellow-400 flex flex-1 flex-col gap-2'>
//         <div className='text-4xl'>Global World Quiz</div>
//         <div className='text-2xl'>32nd August 2022</div>
//         <div className='text-2xl'>12:00 A.M - 3:00 A.M</div>
//         <div classname="flex flex-col gap-1">
//           <div>
//               <button className='w-[150px] h-[40px] bg-dark-greys rounded-lg text-md font-medium flex justify-center items-center space-x-2 '><p>Register</p>
//               </button>
//           </div>
//           <div>
//               <button className='w-[40px] h-[40px] bg-dark-greys rounded-lg text-md font-medium flex justify-center items-center space-x-2 '><img src="./src/assets/bell.png" alt=""/>
//               </button>
//           </div>
//           <div>
//               <button className='w-[40px] h-[40px] bg-dark-greys rounded-lg text-md font-medium flex justify-center items-center space-x-2 '><img src="./src/assets/calendar.png" alt=""/>
//               </button>
//           </div>
//         </div>
//       </div>
//       <div className='relative top-0 w-2/5 border-2 border-yellow-400 h-full'>dfdbfjsdksn</div>
//   </div>
// );
// };
// export default Event;



// <div className='flex gap-3 w-full h-full'>
//         <div className='flex-1 flex-col text-white gap-8'>
//             <div className='hover:{text-[#feffff] text-8xl md:text-sm font-bold'>Global World Quiz</div>
//             <div className='text-lg md:text-sm font-medium'>32nd August 2022</div>
//             <div className='text-lg md:text-sm font-medium'>12:00 AM - 3:00 A.M</div>
//             <div className='flex gap-3'>
//                 <div className='bg-dark-greys rounded-lg content-center text-white w-24 items-center'>Register</div>
//                 <div className='bg-dark-greys rounded-lg w-9 h-9 p-2'>
//                 <img alt="" src={bell} className=" w-5 h-5" />
//                 </div>
//                 <div className='bg-dark-greys rounded-lg w-9 h-9 p-2'>
//                 <img alt="" src={calendar} className=" w-5 h-5" />
//                 </div>
//             </div>
//             <div className='text-md md:text-sm'>
//             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
//             </div>
//             <div className='text-lg'>Speakers</div>
//             <div className='flex flex-col gap-4'>
//                 <div className='flex flex-1 flex-col gap-3'>
//                     <div>
//                         <img src="/src/assets/Folder.png" alt="" className='h-[40px] w-[40px]' />
//                         <div className='text-md'>Chota Daku</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>