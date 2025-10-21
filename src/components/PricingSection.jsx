// import React from "react";

// import { FaRobot } from "react-icons/fa";

// import { BiBarChartAlt } from "react-icons/bi";
// import { TbAutomation } from "react-icons/tb";
// import { TbPlugConnected } from "react-icons/tb";
// import { FaRegLightbulb } from "react-icons/fa";
// import { TbMapSearch } from "react-icons/tb";
// const robotImages = [
//   "RobotLeft.jpg",
//     "Robot.jpg",
//       "RobotRight.jpg",

// ];

// const cardData = [
//   {
//     banner: "Starter-AI Essentials",
//     image: robotImages[0],
//     title: "Starter-AI Essentials",
//     desc: `For Early Stages Saas Startup,.`,
//     icons:  <div className="absolute top-28  z-50 left-60 h-14 w-14" >
//              <img src="socials.png" className="h-full w-full" alt="" />
//              </div>,
//     imageText:"AI Research",
//     price:"$1999"
//   },
//   {
//     banner: "Growth-Scaling Suite",
//     image: robotImages[1],
//     title: "Growth-Scaling Suite",
//     desc: `For Scaling Saas (Seed-Series A), .`,
//     icons:  <><div className="absolute top-36 z-50 left-[130px] h-20 w-18" >
//              <img src="1.png" className="h-full w-full" alt="" />
//              </div>
//              </>,
//     imageText:"AI Research",
//      price:"$3500"
    
//   },
  
//   {
//     banner: "Enterprise AI Ops Stack",
//     image: robotImages[2],
//     title: "Enterprise AI Ops Stack",
//     desc: `For Series A+ Saas Startups,`,
//     icons:  <div className="absolute top-28  z-50 left-60 h-14 w-14" >
//              <img src="socials.png" className="h-full w-full" alt="" />
//              </div>,
//      imageText:"AI Research",
//     price:"$5000"
//   }
// ];

// const features = [
 
//   {
//     icon: (
//       <svg className="w-5 h-5 inline-block text-[#ffe066] mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//         <circle cx="12" cy="12" r="10" fill="#ffe066" stroke="#432910"/>
//         <rect x="11" y="7" width="2" height="8" fill="#432910"/>
//       </svg>
//     ),
//     text: "1 AI chatbot (onboarding or support)",
//   },
//    {
//     icon: (
//       <svg className="w-5 h-5 inline-block text-[#ffe066] mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//         <rect x="3" y="6" width="18" height="12" rx="2" fill="#ffe066" stroke="#432910"/>
//         <rect x="8" y="12" width="6" height="2" fill="#432910"/>
//       </svg>
//     ),
//     text: "Basic email onboarding sequence",
//   },
  
//   {
//     icon: (
//       <svg className="w-5 h-5 inline-block text-[#ffe066] mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//         <rect x="3" y="7" width="18" height="10" rx="2" fill="#ffe066" stroke="#432910"/>
//         <path d="M6 12a6 6 0 0 1 12 0" stroke="#432910"/>
//       </svg>
//     ),
//     text: "Monthly performance insights",
//   },
//     {
//     icon: (
//       <svg className="w-5 h-5 inline-block text-[#ffe066] mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//         <rect x="3" y="7" width="18" height="10" rx="2" fill="#ffe066" stroke="#432910"/>
//         <path d="M6 12a6 6 0 0 1 12 0" stroke="#432910"/>
//       </svg>
//     ),
//     text: "1–2 tool integrations (e.g., Intercom)",
//   },
//     {
//     icon: (
//       <svg className="w-5 h-5 inline-block text-[#ffe066] mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//         <rect x="3" y="7" width="18" height="10" rx="2" fill="#ffe066" stroke="#432910"/>
//         <path d="M6 12a6 6 0 0 1 12 0" stroke="#432910"/>
//       </svg>
//     ),
//     text: "Standard email support",
//   },
// ];

// export default function PricingSection() {
//   return (
//     <div className="min-h-screen  bg-[#0D0F12] flex items-center justify-center py-12 px-4">
  
