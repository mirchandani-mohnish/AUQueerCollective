import React from 'react';


// className={`mainContainer flex-1 h-auto mt-[15px] grid grid-flow-col auto-cols-max gap-4 justify-center ${pinSize}`}

function Pin({pinSize, imgSrc, name, link }) {
  return (
    <div className={`${pinSize} rounded-xl bg-[#444] m-[5px] cursor-pointer relative `}>
      {/* {console.log(pinSize)} */}
        <img src={imgSrc} alt="" className="mainPic w-full h-full object-cover" />
        <div className="content w-full h-[25px] md:h-[50px] bg-[rgba(255, 255, 255, 0.2)] absolute -b-[55px] left-0 backdrop-blur-sm flex items-center justify-between hover: bottom-0 duration-300 py-0 px-[15px] bg-black/70 ">
        <h3 className='text-white hover:{text-[#feffff] text-xs md:text-sm font-medium}'>{name}</h3>
        <div className="search bg-[#fb3874] p-1 md:p-2 rounded-full">
          <a href={link}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-3 w-3 md:h-5 md:w-5 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
            {/* <img
              src="https://firebasestorage.googleapis.com/v0/b/codewithvetriapi-c56e3.appspot.com/o/icons8-forward-arrow-100.png?alt=media&token=3f56e775-43c1-41d3-a0c4-90217b31b5be"
              alt="" className='h-3 w-3 md:h-5 md:w-5'
            /> */}
          </a>
        </div>
      </div>
    </div>
    
  );
}




export default Pin;