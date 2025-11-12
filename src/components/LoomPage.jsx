
// import { Link } from "react-router-dom";
// import { ArrowRight } from "lucide-react";
// import { motion } from "framer-motion";

// const industries = [
//   {
//     name: "Financial Services",
//     slug: "financial-services",
//     description:
//       "Automate data collection, transaction approvals, and reporting workflows with ease.",
//   },
//   {
//     name: "Information Technology & Services",
//     slug: "information-technology-and-services",
//     description:
//       "Streamline IT operations, automate deployments, and optimize system monitoring effortlessly.",
//   },
//   {
//     name: "Computer & Software",
//     slug: "computer-and-software",
//     description:
//       "Empower your development teams with automated build, test, and release pipelines.",
//   },
//   {
//     name: "E-Learning",
//     slug: "e-learning",
//     description:
//       "Deliver seamless course experiences with automated content delivery and analytics tracking.",
//   },
//   {
//     name: "Marketing & Advertising",
//     slug: "marketing-and-advertising",
//     description:
//       "Automate campaigns, track conversions, and analyze performance in real time.",
//   },
// ];

// export default function LoomPage() {
//   return (
//     <div className="min-h-screen relative bg-[#0d0f12] text-white px-6 py-16 flex flex-col items-center overflow-hidden">
//       {/* Background Grid */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px] z-0 pointer-events-none" />

//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         className="max-w-3xl text-center mb-16 relative z-10"
//       >
//         <h1 className="text-5xl font-extrabold mb-6">
//           Industry-Wise Automation with{" "}
//           <span className="text-[#daff45]">Loom</span>
//         </h1>
//         <p className="text-gray-400 text-lg leading-relaxed">
//           Explore how different industries are leveraging automation to
//           accelerate productivity. Watch short Loom demos to see real examples
//           of digital workflows that save time and money.
//         </p>
//       </motion.div>

//       {/* Cards */}
//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl relative z-10">
//         {industries.map((industry, index) => (
//           <motion.div
//             key={industry.slug}
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1 }}
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0 0 25px rgba(218, 255, 69, 0.3)",
//             }}
//             className="rounded-2xl p-6 border border-white/10 backdrop-blur- bg-white/5 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between"
//           >
//             <div>
//               <h2 className="text-2xl font-semibold mb-3 text-white">
//                 {industry.name}
//               </h2>
//               <p className="text-gray-300 text-sm leading-relaxed">
//                 {industry.description}
//               </p>
//             </div>

//             <div className="mt-6 flex justify-end">
//               <Link
//                 to={`/loom/${industry.slug}`}
//                 className="bg-[#daff45] text-black font-semibold flex items-center gap-2 px-4 py-2 rounded-xl hover:scale-105 transition-transform duration-300"
//               >
//                 Watch Loom <ArrowRight size={18} />
//               </Link>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Footer */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.8 }}
//         className="mt-20 text-gray-500 text-sm relative z-10"
//       >
//         © {new Date().getFullYear()} OverlapsAI — Empowering Automation for
//         Every Industry
//       </motion.div>
//     </div>
//   );
// }
// import { Link } from "react-router-dom";
// import { ArrowRight, FileChartColumnIncreasingIcon } from "lucide-react";
// import { motion } from "framer-motion";
// import { Banknote, Code, MonitorSmartphone, GraduationCap, Megaphone } from "lucide-react";

// const industries = [
//   {
//     name: "Financial Services",
//     slug: "financial-services",
//     description:
//       "Automate data collection, transaction approvals, and reporting workflows with ease.",
//     icon: Banknote,
//   },
//   {
//     name: "Information Technology & Services",
//     slug: "information-technology-and-services",
//     description:
//       "Streamline IT operations, automate deployments, and optimize system monitoring effortlessly.",
//     icon: MonitorSmartphone,
//   },
//   {
//     name: "Computer & Software",
//     slug: "computer-and-software",
//     description:
//       "Empower your development teams with automated build, test, and release pipelines.",
//     icon: Code,
//   },
//   {
//     name: "E-Learning",
//     slug: "e-learning",
//     description:
//       "Deliver seamless course experiences with automated content delivery and analytics tracking.",
//     icon: GraduationCap,
//   },
//   {
//     name: "Marketing & Advertising",
//     slug: "marketing-and-advertising",
//     description:
//       "Automate campaigns, track conversions, and analyze performance in real time.",
//     icon: Megaphone,
//   },
// ];

