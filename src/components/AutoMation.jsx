// // import React, { useEffect } from "react";
// // import { gsap } from "gsap";

// // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // const features = [
// //   {
// //     title: "Smart Scheduling",
// //     desc: "Syncs seamlessly with Google & Outlook to book meetings at the perfect time — no back-and-forth emails",
// //   },
// //   {
// //     title: "Auto-Reminders",
// //     desc: "Never miss a deadline again with smart reminders that adapt to your workflow",
// //   },
// //   {
// //     title: "To-Do Tracking",
// //     desc: "Turn your thoughts into actionable checklists that update in real time across all devices.",
// //   },
// //   {
// //     title: "Cross-Device Sync",
// //     desc: "Stay organized anywhere — your tasks and reminders follow you from desktop to mobile automatically.",
// //   },
// // ];

// // // You may replace with a real star/circle icon SVG for total match
// // const FeatureIcon = () => (
// //   <span className="inline-block rounded-full border-white border-[2px] p-0.5 mr-3 align-middle">
// //     <svg width="16" height="16" viewBox="0 0 16 16" className="inline align-middle">
// //       <circle cx="8" cy="8" r="7" stroke="#fff" strokeWidth="2" fill="none" />
// //       <path d="M8 4v2M8 10v2M4 8h2M10 8h2M5.5 5.5L7 7M9 9l1.5 1.5M5.5 10.5L7 9M9 7l1.5-1.5" stroke="#fff" strokeWidth="1.2"/>
// //     </svg>
// //   </span>
// // );

// // export default function Automation() {
// //   const boxRef = React.useRef(null);
// //  useEffect(() => {
// //     gsap.fromTo(
// //       boxRef.current,
// //       { y: 200, opacity: 0 },       // 👈 start from below with opacity 0
// //       {
// //         y: 0,
// //         opacity: 1,
// //         duration: 1,
// //         ease: "power3.out",
       
// //         scrollTrigger: {
// //           trigger: boxRef.current,
// //           start: "top 15%",   // when box is 85% down the viewport

// //            yoyo: true,
// //            repeat: 0,
// //            scrub: true,
// //         },
// //       }
// //     );
// //   }, []);
// //   return (
// //     <div className="min-h-screen bg-[#0d0f12]  flex items-center justify-center px-16  py-16">
// //       <div className="flex flex-col md:flex-row items-center w-full max-w-8xl justify-between gap-4 md:gap-8">
// //         {/* Text & Features */}
// //         <div className="flex-1">
// //           <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">Let Your AI Handle the Busywork</h1>
// //           <p className="text-gray-200 mb-6 text-lg">
// //             Free up your time with an intelligent agent that takes care of scheduling, reminders, 
// //             and repetitive tasks — so you can focus on what truly matters.
// //           </p>
// //           <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 mb-8">
// //             {features.map((feature, i) => (
// //               <div key={i} className="">
// //                 <div className="flex items-center mb-2">
// //                   <FeatureIcon />
// //                   <span className="text-white font-bold text-base">{feature.title}</span>
// //                 </div>
// //                 <p className="text-gray-200 text-sm">{feature.desc}</p>
// //               </div>
// //             ))}
// //           </div>
// //           <button className="mt-2 bg-[#daff45] hover:bg-yellow-300 text-[#432910] font-semibold py-3 px-5 rounded-lg text-lg shadow transition">
// //             Automate My Tasks Now
// //           </button>
// //         </div>
// //         {/* Right: Robot */}
// //         <div className="flex-1 flex justify-center items-center">
// //           <img
// //             src="AutomationRobot.png "
// //             ref={boxRef}
// //             alt="Robot"
// //             className="w-full .automation-container  h-full object-contain drop-shadow-2xl"
          
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const features = [
//   {
//     title: "Smart Scheduling",
//     desc: "Syncs seamlessly with Google & Outlook to book meetings at the perfect time — no back-and-forth emails",
//   },
//   {
//     title: "Auto-Reminders",
//     desc: "Never miss a deadline again with smart reminders that adapt to your workflow",
//   },
//   {
//     title: "To-Do Tracking",
//     desc: "Turn your thoughts into actionable checklists that update in real time across all devices.",
//   },
//   {
//     title: "Cross-Device Sync",
//     desc: "Stay organized anywhere — your tasks and reminders follow you from desktop to mobile automatically.",
//   },
// ];

// const FeatureIcon = () => (
//   <span className="inline-block rounded-full border-white border-[2px] p-0.5 mr-3 align-middle">
//     <svg width="16" height="16" viewBox="0 0 16 16" className="inline align-middle">
//       <circle cx="8" cy="8" r="7" stroke="#fff" strokeWidth="2" fill="none" />
//       <path d="M8 4v2M8 10v2M4 8h2M10 8h2M5.5 5.5L7 7M9 9l1.5 1.5M5.5 10.5L7 9M9 7l1.5-1.5" stroke="#fff" strokeWidth="1.2"/>
//     </svg>
//   </span>
// );

// export default function Automation() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const elements = sectionRef.current.querySelectorAll(".animate-on-scroll");

//     elements.forEach((el, i) => {
//       gsap.fromTo(
//         el,
//         { y: 100, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 0.8,
//           delay: i * 0.1,  // stagger effect
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: el,
//             start: "top 85%",
//             toggleActions: "play none none reverse",
//           },
//         }
//       );
//     });
//   }, []);

//   return (
//     <div
//       ref={sectionRef}
//       className="min-h-screen bg-[#0d0f12] flex items-center justify-center px-6  sm:px-8 md:px-16 py-16"
//     >
//       <div className="flex flex-col-reverse  md:flex-row items-center lg:items-start w-full lg:max-w-8xl justify-between gap-8">
//         {/* Left Text Section */}
//         <div className=" w-full sm:flex-1">
//           <h1 className="animate-on-scroll text-center lg:text-start text-white text-3xl md:text-4xl font-bold mb-4">
//             Let Your AI Handle the Busywork
//           </h1>

//           <p className="animate-on-scroll text-gray-200 mb-6 text-center text-lg xl:text-start">
//             Free up your time with an intelligent agent that takes care of scheduling, reminders, 
//             and repetitive tasks — so you can focus on what truly matters.
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 mb-8 ">
//             {features.map((feature, i) => (
//               <div key={i} className="animate-on-scroll">
//                 <div className="flex items-center justify-center lg:justify-start  mb-2">
//                   <FeatureIcon />
//                   <span className="text-white font-bold text-base text-center  xl:text-start">{feature.title}</span>
//                 </div>
//                 <p className="text-gray-200 text-sm  text-center  xl:text-start">{feature.desc}</p>
//               </div>
//             ))}
//           </div>
//           <div className="flex justify-center lg:justify-start w-full">
//          <button className="bg-[#D6EF37] font-bold  text-black w-full lg:w-1/2  rounded-full px-6 py-3 text-sm transition">
//              Automate My Task Now
//             </button>
//         </div>
//         </div>

//         {/* Right Image Section */}
//         <div className="flex-1 flex justify-center items-center xl:-mt-16 ">
//           <img
//             src="AutomationRobot.png"
//             alt="Robot"
//             className="animate-on-scroll w-full h-full object-contain drop-shadow-2xl"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Smart Scheduling",
    desc: "Syncs seamlessly with Google & Outlook to book meetings at the perfect time — no back-and-forth emails",
  },
  {
    title: "Auto-Reminders",
    desc: "Never miss a deadline again with smart reminders that adapt to your workflow",
  },
  {
    title: "To-Do Tracking",
    desc: "Turn your thoughts into actionable checklists that update in real time across all devices.",
  },
  {
    title: "Cross-Device Sync",
    desc: "Stay organized anywhere — your tasks and reminders follow you from desktop to mobile automatically.",
  },
];