//       <div className="flex flex-col md:flex-row gap-8 w-full md:max-w-6xl justify-center">
//         {cardData.map((card, i) => (
//           <div className="p-5  scroll-fade-up">
//           <div key={i} className="bg-[#222324]  relative md:h-min-[400px] md:max-h-[650px]  rounded-2xl shadow-xl p-6  flex-1 flex flex-col items-center min-w-[330px] max-w-[480px]">
//             {/* Image and banner */}
//             <div className="relative w-full h-full flex items-center justify-center mb-4">
//               <img
//                 src={card.image}
//                 alt={card.banner}
//                 className="w-full h-full object-contain rounded-lg"
//               />
//               {/* <span className="absolute top-3 left-3 bg-[#e5e9d5] text-[#236f49] rounded text-sm px-3 py-1 font-semibold shadow border border-[#e5e9d5]">
//                 {card.banner}
//                 </span> */}
//               </div>
//               <div>  {card.icons}</div>
//               <div className="bg-[#121427] p-2 absolute top-9 right-9 w-16 h-16  rounded-full flex   items-center justify-center text-amber-50">
//               <h1 className="text-center text-[11px] text-white font-semibold">       AI <br /> Research</h1>
       
//               </div>
//             {/* Texts */}
        
//             <h3 className="text-[1.1rem] font-bold text-white w-full mb-2 text-start">{card.title}</h3>
//               <h1 className="font-bold text-3xl text-yellow-300 text-start w-full">
                 
//                  {card.price}</h1>
//             <p className="text-[#fff6e4] text-sm mb-4 text-start w-full">{card.desc}</p>
//             {/* Features/icons */}
//             <ul className="w-full space-y-1 mb-3">
//               {features.map((f, idx) => (
//                 <li key={idx} className="flex items-center text-[#daff45] font-medium text-sm">
//                   {f.icon} <span className="ml-1">{f.text}</span>
//                 </li>
//               ))}
//             </ul>
//             {/* Button */}
//             <button className="bg-[#daff45] hover:bg-[#ffd800] text-[#432910] font-bold py-2 w-full rounded text-sm shadow transition">
             
//            Get Started
//             </button>
//           </div>
//              </div>
//         ))}
//       </div>
   
//     </div>
//   );
// }

