// // import React from 'react';

// // const navLinks = [
// //   "Products",
// //   "Unmarshal 2.0",
// //   "$MARSH",
// //   "Roadmap",
// //   "Company",
// //   "Explorer",
// // ];

// // // ICONS as SVG placeholders for demo (replace with your own SVGs for perfect fidelity)
// // const icons = [
// //   <svg key={1} className="absolute left-16 top-24 w-20 h-20 opacity-20 blur-2xl z-0" viewBox="0 0 40 40">
// //     <circle cx="20" cy="20" r="19" fill="#fff" />
// //   </svg>,
// //   <svg key={2} className="absolute right-32 bottom-32 w-16 h-16 opacity-15 blur-xl z-0" viewBox="0 0 40 40">
// //     <rect x="5" y="5" width="30" height="30" fill="#dafe45" />
// //   </svg>,
// //   <svg key={3} className="absolute right-40 top-40 w-16 h-16 opacity-10 blur-2xl z-0" viewBox="0 0 40 40">
// //     <circle cx="20" cy="20" r="16" fill="#fff" />
// //   </svg>,
// // ];

// // export default function App() {
// //   return (
// //     <div className="min-h-screen w-full bg-[#0d0f12] relative font-sans overflow-x-hidden">
// //       {/* Background icons */}
// //       {icons}
// //       {/* Header with logo, centered nav, sign in */}
// //       <header className="flex items-center justify-between px-8 py-5 md:px-16 w-full z-10 relative">
// //         {/* logo and title */}
// //         <div className="flex items-center space-x-3 flex-none">
// //           <span className="bg-[#d8fe45] rounded-xl w-11 h-11 flex items-center justify-center mr-2">
// //             <span className="text-black font-black text-2xl">u</span>
// //           </span>
// //           <span className="text-xl text-white  font-semibold tracking-wide">Overlaps</span>
// //         </div>
// //         {/* nav */}
// //         <nav className="flex justify-center flex-1 gap-4 text-sm">
// //           {navLinks.map((link) => (
// //             <a
// //               key={link}
// //               href="#"
// //               className="px-3 py-1 rounded-full hover:bg-[#16181b] transition-all duration-150 bg-[#171923] bg-opacity-80 text-gray-200 font-semibold"
// //             >
// //               {link}
// //             </a>
// //           ))}
// //         </nav>
// //         {/* sign in */}
// //         <div className="flex-none">
// //           <button className="border border-white/25 rounded-full px-6 py-2 text-sm font-medium text-white bg-transparent hover:bg-white/5 transition shadow-inner">
// //             Sign In
// //           </button>
// //         </div>
// //       </header>

// //       {/* Main area */}
// //       <main className="flex flex-col items-center text-center mt-24 w-full z-10 relative">
// //         <span className="px-5 py-[6px] rounded-full bg-[#10121a] border border-[#23262f] text-[#dafe45] font-semibold text-xs tracking-widest mb-7 shadow-sm">
// //           POWERED BY AI
// //         </span>
// //         <h1 className="text-5xl lg:text-6xl font-semibold leading-[1.15] text-white mb-6 max-w-4xl mx-auto drop-shadow">
// //           Most Reliable Blockchain<br/>
// //           Data Infrastructure
// //         </h1>
// //         <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-12 font-normal tracking-wide">
// //           The easiest way to query Blockchain data from 35+ chains including Ethereum, BSC, Polygon
// //           <span className="text-white font-bold">{' '}to “AI Powered Blockchain Data."</span>
// //         </p>
// //         <div className="flex flex-row gap-7 justify-center items-center mb-10">
// //           <button className="bg-[#daff45] text-[#151c14] font-semibold text-base px-10 py-3 rounded-full shadow-lg shadow-[#daff45]/10 tracking-tight hover:bg-lime-400 transition">
// //             PARSER
// //           </button>
// //           <button className="bg-white text-black font-semibold text-base px-9 py-3 rounded-full shadow-md flex items-center gap-2 hover:bg-gray-100 transition">
// //             GET STARTED
// //             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 -mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //               <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// //             </svg>
// //           </button>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // }

// import React from "react";
// import { IoIosGitNetwork } from "react-icons/io";
// import { FaRobot } from "react-icons/fa";
// import { GiArtificialHive } from "react-icons/gi";
// import { BiBarChartAlt } from "react-icons/bi";
// import { TbAutomation } from "react-icons/tb";
// import { TbPlugConnected } from "react-icons/tb";
// import { FaRegLightbulb } from "react-icons/fa";
// const navLinks = [
//   "Products",
//   "Unmarshal 2.0",
//   "$MARSH",
//   "Roadmap",
//   "Company",
//   "Explorer",
// ];

// // ICONS as faint background SVGs
// const bgIcons = [
//   { className: "top-20 left-16", icon: <circle cx="20" cy="20" r="19" fill="#fff" /> },
//   { className: "top-52 right-24", icon: <rect x="5" y="5" width="30" height="30" fill="#dafe45" /> },
//   { className: "bottom-32 left-1/2 -translate-x-1/2", icon: <circle cx="20" cy="20" r="16" fill="#fff" /> },
// ];

