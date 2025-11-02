// // import React from "react";

// // export default function JoinCommunity() {
// //   return (
// //     <div className="min-h-screen bg-[#17181A] flex items-center justify-center px-6 py-14 font-sans">
// //       <div className="w-full max-w-6xl grid md:grid-cols-2 gap-6">
// //         {/* Left side */}
// //         <div className="flex flex-col justify-center h-full">
// //           <span className="inline-block text-xs rounded-full bg-[#222324] px-4 py-1 mb-6 text-gray-200 tracking-wide font-semibold shadow-sm w-fit">
// //             OUR STATS SO FAR
// //           </span>
// //           <h1 className="text-white font-light text-4xl md:text-5xl mb-6 leading-[1.12]">
// //             Join The<br />
// //             Community Of<br />
// //             Million
// //           </h1>
// //           <button className="mt-1 w-fit bg-[#e4ff54] hover:bg-[#d5f33c] text-[#222324] rounded-full px-8 py-3 font-semibold text-base tracking-wider flex items-center gap-2 shadow-sm transition">
// //             JOIN NOW
// //             <span className="ml-1 text-lg font-bold">&#8594;</span>
// //           </button>
// //         </div>
// //         {/* Right side: stats */}
// //         <div className="flex flex-col justify-center h-full gap-8">
// //           <div>
// //             <div className="uppercase tracking-widest text-xs text-[#BDBDBD] mb-2 flex items-center">
// //               REQUESTS SERVED
// //               <div className="flex-1 h-px bg-[#23262F] ml-2" />
// //             </div>
// //             <div className="text-[2.8rem] font-light leading-none text-[#9fa7f9] mb-1" style={{ letterSpacing: '0.03em' }}>
// //               <span className="font-light text-[3.2rem] text-[#9fa7f9]">11</span> <span className="text-[#9fa7f9] font-light text-[2.8rem]">Billion</span>
// //             </div>
// //           </div>
// //           <div>
// //             <div className="uppercase tracking-widest text-xs text-[#BDBDBD] mb-2 flex items-center">
// //               CHAINS INDEXED
// //               <div className="flex-1 h-px bg-[#23262F] ml-2" />
// //             </div>
// //             <div className="text-[2.7rem] text-[#d9ff57] font-light leading-none">
// //               35<span className="font-light text-[2rem] align-super">+</span>
// //             </div>
// //           </div>
// //           <div>
// //             <div className="uppercase tracking-widest text-xs text-[#BDBDBD] mb-2 flex items-center">
// //               CLIENTS SERVED
// //               <div className="flex-1 h-px bg-[#23262F] ml-2" />
// //             </div>
// //             <div className="text-[2.5rem] text-[#97999a] font-light leading-none">
// //               4100<span className="font-light text-[2rem] align-super">+</span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import React from "react";

// export default function JoinCommunity() {
//   return (
//     <div className="min-h-screen w-full bg-gradient-to-b from-[#101113] to-[#1C1D20] flex items-center justify-center px-10 py-20 font-sans">
//       <div className="w-full max-w-7xl grid md:grid-cols-2 gap-16 items-center">
        
//         {/* Left side */}
//         <div className="flex flex-col justify-center h-full">
//           <span className="inline-block text-xs rounded-full bg-[#222324] px-4 py-1 mb-6 text-gray-200 tracking-wide font-semibold shadow-sm w-fit">
//             OUR STATS SO FAR
//           </span>

//           <h1 className="text-white font-light text-5xl md:text-6xl leading-tight mb-8">
//             Join The <br />
//             Community Of <br />
//             <span className="text-[#E4FF54] font-semibold">Millions</span>
//           </h1>

//           <p className="text-gray-400 text-base mb-8 leading-relaxed max-w-md">
//             Be part of the next wave of innovation — where developers, investors,
//             and enthusiasts connect to build the decentralized future together.
//           </p>

//           <button className="mt-1 w-fit bg-[#E4FF54] hover:bg-[#D5F33C] text-[#222324] rounded-full px-10 py-3 font-semibold text-base tracking-wider flex items-center gap-3 shadow-lg shadow-[#E4FF54]/20 transition-transform hover:scale-105">
//             JOIN NOW
//             <span className="ml-1 text-lg font-bold">&#8594;</span>
//           </button>
//         </div>

