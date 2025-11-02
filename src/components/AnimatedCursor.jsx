// // // import React, { useEffect, useRef } from "react";
// // // import { gsap } from "gsap";

// // // const AnimatedCursor = () => {
// // //   const cursorRef = useRef(null);

// // //   useEffect(() => {
// // //     const cursor = cursorRef.current;
// // //     let pos = { x: 0, y: 0 };
// // //     let mouse = { x: 0, y: 0 };

// // //     // Smooth follow animation
// // //     const moveCursor = (e) => {
// // //       mouse.x = e.clientX;
// // //       mouse.y = e.clientY;
// // //     };

// // //     const render = () => {
// // //       pos.x += (mouse.x - pos.x) * 0.2;
// // //       pos.y += (mouse.y - pos.y) * 0.2;
// // //       gsap.set(cursor, { x: pos.x, y: pos.y });
// // //       requestAnimationFrame(render);
// // //     };

// // //     render();
// // //     window.addEventListener("mousemove", moveCursor);

// // //     // Hover effect on elements with class .cursor-hover
// // //     const hoverTargets = document.querySelectorAll(".cursor-hover");

// // //     hoverTargets.forEach((el) => {
// // //       el.addEventListener("mouseenter", () => {
// // //         gsap.to(cursor, {
// // //           scale: 3,
// // //           backgroundColor: "#DAFF45",
          
// // //           ease: "power3.out",
// // //           duration: 0.3,
// // //         });
// // //       });
// // //       el.addEventListener("mouseleave", () => {
// // //         gsap.to(cursor, {
// // //           scale: 1,
// // //           backgroundColor: "#00ffff",
// // //           ease: "power3.out",
// // //           duration: 0.3,
// // //         });
// // //       });
// // //     });

// // //     return () => {
// // //       window.removeEventListener("mousemove", moveCursor);
// // //       hoverTargets.forEach((el) => {
// // //         el.removeEventListener("mouseenter", null);
// // //         el.removeEventListener("mouseleave", null);
// // //       });
// // //     };
// // //   }, []);

// // //   return (
// // // <div
// // //   ref={cursorRef}
// // //   className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999]"
// // //   style={{
// // //     backgroundColor: "rgba(255,255,255,0.08)",
// // //     border: "1px solid rgba(255,255,255,0.25)",
// // //     backdropFilter: "blur(6px)",
// // //     WebkitBackdropFilter: "blur(6px)",
// // //     mixBlendMode: "normal", // no inversion
// // //     transform: "translate(-50%, -50%)",
// // //   }}
// // // ></div>

// // //   );
// // // };

// // // export default AnimatedCursor;
// // import React, { useEffect, useRef } from "react";
// // import { gsap } from "gsap";

// // const AnimatedCursor = () => {
// //   const cursorRef = useRef(null);

// //   useEffect(() => {
// //     const cursor = cursorRef.current;
// //     let pos = { x: 0, y: 0 };
// //     let mouse = { x: 0, y: 0 };

// //     // Follow mouse smoothly
// //     const moveCursor = (e) => {
// //       mouse.x = e.clientX;
// //       mouse.y = e.clientY;
// //     };

// //     const render = () => {
// //       pos.x += (mouse.x - pos.x) * 0.2;
// //       pos.y += (mouse.y - pos.y) * 0.2;
// //       gsap.set(cursor, { x: pos.x, y: pos.y });
// //       requestAnimationFrame(render);
// //     };

// //     render();
// //     window.addEventListener("mousemove", moveCursor);

// //     // Hover animation for .cursor-hover
// //     const hoverTargets = document.querySelectorAll(".cursor-hover");

// //     hoverTargets.forEach((el) => {
// //       el.addEventListener("mouseenter", () => {
// //         gsap.to(cursor, {
// //           scale: 3,
// //           // backgroundColor: "transparent", // nearly transparent
// //        backgroundColor: "rgba(1,1,1,0)",     
// //           border: "1px solid rgba(255,255,255,0.3)",
// //           backdropFilter: "blur(1px)", // shows text behind cursor
// //           WebkitBackdropFilter: "blur(1px)",
// //           boxShadow: "0 0 25px rgba(255,255,150,0.3)",
// //           ease: "power3.out",
// //           duration: 0.3,
// //         });
// //       });

// //       el.addEventListener("mouseleave", () => {
// //         gsap.to(cursor, {
// //           scale: 1,
// //            backgroundColor: "#00ffff",
      
