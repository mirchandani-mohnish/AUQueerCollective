import React from "react";
import search from "../assets/Search.png"
// py-[4px] md:py-[8px] px-[15px]
const SearchBar = (props) => {
return (
  <div className='flex justify-between items-center w-full text-gray-300 '>
      <img alt=""
        src={search}
        className="h-5 w-5 absolute left-0 ml-2 fill-currentColor"
         />
      <input type="text" name="search" placeholder='Search Here' autoComplete='off' className='w-full px-9 py-2 font-semibold bg-light-greys rounded-lg placeholder-gray-500 focus:outline-0 focus:outline-blue-500' />
  </div>
);
};
export default SearchBar;



// const SearchBar = () => {
//   return (
//     <div className='relative bg-blue-300 p-1 text-white rounded border-2 border-blue-300'>
//       <img alt=""
//               src="./src/assets/Search.png"
//               className="h-5 w-5 absolute left-0 ml-2 fill-currentColor"
//             />
//       <input type="text" placeholder='Search...' className='ml-6 bg-transparent'></input>
//     </div>
//   );
//   };
//   export default SearchBar;