//         {/* Right side: stats */}
//         <div className="flex flex-col justify-between h-full gap-12">
//           <div>
//             <div className="uppercase tracking-widest text-xs text-[#BDBDBD] mb-2 flex items-center">
//               REQUESTS SERVED
//               <div className="flex-1 h-px bg-[#23262F] ml-2" />
//             </div>
//             <div className="text-[3rem] font-light leading-none text-[#9FA7F9] mb-1">
//               11 <span className="text-[#9FA7F9] text-[2.5rem]">Billion+</span>
//             </div>
//           </div>

//           <div>
//             <div className="uppercase tracking-widest text-xs text-[#BDBDBD] mb-2 flex items-center">
//               CHAINS INDEXED
//               <div className="flex-1 h-px bg-[#23262F] ml-2" />
//             </div>
//             <div className="text-[2.8rem] text-[#D9FF57] font-light leading-none">
//               35<span className="font-light text-[2rem] align-super">+</span>
//             </div>
//           </div>

//           <div>
//             <div className="uppercase tracking-widest text-xs text-[#BDBDBD] mb-2 flex items-center">
//               CLIENTS SERVED
//               <div className="flex-1 h-px bg-[#23262F] ml-2" />
//             </div>
//             <div className="text-[2.8rem] text-[#97999A] font-light leading-none">
//               4100<span className="font-light text-[2rem] align-super">+</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { Link } from 'react-router-dom';
// You can place this SVG component inside JoinComminity.jsx or import it
const ArrowIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={2.5} 
    stroke="currentColor" 
    className="w-5 h-5"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);


function JoinComminity() {
  return (
    // Main container with the exact dark background color
    <div className="bg-[#0d0f12] min-h-screen text-white font-sans flex items-center justify-center p-8">
      
      {/* Stats section container with responsive flex layout */}
      <div className="flex flex-col lg:flex-row w-full lg:max-w-6xl 2xl:max-w-[90%]">

        {/* Left Content Block */}
        <div className="flex flex-col justify-center lg:w-1/2  lg:pr-12 text-center lg:text-left items-center lg:items-start">
          <p className="text-sm text-gray-400 tracking-[0.2em] mb-4">
            OUR STATS SO FAR
          </p>
          <h1 className="text-5xl md:text-7xl font-normal leading-tight mb-8">
            Join The <br /> Community Of <br /> Million
          </h1>
            <Link to='/book-meeting'>
                    <button className="transition-all duration-300 ease-in-out border border-white/25    hover:text-black hover:border-[#dafe45] hover:scale-105 bg-[#daff45]  font-bold text-black w-full lg:w-full rounded-full px-6 py-3 2xl:px-4 2xl:py-4 text-sm 2xl:text-lg transition">
                    Join Now
                    </button>
                    </Link>
        </div>

        {/* Right Content Block (Stats) */}
        <div className="
          flex flex-col justify-around 
          lg:w-1/2 lg:pl-12 
          mt-16 lg:mt-0 
          pt-16 lg:pt-0
          border-t border-gray-800 lg:border-t-0  lg:border-gray-800
          text-center lg:text-left
        ">
          {/* Stat Item 1 */}
          <div className="mb-10 lg:mb-0">
            <div className="flex items-center w-full mb-2">
              <p className="text-sm text-gray-400 tracking-[0.2em] uppercase mr-4 whitespace-nowrap">REQUESTS SERVED</p>
              {/* === UPDATED LINE WITH DOT === */}
              <div className="flex items-center flex-grow">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
                <div className="h-px flex-grow bg-gray-600"></div>
              </div>
            </div>
         <p className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-[#9897FF] to-[#000000] bg-clip-text text-transparent">
  11K
</p>

          </div>

          {/* Stat Item 2 */}
          <div className="mb-10 lg:mb-0">
            <div className="flex items-center w-full mb-2">
              <p className="text-sm text-gray-400 tracking-[0.2em] uppercase mr-4 whitespace-nowrap">CHAINS INDEXED</p>
              {/* === UPDATED LINE WITH DOT === */}
              <div className="flex items-center flex-grow">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
                <div className="h-px flex-grow bg-gray-600"></div>
              </div>
            </div>
            <p className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-[#D1E83A] to-[#000000] bg-clip-text text-transparent">35+</p>
          </div>

          {/* Stat Item 3 */}
          <div>
            <div className="flex items-center w-full mb-2">
              <p className="text-sm text-gray-400 tracking-[0.2em] uppercase mr-4 whitespace-nowrap">CLIENTS SERVED</p>
              {/* === UPDATED LINE WITH DOT === */}
              <div className="flex items-center flex-grow">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
                <div className="h-px flex-grow bg-gray-600"></div>
              </div>
            </div>
            <p className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-[#99989B] to-[#000000] bg-clip-text text-transparent">41+</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default JoinComminity;