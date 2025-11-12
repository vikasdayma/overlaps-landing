import Lottie from "lottie-react";
import animationData from "../assets/Data.json";

export default function About() {
  return (
    <section id='about' className="flex flex-col overflow-x-hidden md:flex-row items-center justify-between bg-[#0D0F12] text-white min-h-screen px-6 md:px-18 py-16 ">
      
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold text-[#daff45] mb-4">About Us</h2>
        <p className="text-lg leading-relaxed text-gray-300">
          At <span className="text-white font-semibold">OverlapsAI</span>, 
          we build intelligent automation systems that help businesses 
          scale efficiently. From AI-powered workflows to data-driven dashboards, 
          our mission is to simplify complex processes and accelerate innovation.
        </p>

        <p className="text-lg leading-relaxed text-gray-400">
          We work with startups and enterprises to automate repetitive tasks, 
          boost productivity, and empower teams with modern tech stacks. 
          Every automation we create is crafted with precision, performance, 
          and scalability in mind.
        </p>

        {/* <button className="mt-4 px-4 py-1 text-black bg-[#daff45] rounded-xl font-semibold transition-all duration-300">
          Learn More
        </button> */}
      </div>

      {/* Right Side Animation */}
      <div className="md:w-1/2 flex justify-center md:scale-120   mt-10 md:mt-0">
        <Lottie
          animationData={animationData}
          loop={true}
          className="w-[400px] h-[400px] p-10 md:p-0 " 
        />
      </div>
    </section>
  );
}