// //           border: "1px solid rgba(0,255,255,0.5)",
// //           backdropFilter: "none",
// //           WebkitBackdropFilter: "none",
// //           boxShadow: "0 0 10px rgba(0,255,255,0.5)",
// //           ease: "power3.out",
// //           duration: 0.3,
// //         });
// //       });
// //     });

// //     return () => {
// //       window.removeEventListener("mousemove", moveCursor);
// //     };
// //   }, []);

// //   return (
// //     <div
// //       ref={cursorRef}
// //       className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[9999]"
// //       style={{
// //         backgroundColor: "#00ffff",
      
// //         border: "1px solid rgba(0,255,255,0.5)",
// //         boxShadow: "0 0 10px rgba(0,255,255,0.5)",
// //         transform: "translate(-50%, -50%)",
// //         mixBlendMode: "normal",
// //       }}
// //     ></div>
// //   );
// // };

// // export default AnimatedCursor;

// import React, { useEffect } from "react";
// import { gsap } from "gsap";

// const HoverColorEffect = () => {
//   useEffect(() => {
//     const targets = document.querySelectorAll(".cursor-hover");

//     targets.forEach((el) => {
//       el.addEventListener("mouseenter", () => {
//         gsap.to(el, {
//           // backgroundColor: "#00ffff",
//           color: "yellow",
//           // boxShadow: "0 0 40px rgba(0,255,255,0.6)",
//           duration: 0.3,
//           ease: "power2.out",
//         });
//       });

//       el.addEventListener("mouseleave", () => {
//         gsap.to(el, {
//           backgroundColor: "transparent",
//           color: "#fff",
//           boxShadow: "0 0 0 rgba(0,0,0,0)",
//           duration: 0.3,
//           ease: "power2.inOut",
//         });
//       });
//     });
//   }, []);

//   return (
//     <div className=" bg-black text-white flex flex-col items-center justify-center space-y-10">
   
//     </div>
//   );
// };

// export default HoverColorEffect;

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// const AnimatedCursor = () => {
//   const cursorRef = useRef(null);

//   useEffect(() => {
//     const cursor = cursorRef.current;
//     let pos = { x: 0, y: 0 };
//     let mouse = { x: 0, y: 0 };

//     // Track mouse position
//     const moveCursor = (e) => {
//       mouse.x = e.clientX;
//       mouse.y = e.clientY;
//     };

//     // Smooth follow motion
//     const render = () => {
//       pos.x += (mouse.x - pos.x) * 0.2;
//       pos.y += (mouse.y - pos.y) * 0.2;
//       gsap.set(cursor, { x: pos.x, y: pos.y });
//       requestAnimationFrame(render);
//     };

//     render();
//     window.addEventListener("mousemove", moveCursor);

//     // Hover logic for elements
//     const hoverTargets = document.querySelectorAll(".cursor-hover");

//     hoverTargets.forEach((el) => {
//       el.addEventListener("mouseenter", () => {
//         // Change the element style
//         gsap.to(el, {
//           // backgroundColor: "rgba(0, 255, 255, 0.2)",
//           color: "#00ffff",
//           // boxShadow: "0 0 40px rgba(0,255,255,0.5)",
//           borderColor: "rgba(0,255,255,0.4)",
//           duration: 0.3,
//           ease: "power2.out",
       
//         });

//         // Change cursor to yellow
//         gsap.to(cursor, {
//           backgroundColor: "#FFD700", // gold/yellow
//           boxShadow: "0 0 20px rgba(255,215,0,0.8)",
//           border: "1px solid rgba(255,215,0,0.7)",
//           duration: 0.3,
//           ease: "power2.out",
//           scale:1.2
          
          
//         });
//       });

//       el.addEventListener("mouseleave", () => {
//         // Revert element
//         gsap.to(el, {
//           backgroundColor: "transparent",
//           color: "#ffffff",
//           boxShadow: "0 0 0 rgba(0,0,0,0)",
//           borderColor: "rgba(255,255,255,0.1)",
//           duration: 0.3,
//           ease: "power2.inOut",
//         });

//         // Revert cursor back to cyan
//         gsap.to(cursor, {
//           backgroundColor: "#00ffff",
//           boxShadow: "0 0 10px rgba(0,255,255,0.5)",
//           border: "1px solid rgba(0,255,255,0.6)",
//           duration: 0.3,
//           ease: "power2.inOut",
//         });
//       });
//     });

//     return () => {
//       window.removeEventListener("mousemove", moveCursor);
//     };
//   }, []);

