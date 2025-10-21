import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Navbar = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    
    gsap.set(navbarRef.current, { width: "60%" });

    
    gsap.to(navbarRef.current, {
      width: "45%",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "200px top",
        scrub: true,   
      },
    });
  }, []);

  return (
  <nav className="fixed top-6 flex justify-center w-full max-w-8xl z-50 my-font-three">
  <div
    ref={navbarRef}
    className="flex items-center justify-between py-1.5 w-full max-w-full shadow-xl gap-4 px-4 rounded-full bg-[#1E1E1E] backdrop-blur-md z-50"
  >
    <div className="flex justify-between w-full text-gray-200 text-sm font-medium">
    <span style={{fontFamily:"Philosopher"}} className="text-xl font-bold tracking-wide">OverlapsAI</span>
      {["How it Works", "Service", "Feature", "Pricing", "Pricing"].map((link) => (
        <a key={link} href="#">
          {link}
        </a>
      ))}
       <button className="border border-white/25 rounded-full px-6 py-2 text-sm font-medium bg-transparent hover:bg-white/5 transition">
          Sign In
        </button>
    </div>
  </div>
</nav>

  );
};

export default Navbar;