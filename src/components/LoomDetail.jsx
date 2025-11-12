// import { useParams, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// const loomLinks = {
//   "financial-services": "https://www.loom.com/share/your-financial-video-link",
//   "information-technology-and-services": "https://www.loom.com/share/your-it-video-link",
//   "computer-and-software": "https://www.loom.com/share/your-software-video-link",
//   "e-learning": "https://www.loom.com/share/your-elearning-video-link",
//   "marketing-and-advertising": "https://www.loom.com/embed/10013f20599b46058bd4946de1e7bbb0",
// };

// export default function LoomDetail() {
//   const { industry } = useParams();
//   const navigate = useNavigate();
//   const videoUrl = loomLinks[industry];

//   return (
//     <div className="relative min-h-screen bg-[#0d0f12] text-white flex flex-col items-center justify-center overflow-hidden">
//       {/* Blur Background Effects */}
//       <div className="absolute w-[600px] h-[600px] bg-[#daff45] opacity-10 blur-3xl rounded-full top-20 left-20 animate-pulse" />
//       <div className="absolute w-[400px] h-[400px] bg-[#daff45] opacity-5 blur-3xl rounded-full bottom-10 right-20 animate-ping" />

//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-3xl font-bold mb-8 text-center"
//       >
//         {industry.split("-").join(" ").toUpperCase()}
//       </motion.h2>

//       {videoUrl ? (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           className="relative w-[90%] md:w-[70%] aspect-video rounded-2xl overflow-hidden shadow-lg"
//         >
//           <iframe
//             src={videoUrl}
//             allowFullScreen
//             className="w-full h-full border-none rounded-2xl"
//             title={industry}
//           ></iframe>
//         </motion.div>
//       ) : (
//         <p className="text-gray-400 mt-6">No Loom video found for this category.</p>
//       )}

//       <button
//         onClick={() => navigate("/loom")}
//         className="mt-8 bg-[#daff45] text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#daff45]/30"
//       >
//         ← Back to Industries
//       </button>
//     </div>
//   );
// }

import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../lottie/Loader.json";
import { FaLeftLong } from "react-icons/fa6";

const loomLinks = {
  "financial-services": "https://www.loom.com/embed/2de6cdbbd43844cb83e96065ab68de48",
  "information-technology-and-services": "https://www.loom.com/embed/36207ae0d3094e0f9b75aeb03e7557c6",
  "computer-and-software": "https://www.loom.com/embed/cf51f8e7428c414ebc9451f0959cfa0c",
  "e-learning": "https://www.loom.com/embed/6b0eabe97d5e42d0a873ff50f0b8d4e0",
  "marketing-and-advertising": "https://www.loom.com/embed/10013f20599b46058bd4946de1e7bbb0",
};

export default function LoomDetail() {
  const { industry } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const videoUrl = loomLinks[industry];

  // Scroll to top + fake loader delay
  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, [industry]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#0d0f12]">
        <Lottie
          animationData={animationData}
          loop
          className="w-1/2 h-1/2"
        />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen  bg-[#0d0f12] text-white flex flex-col items-center justify-center overflow-hidden px-4 py-10">
      {/* Animated Glow Backgrounds */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] z-0 pointer-events-none" />

      <div className="absolute w-[800px] h-[800px] bg-[#daff45] opacity-5 blur-[150px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[600px] h-[600px] bg-[#daff45] opacity-10 blur-[180px] rounded-full bottom-[-200px] right-[-100px]" />

      {/* Title */}
     <motion.button
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5 }}
  onClick={() => navigate("/loom")}
  className="flex items-center gap-2 px-4 py-0.5 bg-[#ddded7] text-black rounded-full font-medium text-base shadow-md hover:scale-105 transition-transform duration-300 hover:shadow-[#daff45]/30 absolute left-5 top-5"
>
  <FaLeftLong className="text-lg" />
  Back
</motion.button>

      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-4xl font-extrabold mb-8 tracking-wide text-center"
      >
        {industry.split("-").join(" ").toUpperCase()}
      </motion.h2>

      {/* Glass Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full md:w-3/4 lg:w-2/3 backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl"
      >
        {videoUrl ? (
          <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-white/10">
            <iframe
              src={videoUrl}
              allowFullScreen
              className="w-full h-full border-none rounded-2xl"
              title={industry}
            ></iframe>
          </div>
        ) : (
          <p className="text-gray-400 mt-6 text-center">
            No Loom video found for this category.
          </p>
        )}

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-gray-300 text-lg md:text-xl text-center leading-relaxed"
        >
          See how automation transforms the{" "}
          <span className="text-[#daff45] font-semibold">
            {industry.split("-").join(" ")}
          </span>{" "}
          industry — enhancing efficiency, reducing effort, and accelerating business growth.
        </motion.p>
      </motion.div>

      {/* Back Button */}
   
    </div>
  );
}