const FeatureIcon = () => (
  <span className="inline-block rounded-full border-white border-[2px] p-0.5 mr-3 align-middle">
    <svg width="16" height="16" viewBox="0 0 16 16" className="inline align-middle 2xl:w-6 2xl:h-6">
      <circle cx="8" cy="8" r="7" stroke="#fff" strokeWidth="2" fill="none" />
      <path d="M8 4v2M8 10v2M4 8h2M10 8h2M5.5 5.5L7 7M9 9l1.5 1.5M5.5 10.5L7 9M9 7l1.5-1.5" stroke="#fff" strokeWidth="1.2"/>
    </svg>
  </span>
);

export default function Automation() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll(".animate-on-scroll");
    elements.forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-[#0d0f12] flex items-center justify-center px-6 sm:px-8 md:px-16 py-16"
    >
      <div className="flex flex-col-reverse md:flex-row items-center lg:items-start w-full lg:max-w-8xl justify-between gap-8">
        {/* Left Text Section */}
        <div className="w-full sm:flex-1">
          <h1 className="animate-on-scroll text-center lg:text-start text-white text-3xl md:text-4xl 2xl:text-5xl font-bold mb-4">
            Let Your AI Handle the Busywork
          </h1>

          <p className="animate-on-scroll text-gray-200 mb-6 text-center text-lg 2xl:text-xl xl:text-start">
            Free up your time with an intelligent agent that takes care of scheduling, reminders, 
            and repetitive tasks — so you can focus on what truly matters.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 mb-8">
            {features.map((feature, i) => (
              <div key={i} className="animate-on-scroll">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <FeatureIcon />
                  <span className="text-white font-bold text-base 2xl:text-lg text-center xl:text-start">
                    {feature.title}
                  </span>
                </div>
                <p className="text-gray-200 text-sm 2xl:text-base text-center xl:text-start">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center lg:justify-start w-full">
            <Link to='/book-meeting'>
            <button className="transition-all duration-300 ease-in-out 
            border border-white/25    hover:text-black
             hover:border-[#dafe45] hover:scale-105 bg-[#daff45] 
              font-bold text-black w-full lg:w-full rounded-full
               px-6 py-3 2xl:px-4 2xl:py-4 text-sm 2xl:text-lg transition">
              Automate My Tasks Now
            </button>
            </Link>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 flex justify-center items-center xl:-mt-16">
          <img
            src="AutomationRobot.png"
            alt="Robot"
            className="animate-on-scroll w-full h-full object-contain drop-shadow-2xl 2xl:max-w-[600px]"
          />
        </div>
      </div>
    </div>
  );
}