//   return (
//     <div
//       ref={cursorRef}
//       className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[9999]"
//       style={{
//         backgroundColor: "#00ffff",
//         border: "1px solid rgba(0,255,255,0.6)",
//         boxShadow: "0 0 60px rgba(0,255,255,0.5)",
//         transform: "translate(-50%, -50%)",
//         mixBlendMode: "normal",
//       }}
//     ></div>
//   );
// };

// export default AnimatedCursor;

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    let pos = { x: 0, y: 0 };
    let mouse = { x: 0, y: 0 };

    // Track mouse position
    const moveCursor = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    // Smooth follow motion
    const render = () => {
      pos.x += (mouse.x - pos.x) * 0.2;
      pos.y += (mouse.y - pos.y) * 0.2;
      gsap.set(cursor, { x: pos.x, y: pos.y });
      requestAnimationFrame(render);
    };

    render();
    window.addEventListener("mousemove", moveCursor);

    // Hover logic for elements
    const hoverTargets = document.querySelectorAll(".cursor-hover");
    const visibleTargets = document.querySelectorAll(".cursor-visible"); // 👈 added new class support
    const pricingSection=document.querySelectorAll(".price");
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        // Change the element style
        gsap.to(el, {
          color: "#00ffff",
          borderColor: "rgba(0,255,255,0.4)",
          duration: 0.3,
          ease: "power2.out",
        });

        // Change cursor to yellow
        gsap.to(cursor, {
          backgroundColor: "#FFD700",
          boxShadow: "0 0 20px rgba(255,215,0,0.8)",
          border: "1px solid rgba(255,215,0,0.7)",
          duration: 0.3,
          ease: "power2.out",
          scale: 1.2,
        });
      });

      el.addEventListener("mouseleave", () => {
        // Revert element
        gsap.to(el, {
          backgroundColor: "transparent",
          color: "#ffffff",
          boxShadow: "0 0 0 rgba(0,0,0,0)",
          borderColor: "rgba(255,255,255,0.1)",
          duration: 0.3,
          ease: "power2.inOut",
        });

        // Revert cursor back to cyan
        gsap.to(cursor, {
          backgroundColor: "#00ffff",
          boxShadow: "0 0 10px rgba(0,255,255,0.5)",
          border: "1px solid rgba(0,255,255,0.6)",
          duration: 0.3,
          ease: "power2.inOut",
          scale: 1,
        });
      });
    });

  pricingSection.forEach((el)=>{
     el.addEventListener("mouseenter", () => {
        // Change the element style
        gsap.to(el, {
          color: "#00ffff",
          borderColor: "rgba(0,255,255,0.4)",
          
          duration: 0.3,
          ease: "power2.out",
        });

          gsap.to(cursor, {
          backgroundColor: "#FFD700",
          boxShadow: "0 0 20px rgba(255,215,0,0.8)",
          border: "1px solid rgba(255,215,0,0.7)",
          duration: 0.3,
          ease: "power2.out",
          scale: 1.2,
        });
        // Change cursor to yellow

      });
         el.addEventListener("mouseleave", () => {
        // Revert element
    

        // Revert cursor back to cyan
        gsap.to(cursor, {
          backgroundColor: "#00ffff",
          boxShadow: "0 0 10px rgba(0,255,255,0.5)",
          border: "1px solid rgba(0,255,255,0.6)",
          duration: 0.3,
          ease: "power2.inOut",
          scale: 1,
        });
      });
      
  })
    
    // ✨ New behavior for elements with `.cursor-visible`
    visibleTargets.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(cursor, {
          backgroundColor: "rgba(0,0,0,0)", // transparent
          boxShadow: "0 0 0 rgba(0,0,0,0)",
          border: "1px solid rgba(0,0,0,0)",
          duration: 0.3,
          ease: "power2.out",
        });
      });

      el.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
          backgroundColor: "#00ffff", // back to cyan
          boxShadow: "0 0 10px rgba(0,255,255,0.5)",
          border: "1px solid rgba(0,255,255,0.6)",
          duration: 0.3,
          ease: "power2.inOut",
        });
      });
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[9999]"
      style={{
        backgroundColor: "#00ffff",
        border: "1px solid rgba(0,255,255,0.6)",
        boxShadow: "0 0 60px rgba(0,255,255,0.5)",
        transform: "translate(-50%, -50%)",
        mixBlendMode: "normal",
      }}
    ></div>
  );
};

export default AnimatedCursor;