// export default function Hero() {
//   return (
//     <div className="relative min-h-screen w-full overflow-hidden bg-[#0d0f12] font-inter text-white">
//       {/* ✅ Background Grid */}
//       <div
//         className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] z-0"
//       ></div>
//        <div className="bg-[#1B1D1E] absolute  top-20 right-[185px] z-10 opacity-50 p-5"><FaRobot className="text-gray-400 h-10 w-10"/></div>
//       <div className="bg-[#1B1D1E] absolute  top-60 right-16 z-10 opacity-50 p-5"><TbPlugConnected className="text-gray-400 h-10 w-10"/></div>
//       <div className="bg-[#1B1D1E] absolute  top-[400px] right-36 z-10 opacity-50 p-5"><FaRegLightbulb className="text-gray-400 h-10 w-10"/></div>
//         <div className="bg-[#1B1D1E] absolute  top-60 left-20 z-10 opacity-50 p-5"><BiBarChartAlt className="text-gray-400 h-10 w-10"/></div>
//             <div className="bg-[#1B1D1E] absolute  top-[400px]   left-40 z-10 opacity-50 p-5"><TbAutomation className="text-gray-400 h-10 w-10"/></div>
//           <div className="bg-[#1B1D1E] absolute  top-20 left-[200px] z-10 opacity-50 p-5"><IoIosGitNetwork className="text-gray-400 h-10 w-10"/></div>
//        <div className=" absolute h-[0.07px]   w-1/3 bg-amber-300  top-40 left-1/3 z-30 opacity-50 "></div>
//        <div className=" absolute h-3 w-3 rounded-full bg-amber-300  top-[155px] left-1/3  z-50 opacity-50 "></div>
      
      // {/* ✅ Floating Background Icons */}
      // {bgIcons.map((item, i) => ( 
      //   <svg
      //     key={i}
      //     viewBox="0 0 40 40"
      //     className={`absolute w-16 h-16 opacity-10 blur-lg z-0 ${item.className}`}
      //   >
      //     {item.icon}
      //   </svg>
      // ))}

//       {/* Header */}
//       <header className="relative z-10 flex items-center justify-between px-8 py-5 md:px-16">
//         {/* Logo */}
//         <div className="flex items-center space-x-3">
//           {/* <span className="bg-[#d8fe45] rounded-xl w-11 h-11 flex items-center justify-center mr-2">
//             <span className="text-black font-black text-2xl">u</span>
//           </span> */}
//           <span style={{fontFamily:"Philosopher"}} className="text-xl font-bold tracking-wide">OverlapsAI</span>
//         </div>

//         {/* Nav */}
//         <nav className="hidden lg:flex justify-center gap-4 bg-gray text-sm">
//           {navLinks.map((link) => (
//             <a
//               key={link}
//               href="#"
//               className="px-4 py-1 rounded-full hover:bg-[#16181b] transition  text-gray-200 font-semibold"
//             >
//               {link}
//             </a>
//           ))}
//         </nav>

//         {/* Sign In */}
//         <button className="border border-white/25 rounded-full px-6 py-2 text-sm font-medium bg-transparent hover:bg-white/5 transition">
//           Sign In
//         </button>
//       </header>

//       {/* Hero Content */}
//       <main className="relative z-10 flex flex-col items-center text-center mt-18">
//         <span className="px-5 py-[6px] -mt-1 rounded-full bg-[#10121a] border border-[#23262f] text-[#dafe45] font-semibold text-xs tracking-widest mb-7 shadow-sm">
//           ✦ POWERED BY AI ✦
//         </span>

//         <h1 className="text-5xl lg:text-6xl mt-6 2xl:text-7xl font-semibold leading-[1.15] mb-6 max-w-4xl 2xl:max-w-7xl mx-auto">
//           Most Reliable AI-Powered<br />Automation
//         </h1>

//         <p className="text-gray-300 text-lg mt-2  max-w-2xl mx-auto mb-12 font-normal tracking-wide">
//          Automate support, onboarding & ops with AI — purpose-built for fast-growing SaaS teams
//           <span className="text-white font-bold">
//             {" "}
//             to “Save 20+ Hours/Week with AI Automation 
//           </span>
//         </p>

//         <div className="flex flex-row gap-7 justify-center items-center mb-10">
//           <button className="bg-[#daff45] text-[#151c14] font-semibold text-base px-10 py-3 rounded-full shadow-lg shadow-[#daff45]/10 tracking-tight hover:bg-lime-400 transition">
//             PARSER
//           </button>
//           <button className="bg-white text-black font-semibold text-base px-9 py-3 rounded-full shadow-md flex items-center gap-2 hover:bg-gray-100 transition">
//             GET STARTED
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 -mr-2"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 d="M5 12h14M12 5l7 7-7 7"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// }


