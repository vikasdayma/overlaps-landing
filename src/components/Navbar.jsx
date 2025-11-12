// // import React, { useRef, useEffect } from "react";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // const Navbar = () => {
// //   const navbarRef = useRef(null);

// //   useEffect(() => {
// //     gsap.registerPlugin(ScrollTrigger);

    
// //     gsap.set(navbarRef.current, { width: "60%" });

    
// //     gsap.to(navbarRef.current, {
// //       width: "45%",
// //       scrollTrigger: {
// //         trigger: document.body,
// //         start: "top top",
// //         end: "200px top",
// //         scrub: true,   
// //       },
// //     });
// //   }, []);

// //   return (
// //   <nav className="fixed top-6 flex justify-center w-full max-w-8xl z-50 my-font-three">
// //   <div
// //     ref={navbarRef}
// //     className="flex items-center justify-between py-1.5 w-full max-w-full shadow-xl gap-4 px-4 rounded-full bg-[#1E1E1E] backdrop-blur-md z-50"
// //   >
// //     <div className="flex justify-between w-full text-gray-200 text-sm font-medium">
// //     <span style={{fontFamily:"Philosopher"}} className="text-xl font-bold tracking-wide">OverlapsAI</span>
// //       {["How it Works", "Service", "Feature", "Pricing", "Pricing"].map((link) => (
// //         <a key={link} href="#">
// //           {link}
// //         </a>
// //       ))}
// //        <button className="border border-white/25 rounded-full px-6 py-2 text-sm font-medium bg-transparent hover:bg-white/5 transition">
// //           Sign In
// //         </button>
// //     </div>
// //   </div>
// // </nav>

// //   );
// // };

// // export default Navbar;
// import React, { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const Navbar = () => {
//   const navbarRef = useRef(null);
//   const btnRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     // initial width
//     gsap.set(navbarRef.current, { width: "60%" });

//     // scroll animation (navbar shrink)
//     gsap.to(navbarRef.current, {
//       width: "45%",
//       scrollTrigger: {
//         trigger: document.body,
//         start: "top top",
//         end: "200px top",
//         scrub: true,
//       },
//     });

//     // nav link hover animation
//     const links = navbarRef.current.querySelectorAll("a");

//     links.forEach((link) => {
//       const tl = gsap.timeline({ paused: true });
//       tl.to(link, {
//         color: "#dafe45",
//         scale: 1.1,
//         duration: 0.3,
//         ease: "power2.out",
//       });

//       link.addEventListener("mouseenter", () => tl.play());
//       link.addEventListener("mouseleave", () => {
//         gsap.to(link, {
//           color: "#e5e7eb", // back to gray-200
//           scale: 1,
//           duration: 0.3,
//           ease: "power2.inOut",
//         });
//       });
//     });

//     // sign-in button hover animation
//     const btn = btnRef.current;
//     const btnHover = gsap.timeline({ paused: true });

//     btnHover.to(btn, {
//       backgroundColor: "#dafe45",
//       color: "#000000",
//       scale: 1.1,
//       duration: 0.4,
//       ease: "power2.out",
//     });

//     btn.addEventListener("mouseenter", () => btnHover.play());
//     btn.addEventListener("mouseleave", () => {
//       gsap.to(btn, {
//         backgroundColor: "transparent",
//         color: "#ffffff",
//         scale: 1,
//         duration: 0.4,
//         ease: "power2.inOut",
//       });
//     });

//     return () => {
//       links.forEach((link) => {
//         link.removeEventListener("mouseenter", null);
//         link.removeEventListener("mouseleave", null);
//       });
//     };
//   }, []);

//   return (
//     <nav className="fixed top-6 flex justify-center w-full max-w-8xl z-50 my-font-three">
//       <div
//         ref={navbarRef}
//         className="flex items-center justify-between py-1.5 w-full max-w-full shadow-xl gap-4 px-4 rounded-full bg-[#1E1E1E] backdrop-blur-md z-50"
//       >
//         <div className="flex justify-between w-full text-gray-200 text-sm font-medium">
//           <span
//             style={{ fontFamily: 'Philosopher' }}
//             className="text-xl font-bold tracking-wide text-[#dafe45]"
//           >
//             OverlapsAI
//           </span>

//           {["How it Works", "Service", "Feature", "Pricing"].map((link) => (
//             <a key={link} href="#" className="transition-all duration-300">
//               {link}
//             </a>
//           ))}

//           <button
//             ref={btnRef}
//             className="border border-white/25 rounded-full px-6 py-2 text-sm font-medium bg-transparent hover:cursor-pointer transition-all duration-300"
//           >
//             Sign In
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { label } from "framer-motion/client";
const Navbar = () => {
  const headerRef = useRef(null);
  const btnRef = useRef(null);

  const navLinks = [
    {label:"Home",tag:'#home'},
    {label:"How it Works",tag:'#howitworks'},
     {label:"About",tag:'#about'},
      {label:"Pricing",tag:'#pricing'}
    ];

  useEffect(() => {
    const links = headerRef.current.querySelectorAll("nav a");
    const btn = btnRef.current;
    const header = headerRef.current;

    // Animate nav links hover
    links.forEach((link) => {
      const hoverIn = () => {
        gsap.to(link, {
          color: "#dafe45",
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out",
        });
      };
      const hoverOut = () => {
        gsap.to(link, {
          color: "#e5e7eb",
          scale: 1,
          duration: 0.3,
          ease: "power2.inOut",
        });
      };
      link.addEventListener("mouseenter", hoverIn);
      link.addEventListener("mouseleave", hoverOut);
    });

    // Animate sign-in button hover
    const btnHoverIn = () => {
      gsap.to(btn, {
        backgroundColor: "#dafe45",
        color: "#000",
        scale: 1.08,
        duration: 0.4,
        ease: "power2.out",
      });
    };
    const btnHoverOut = () => {
      gsap.to(btn, {
        backgroundColor: "transparent",
        color: "#fff",
        scale: 1,
        duration: 0.4,
        ease: "power2.inOut",
      });
    };
    btn.addEventListener("mouseenter", btnHoverIn);
    btn.addEventListener("mouseleave", btnHoverOut);

    // 🔥 Add class to show or colorize cursor when hovering navbar
    const handleMouseEnter = () => {
      document.body.classList.add("cursor-active");
    };
    const handleMouseLeave = () => {
      document.body.classList.remove("cursor-active");
    };

    header.addEventListener("mouseenter", handleMouseEnter);
    header.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      header.removeEventListener("mouseenter", handleMouseEnter);
      header.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="relative z-10 flex flex-wrap items-center justify-between px-5 sm:px-8 md:px-16 py-5 gap-4"
    >
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <span
          style={{ fontFamily: "Philosopher" }}
          className="text-lg sm:text-xl font-bold tracking-wide text-[#dafe45]"
        >
          OverlapsAI
        </span>
      </div>

      {/* Nav */}
      <nav className="hidden lg:flex justify-center cursor-visible  gap-4 text-sm">
        {navLinks.map((link) => (
          <a
            key={link}
            href={link.tag}
            className="px-4 py-1 rounded-full hover:bg-[#16181b] transition text-gray-200 font-semibold"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Sign In */}
       <Link to='/book-meeting'>
      <button
        ref={btnRef}
        className="border  border-white/25 rounded-full px-5 sm:px-6 py-2 text-sm font-medium bg-transparent transition whitespace-nowrap text-white"
      >
    Sing in
      </button>
      </Link>
    </header>
  );
};

export default Navbar;
