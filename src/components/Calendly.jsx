import { useEffect, useState } from "react";
import TallyButton from "./TallyButton";
import Loader from "./Loader";

export default function Calendly() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Inject Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      // Give Calendly a bit of time to initialize
      setTimeout(() => setIsLoaded(true), 4500);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-[#0d0f12] text-white flex flex-col items-center justify-center">
      {/* Calendly Wrapper */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:120px_120px] z-0" />
         <h2 className="text-center text-lg md:text-5xl mt-12 font-semibold text-black">
      <span className="text-[#007BFF] font-extrabold italic">Step 1:</span>
      <span className="italic font-semibold text-white">Book Your Free Consultation </span>
    </h2>
      <div className="relative w-full flex justify-center items-center h-full">
        {/* Preloader */}
        {!isLoaded && (
          <div className="fixed inset-0 h-[150vh] w-full z-50 bg-black -top-10 ">
        <Loader/>
        </div>
        )}

        {/* Calendly iframe */}
    
        <div
          className={`calendly-inline-widget transition-opacity mt-10 duration-700 h-[100vh] w-screen ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          data-url="https://calendly.com/overlapsai/ovelapsai-meet-1"
      
        ></div>
      </div>

      {/* Footer Section */}
         <h2 className="text-center text-lg md:text-5xl mt-12 font-semibold text-black">
      <span className="text-[#007BFF] font-extrabold italic">Step 2:</span>
      <span className="italic font-semibold text-white"> Tell Us a Bit About Your Setup</span>
    </h2>
      <div className=" relative h-[200px] w-full flex items-center justify-center">
       
         <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:120px_120px] -z-10" />
        <TallyButton formId="m69A5J" text="🚀 Book My Free Audit" />
      </div>
    </div>
  );
}