import React from "react";
import { IoIosGitNetwork } from "react-icons/io";
import { FaRobot } from "react-icons/fa";
import { GiArtificialHive } from "react-icons/gi";
import { BiBarChartAlt } from "react-icons/bi";
import { TbAutomation, TbPlugConnected } from "react-icons/tb";
import { FaRegLightbulb } from "react-icons/fa";
  import { Link } from "react-router-dom";
import Navbar from "./Navbar";


export default function Hero() {

  const bgIcons = [
  { className: "top-20 left-16", icon: <circle cx="20" cy="20" r="19" fill="#fff" /> },
  { className: "top-52 right-24", icon: <rect x="5" y="5" width="30" height="30" fill="#dafe45" /> },
  { className: "bottom-32 left-1/2 -translate-x-1/2", icon: <circle cx="20" cy="20" r="16" fill="#fff" /> },
];
  return (
    <div id="home" className="relative min-h-screen w-full overflow-hidden bg-[#0d0f12] font-inter text-white">
      {/* ✅ Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] z-0" />

      {/* ✅ Background Icons (hidden on small) */}
      <div className="hidden md:block bg-[#1B1D1E] absolute top-20 right-[10%] z-10 opacity-50 p-5 rounded-xl">
        <FaRobot className="text-gray-400 h-10 w-10" />
      </div>
      <div className="hidden md:block bg-[#1B1D1E] absolute top-60 right-8 z-10 opacity-50 p-5 rounded-xl">
        <TbPlugConnected className="text-gray-400 h-10 w-10" />
      </div>
      <div className="hidden md:block bg-[#1B1D1E] absolute top-[400px] right-24 z-10 opacity-50 p-5 rounded-xl">
        <FaRegLightbulb className="text-gray-400 h-10 w-10" />
      </div>
      <div className="hidden md:block bg-[#1B1D1E] absolute top-60 left-10 z-10 opacity-50 p-5 rounded-xl">
        <BiBarChartAlt className="text-gray-400 h-10 w-10" />
      </div>
      <div className="hidden md:block bg-[#1B1D1E] absolute top-[400px] left-28 z-10 opacity-50 p-5 rounded-xl">
        <TbAutomation className="text-gray-400 h-10 w-10" />
      </div>
      <div className="hidden md:block bg-[#1B1D1E] absolute top-20 left-[180px] z-10 opacity-50 p-5 rounded-xl">
        <IoIosGitNetwork className="text-gray-400 h-10 w-10" />
      </div>

      {/* Decorative Line */}
      <div className="hidden md:block absolute h-[0.07px] w-1/3 bg-amber-300 top-40 left-1/3 z-30 opacity-50" />
      <div className="hidden md:block absolute h-3 w-3 rounded-full bg-amber-300 top-[155px] left-1/3 z-50 opacity-50" />
        {/* ✅ Floating Background Icons */}
      {bgIcons.map((item, i) => ( 
        <svg
          key={i}
          viewBox="0 0 40 40"
          className={`absolute w-16 h-16 opacity-10 blur-lg z-0 ${item.className}`}
        >
          {item.icon}
        </svg>
      ))}
      {/* Header */}
      
      <Navbar/>

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col items-center text-center mt-4 sm:mt-18  px-6">
        <span className="px-5 py-[6px] -mt-1 rounded-full bg-[#10121a] border border-[#23262f] text-[#dafe45] font-semibold text-xs tracking-widest mb-7 shadow-sm">
          ✦ POWERED BY AI ✦
        </span>

        <h1 className="text-4xl cursor-hover md:mt-8 sm:text-5xl lg:text-6xl 2xl:text-7xl font-semibold leading-tight mb-6 max-w-3xl sm:max-w-4xl 2xl:max-w-6xl mx-auto">
          Most Reliable AI-Powered<br className="hidden sm:block" /> Automation
        </h1>

        <p className="text-gray-300 text-base sm:text-lg mt-2 max-w-md sm:max-w-2xl mx-auto mb-8 md:mb-12 font-normal tracking-wide">
          Automate support, onboarding & ops with AI — purpose-built for fast-growing SaaS teams
          <span className="text-white font-bold">
            {" "}
            to “Save 20+ Hours/Week with AI Automation”
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-5 sm:gap-7 justify-center items-center  md:mb-10">
          <Link to='/loom'>
          <button className=" transition-all duration-300 ease-in-out border border-white/25    hover:text-black hover:border-[#dafe45] hover:scale-105 bg-[#daff45]  text-[#151c14] font-semibold text-base px-28 sm:px-10 py-3 rounded-full shadow-lg shadow-[#daff45]/10 tracking-tight hover:bg-lime-400  w-full sm:w-auto">
            Demo
          </button>
          </Link>
            <Link to='/book-meeting'>
          <button className="bg-white transition-transform duration-300 ease-in-out hover:scale-105  text-black font-semibold text-base px-16 sm:px-9 py-3 rounded-full shadow-md flex items-center justify-center gap-2 hover:bg-gray-100  w-full sm:w-auto">
            Book Your Audit
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 -mr-1 sm:-mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M5 12h14M12 5l7 7-7 7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