import React, { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
function Button({ children, className = "", variant = "default", ...props }) {
  const baseStyles =
    "rounded-3xl px-2 2xl:px-6 py-1 2x:l:py-3 font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 text-lg";
  let variantStyles = "";

  if (variant === "default") {
    variantStyles = "bg-black text-white hover:bg-gray-900 focus:ring-gray-800";
  } else if (variant === "yellow") {
    variantStyles = "bg-yellow-400 text-black hover:bg-yellow-500 focus:ring-yellow-400";
  } else if (variant === "outline") {
    variantStyles = "border border-gray-400 text-gray-800 hover:bg-gray-100 focus:ring-gray-300";
  }

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default function PricingCards() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      title: "Starter – AI Essentials ",
      short: "For early-stage SaaS startups",
      price: " $2,000 setup",
      oneTime: "$499/month",
      color: "bg-gray-100",
      highlight: false,
      miniFeatures: ["1 AI chatbot", "Basic onboarding", "Monthly insights"],
      features: [
        "1 AI chatbot (onboarding or support)",
        "Basic email onboarding sequence",
        "Monthly performance insights",
        "1–2 tool integrations (e.g., Intercom)",
        "Standard email support",
      ],
      outcomes: [
        "Save 5–10 hrs/month",
        "Capture 15–30 leads/month",
        "Automate 30–50 support tickets",
      ],
    },
    {
      title: "Growth – Scaling Suite",
      short: "For scaling SaaS (Seed A)  ",
      price: "$3,500 setup",
      oneTime: " $1,499/month" ,
      color: "bg-[#FEF9C4]",
      highlight: true,
      miniFeatures: ["2 AI chatbots", "Lead scoring", "Priority support"],
      features: [
        "All Starter features",
        "2 AI chatbots (onboarding + support)",
        "Lead scoring automation",
        "API/webhook integrations",
        "Analytics dashboard",
        "Bi-monthly reviews",
        "Priority chat + email support",
      ],
      outcomes: [
        "Save 15–25 hrs/month",
        "10–15% higher conversions",
        "Automate 100–200 tickets/month",
      ],
    },
    {
      title: "Enterprise – AI Ops Stack",
      short: "For Series A+ SaaS platforms",
      price: " $5,000+",
      oneTime: " From $3,000/month",
      color: "bg-gray-100",
      highlight: false,
      miniFeatures: ["AI strategist", "Custom logic", "Slack support"],
      features: [
        "All Growth features",
        "Dedicated AI strategist",
        "Custom chatbot logic (multi-channel)",
        "Deep CRM/helpdesk integrations",
        "Role-based workflows",
        "Compliance automation",
        "White-glove onboarding",
        "Dedicated Slack support",
      ],
      outcomes: [
        "Save 30–50+ hrs/month",
        "Scale support & onboarding",
        "Increase retention & CSAT",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-cent bg-[#0D0F12]  py-16 px- w-full">
      <h1 className="text-gray-100 text-5xl font-bold text-center pb-20">Pricing </h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-24 max-w-full w-full">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`${plan.color} relative rounded-3xl w-[85%] sm:w-[70%] lg:w-1/4  h-full p-8 2xl:p-10   shadow-lg hover:shadow-2xl transition-all border border-gray-300 flex flex-col justify-between`}
            
          >
            {/* {plan.highlight && (
              <span className="absolute top-5 right-6 bg-green-400 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                BEST DEAL
              </span>
            )} */}

            <div>
              <h2 className="text-[25px] font-bold text-gray-900 mb-2">
                {plan.title}
              </h2>
              <p className="text-lg text-gray-700 mb-5">{plan.short}</p>

              <p className=" text-xl 2xl:text-3xl font-bold text-gray-900">{plan.price}</p>
              <p className="text-md text-gray-700 mb-6">{plan.oneTime}</p>

              <ul className="text-lg text-gray-800 space-y-2 mb-4 ">
                {plan.miniFeatures.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                  <span className="text-[#020201] font-bold">
                      
                      <FaCircleCheck className="h-6 w-6"/>
                      </span> {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3  2xl:px-0">
              <Button
                variant={plan.highlight ? "yellow" : "default"}
                onClick={() => setSelectedPlan(plan)}
              >
                View Details
              </Button>
              <Button variant="outline">Get Started</Button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
   {/* Modal */}
{selectedPlan && (
  <div className="fixed inset-0 bg-black/90 backdrop-blur-lg flex items-center justify-center z-50 p-6 2xl:p-6 transition-all duration-300">
    <div className="bg-gray-200  rounded-xl xl:w-[40%]  p-8  2xl:p-10 shadow-2xl  relative transform transition-transform duration-300 scale-100">
      <button
        className="absolute top-5 right-6 text-gray-600 text-2xl"
        onClick={() => setSelectedPlan(null)}
      >
        ✕
      </button>

      <h2 className="text-xl 2xl:text-3xl font-bold mb-1">{selectedPlan.title}</h2>
      <p className=" text-sm 2xl:text-lg text-gray-700 mb-3">{selectedPlan.short}</p>

      <div className="mb-1 2xl:mb-3">
        <p className="font-semibold text-gray-900 text-lg">
          One-time: {selectedPlan.price}
        </p>
        <p className="text-gray-700 text-md">
          Subscription: {selectedPlan.oneTime}
        </p>
      </div>

      <h3 className="text-lg 2xl:text-xl font-semibold text-gray-900 mb-1">Features:</h3>
      <ul className="space-y-1 mb-1 2xl:mb-3 text-md text-gray-700">
        {selectedPlan.features.map((f, i) => (
          <li key={i}>✔ {f}</li>
        ))}
      </ul>

      <h3 className="text-lg 2xl:text-xl font-semibold text-gray-900 mb-2">Outcomes:</h3>
      <ul className="space-y-1 text-md text-gray-700">
        {selectedPlan.outcomes.map((o, i) => (
          <li key={i}>• {o}</li>
        ))}
      </ul>

      <div className="mt-4">
        <Button variant="default" className="w-full text-lg py-1 2xl:py-3">
          Choose Plan
        </Button>
      </div>
    </div>
  </div>
)}

    </div>
  );
}
