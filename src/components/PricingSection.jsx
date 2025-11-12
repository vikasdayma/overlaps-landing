import { Link } from "react-router-dom";
"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
const PricingSection = () => {
   const navigate = useNavigate();

  const GetStarted = () => {
    navigate("/book-meeting"); // navigate programmatically
  };
 const plans = [
  {
    title: "Launch – AI Starter Suite",
    short: "For early-stage SaaS startups automating their first workflows",
    setupPrice: "$2,000 setup",
    monthly: "$499/month",
    color: "bg-[#F5F3FF]", // soft lavender – beginner friendly tech vibe
    highlight: false,
    features: [
      true,  // 1 AI chatbot
      true,  // Automated onboarding sequences
      true,  // Monthly performance insights
      false,  // Up to 2 tool integrations
      false, // Advanced analytics dashboard
      false, // Strategy reviews
      false, // Priority support
    ],
  },
  {
    title: "Scale – Growth Intelligence",
    short: "For scaling SaaS teams  seeking predictable growth",
    setupPrice: "$3,500 setup",
    monthly: "$1,499/month",
    tag: "🔥 Most Popular",
    color: "bg-[#FFF9C4]", // soft yellow – growth energy
    highlight: true,
    features: [
      true,  // Everything in Launch
      true,  // 2 AI chatbots
      true,  // AI-powered lead scoring
      true,  // Full API & webhook integrations
      true,  // Advanced analytics dashboard
      false,  // Bi-monthly strategy sessions
      false,  // Priority support
    ],
  },
  {
    title: "Operate – AI Ops Command",
    short: "For Series A+ SaaS platforms needing deep automation & scale",
    setupPrice: "$5,000+ setup",
    monthly: "From $3,000/month",
    color: "bg-[#E4E4E7]", // neutral gray – enterprise tone
    highlight: false,
    features: [
      true,  // Everything in Scale
      true,  // Dedicated AI strategist
      true,  // Custom automation logic
      true,  // CRM & helpdesk system integrations
      true,  // Role-based access workflows
      true,  // Compliance automation
      true,  // Slack + priority channel support
    ],
  },
  // {
  //   title: "Custom – Strategic AI Partnership",
  //   short: "For enterprises seeking fully tailored AI-driven transformation",
  //   setupPrice: "Custom quote",
  //   monthly: "Custom pricing",
  //   color: "bg-[#F0FDF4]", // light green – strategic & exclusive
  //   highlight: false,
  //   features: [
  //     true, // End-to-end automation design
  //     true, // Dedicated AI success manager
  //     true, // 24/7 monitoring & reporting
  //     true, // Custom data pipelines & integrations
  //     true, // Compliance & governance automation
  //     true, // Multi-department rollout
  //     true, // White-glove onboarding
  //   ],
  // },
];

const featureList = [
  "AI Chatbots & Automations",
  "Onboarding Sequences",
  "Performance Insights",
  "Tool Integrations (API/Webhooks)",
  "Analytics Dashboard",
  "Strategy Reviews",
  "Priority / Slack Support",
];

  return (
    <div id='pricing' className="bg-[#0d0f12] pt-20 relative text-white min-h-screen flex flex-col items-center  w-full">
      {/* Background grid pattern */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] z-0" /> */}

      {/* Header */}
      <h1 className="text-5xl font-bold mb-2 z-10">
        <span className="text-white">Simple</span>{" "}
        <span className="text-white">pricing</span>
      </h1>
      <p className="text-lg text-gray-300 mb-10 z-10">
        Your AI Automation Toolkit for SaaS
      </p>

      {/* Pricing Cards */}
      <div className="flex bg flex-col lg:flex-row p-6 justify-evenly gap-8 mb-16 z-10">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`${plan.color} relative rounded-2xl w-full lg:w-72 2xl:w-96 p-8 px-10 2xl:p-16 text-black shadow-xl`}
          >
            {plan.tag && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-3 py-1 rounded-full shadow-md font-semibold">
                {plan.tag}
              </span>
            )}
            <h2 className="text-2xl font-semibold mb-1">{plan.title}</h2>
            <p className="text-gray-800 text-sm mb-6">{plan.short}</p>
            <h3 className="text-3xl font-bold mb-2">{plan.setupPrice}</h3>
          
            <p className="text-lg font-semibold text-gray-700 mb-6">{plan.monthly}</p>
            <button onClick={GetStarted} className="bg-black text-white w-full py-2 rounded-full hover:opacity-90 transition">
              Get started
            </button>
          </div>
        ))}
      </div>

      {/* Features Table */}
      <div className="w-full max-w-6xl 2xl:max-w-full p-0 2xl:p-16 rounded-xl overflow-hidden z-10">
        <div className="p-6 border-b border-gray-700 text-lg font-semibold">
          Key Features
        </div>
        <div className="divide-y divide-gray-800">
          {featureList.map((feature, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-4 gap-4 items-center p-4 text-sm md:text-base"
            >
              <div className="text-gray-300">{feature}</div>
              {plans.map((plan, colIndex) => (
                <div
                  key={colIndex}
                  className="flex justify-center items-center"
                >
                  {plan.features[rowIndex] ? (
                    <span className="text-green-400 text-xl">✔</span>
                  ) : (
                    <span className="text-gray-500 text-xl">–</span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;