// import { Link } from "react-router-dom";
// import { ArrowRight, Banknote, Laptop, Code, GraduationCap, Megaphone } from "lucide-react";
// import { motion } from "framer-motion";

// const industries = [
//   {
//     name: "Financial Services",
//     slug: "financial-services",
//     description:
//       "Automate data collection, transaction approvals, and reporting workflows with ease.",
//     icon: <Banknote size={24} className="text-[#daff45]" />,
//   },
//   {
//     name: "Information Technology & Services",
//     slug: "information-technology-and-services",
//     description:
//       "Streamline IT operations, automate deployments, and optimize system monitoring effortlessly.",
//     icon: <Laptop size={24} className="text-[#daff45]" />,
//   },
//   {
//     name: "Computer & Software",
//     slug: "computer-and-software",
//     description:
//       "Empower your development teams with automated build, test, and release pipelines.",
//     icon: <Code size={24} className="text-[#daff45]" />,
//   },
//   {
//     name: "E-Learning",
//     slug: "e-learning",
//     description:
//       "Deliver seamless course experiences with automated content delivery and analytics tracking.",
//     icon: <GraduationCap size={24} className="text-[#daff45]" />,
//   },
//   {
//     name: "Marketing & Advertising",
//     slug: "marketing-and-advertising",
//     description:
//       "Automate campaigns, track conversions, and analyze performance in real time.",
//     icon: <Megaphone size={24} className="text-[#daff45]" />,
//   },
// ];

// export default function LoomPage() {
//   return (
//     <div className="min-h-screen relative bg-[#0d0f12] text-white px-6 py-16 flex flex-col items-center overflow-hidden">
//       {/* Background Grid */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] z-0 pointer-events-none" />

//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         className="max-w-3xl text-center mb-16 relative z-10"
//       >
//         <h1 className="text-5xl font-extrabold mb-6">
//           Industry-Wise Automation with{" "}
//           <span className="text-[#daff45]">Loom</span>
//         </h1>
//         <p className="text-gray-400 text-lg leading-relaxed">
//           Explore how different industries are leveraging automation to
//           accelerate productivity. Watch short Loom demos to see real examples
//           of digital workflows that save time and money.
//         </p>
//       </motion.div>

//       {/* Cards */}
//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl relative z-10">
//         {industries.map((industry, index) => (
//           <motion.div
//             key={industry.slug}
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1 }}
//             whileHover={{
//               scale: 1.06,
//               boxShadow: "0 0 40px rgba(218, 255, 69, 0.25)",
//             }}
//             className="relative rounded-2xl p-6 border border-white/20 bg-white/5 backdrop-blur-xl shadow-[inset_0_0_0.5px_rgba(255,255,255,0.4)] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:rounded-2xl before:opacity-60 hover:before:opacity-90 before:transition-opacity duration-300 overflow-hidden"
//           >
//             {/* Card Content */}
//             <div className="relative z-10 flex flex-col justify-between h-full">
//               <div>
//                 <h2 className="text-2xl font-semibold mb-3 text-white flex items-center gap-3">
//                   {industry.icon}
//                   {industry.name}
//                 </h2>
//                 <p className="text-gray-300 text-sm leading-relaxed">
//                   {industry.description}
//                 </p>
//               </div>

//               <div className="mt-6 flex justify-end">
//                 <Link
//                   to={`/loom/${industry.slug}`}
//                   className="bg-[#daff45] text-black font-semibold flex items-center gap-2 px-4 py-2 rounded-xl hover:scale-105 transition-transform duration-300"
//                 >
//                   Watch Loom <ArrowRight size={18} />
//                 </Link>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Footer */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.8 }}
//         className="mt-20 text-gray-500 text-sm relative z-10"
//       >
//         © {new Date().getFullYear()} OverlapsAI — Empowering Automation for
//         Every Industry
//       </motion.div>
//     </div>
//   );
// }

import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Banknote, Laptop, Code, GraduationCap, Megaphone } from "lucide-react";
import { motion } from "framer-motion";
import { FaLeftLong } from "react-icons/fa6";

const industries = [
  {
    name: "Financial Services",
    slug: "financial-services",
    description:
      "Automate data collection, transaction approvals, and reporting workflows with ease.",
    icon: <Banknote size={24} className="text-[#daff45]" />,
  },
  {
    name: "Information Technology & Services",
    slug: "information-technology-and-services",
    description:
      "Streamline IT operations, automate deployments, and optimize system monitoring effortlessly.",
    icon: <Laptop size={24} className="text-[#daff45]" />,
  },
  {
    name: "Computer & Software",
    slug: "computer-and-software",
    description:
      "Empower your development teams with automated build, test, and release pipelines.",
    icon: <Code size={24} className="text-[#daff45]" />,
  },
  {
    name: "E-Learning",
    slug: "e-learning",
    description:
      "Deliver seamless course experiences with automated content delivery and analytics tracking.",
    icon: <GraduationCap size={24} className="text-[#daff45]" />,
  },
  {
    name: "Marketing & Advertising",
    slug: "marketing-and-advertising",
    description:
      "Automate campaigns, track conversions, and analyze performance in real time.",
    icon: <Megaphone size={24} className="text-[#daff45]" />,
  },
];

export default function LoomPage() {
  const navigate=useNavigate();
  return (
    <div className="min-h-screen relative bg-[#0d0f12] text-white px-6 py-16 flex flex-col items-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] z-0 pointer-events-none" />
  <motion.button
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5 }}
  onClick={() => navigate("/")}
  className="flex items-center gap-2 px-4 py-0.5 bg-[#ddded7] text-black rounded-full font-medium text-base shadow-md hover:scale-105 transition-transform duration-300 hover:shadow-[#daff45]/30 absolute left-5 top-5"
>
  <FaLeftLong className="text-lg" />
  Back
</motion.button>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="md:max-w-3xl md:text-center mb-16 relative z-10"
      >
        <h1 className="text-5xl font-extrabold mb-6">
          Industry-Wise Automation with{" "}
          <span className="text-[#daff45]">Loom</span>
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          Explore how different industries are leveraging automation to
          accelerate productivity. Watch short Loom demos to see real examples
          of digital workflows that save time and money.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl relative z-10">
        {industries.map((industry, index) => (
          <motion.div
            key={industry.slug}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              scale: 1.06,
              boxShadow: "0 0 40px rgba(218, 255, 69, 0.25)",
            }}
            className="relative rounded-2xl p-6 border border-white/20 bg-white/10 backdrop-blur- shadow-[inset_0_0_0.5px_rgba(255,255,255,0.4)] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:rounded-2xl before:opacity-60 hover:before:opacity-90 before:transition-opacity duration-300 overflow-hidden"
          >
            {/* Card Content */}
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-2xl font-semibold mb-3 text-white flex items-start gap-3">
                  {/* {industry.icon} */}
                  {industry.name}
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>

              <div className="mt-6 flex justify-end">
                <Link
                  to={`/loom/${industry.slug}`}
                  className="bg-[#daff45] text-black font-semibold flex items-center gap-2 px-4 py-2 rounded-xl hover:scale-105 transition-transform duration-300"
                >
                  Watch Loom <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-20 text-gray-500 text-sm relative z-10"
      >
        © {new Date().getFullYear()} OverlapsAI — Empowering Automation for
        Every Industry
      </motion.div>
    </div>
  );
}
