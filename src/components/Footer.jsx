// // import React from "react";

// // // Social media SVGs as depicted in your footer
// // const SocialIcons = [
// //   { href: "#", svg: (
// //     <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
// //       <path d="M19.615 3.184A10.944 10.944 0 0 0 12 0C5.373 0 0 5.373 0 12a11.001 11.001 0 0 0 19.199 7.508c-2.198-.08-2.984-1.05-2.984-1.05-.492-1.012-1.199-1.281-1.199-1.281-.979-.666.074-.652.074-.652 1.084.075 1.655 1.114 1.655 1.114.962 1.654 2.518 1.201 3.133.918.097-.7.277-1.202.504-1.478-1.754-.202-3.619-.877-3.619-3.898 0-.86.308-1.563.812-2.116-.083-.201-.352-1.013.077-2.111 0 0 .662-.212 2.17.808a7.536 7.536 0 0 1 1.977-.267c.672.004 1.352.092 1.977.267 1.507-1.021 2.17-.808 2.17-.808.43 1.098.161 1.91.08 2.111.506.553.81 1.256.81 2.116 0 3.025-1.868 3.693-3.647 3.89.285.246.539.733.539 1.479 0 1.07-.012 1.934-.012 2.197 0 .217.144.47.553.39A11.005 11.005 0 0 0 24 12c0-6.627-5.373-12-12-12z" />
// //     </svg>
// //   )},
// //   { href: "#", svg: (
// //     <svg viewBox="0 0 448 512" fill="currentColor" className="w-5 h-5">
// //       <path d="M120 108c-13 0-24 9-24 24v248c0 15 11 24 24 24s24-9 24-24V132c0-15-11-24-24-24zM227 276h-1c-13 0-23-12-27-24 -3-14-21-94-24-106 -2-7-7-19-18-19 -2 0-11 0-15 12 -7 29-21 101-24 115 -2 6-8 18-18 18 -7 0-13 -6-13-13 0-2-1-4-1-7 0-4 1-8 3-10 5-6 10-10 15-13 4-2 7-2 8-2s5 0 10 2c5 2 12 6 19 14 13 14 8 38 21 42 5 .1 8-4 10-12C181 295 255 387 227 276z"/>
// //     </svg>
// //   )},
// //   { href: "#", svg: (
// //     <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
// //       <path d="M12 1C5.925 1 1 5.925 1 12c0 6.075 4.925 11 11 11s11-4.925 11-11C23 5.925 18.075 1 12 1zM8.454 18a1.454 1.454 0 1 1 0-2.908 1.454 1.454 0 0 1 0 2.908zm0 0H7c-.555 0-1-.445-1-1 0-.554.445-1 1-1h1.454a1.454 1.454 0 0 1 1.454 1 1.454 1.454 0 0 1-1.454 1zm7.092 0a1.454 1.454 0 1 1 0-2.908 1.454 1.454 0 0 1 0 2.908zm0 0h-1.454c-.555 0-1-.445-1-1 0-.554.445-1 1-1h1.454a1.454 1.454 0 0 1 1.454 1 1.454 1.454 0 0 1-1.454 1z"/>
// //     </svg>
// //   )},
// //   { href: "#", svg: (
// //     <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
// //       <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/>
// //     </svg>
// //   )},
// //   { href: "#", svg: (
// //     <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
// //       <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.599.111.82-.25.82-.561 0-.277-.01-1.012-.015-1.986-3.338.725-4.042-1.613-4.042-1.613-.546-1.389-1.333-1.759-1.333-1.759-1.089-.745.084-.729.084-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.333-5.466-5.932 0-1.31.469-2.381 1.236-3.22-.123-.304-.535-1.527.117-3.176 0 0 1.008-.323 3.301 1.23a11.45 11.45 0 0 1 3.004-.404c1.019.005 2.047.137 3.004.404 2.292-1.553 3.299-1.23 3.299-1.23.653 1.649.24 2.872.118 3.176.77.839 1.235 1.91 1.235 3.22 0 4.609-2.804 5.624-5.476 5.921.43.372.813 1.104.813 2.224 0 1.606-.015 2.898-.015 3.293 0 .314.217.677.825.562C20.565 21.795 24 17.303 24 12c0-6.627-5.373-12-12-12z"/>
// //     </svg>
// //   )},
// // ];

// // // For the message bubble use a grayscale SVG inline
// // const MessageBubble = () => (
// //   <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-[#212324]">
// //     <svg fill="none" viewBox="0 0 56 56" width="40" height="40">
// //       <circle cx="28" cy="28" r="26" fill="#535353"/>
// //       <path d="M18 25c0-5 5.373-9 12-9s12 4 12 9-5.373 9-12 9c-1.02 0-2.016-.066-2.98-.187L18 39" stroke="#fff" strokeWidth="2.5" fill="none" />
// //     </svg>
// //   </div>
// // );

// // export default function Footer() {
// //   return (
// //     <div className="bg-[#101010] min-h-screen text-white px-4 md:px-8 py-10 font-sans flex flex-col justify-between">
// //       {/* Upper: Newsletter & Feedback */}
// //       <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-8 md:gap-10">
// //         {/* Newsletter form */}
// //         <div className="flex-1 pt-2">
// //           <h2 className="text-4xl font-light mb-3 leading-tight">Join Our Newsletter</h2>
// //           <p className="text-[#bdbec0] text-base mb-8">
// //             Hipster ipsum tattooed brunch I'm baby. Bread on hipster deep plz meditation.
// //           </p>
// //           <div className="flex gap-3 mb-4 w-full max-w-lg">
// //             <input
// //               type="email"
// //               className="flex-1 bg-[#23262F] rounded-full px-5 py-3 text-gray-200 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d1e55e] transition"
// //               placeholder="YOUR EMAIL"
// //             />
// //             <button className="bg-[#e8ff64] hover:bg-[#daf84b] text-[#23262F] font-bold px-7 py-3 rounded-full shadow-none text-base transition">
// //               SUBMIT
// //             </button>
// //           </div>
// //         </div>
// //         {/* Feedback box */}
// //         <div className="flex-1">
// //           <div className="rounded-xl border border-[#23262F] p-6 flex items-start gap-5 bg-opacity-90 bg-[#181a1b] shadow-sm">
// //             <MessageBubble />
// //             <div>
// //               <div className="text-base mb-2 leading-normal">
// //                 Your feedback is much appreciated. Send an email to{" "}
// //                 <a href="mailto:info@unmarshal.io" className="underline text-[#e8ff64]">info@unmarshal.io</a> for enquires.
// //               </div>
// //               <a href="#" className="font-semibold underline tracking-wide text-sm mt-2 inline-block">SEND MESSAGE</a>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       {/* Divider */}
// //       <div className="border-t border-[#23262F] mt-10 mb-7 w-full max-w-7xl mx-auto" />

// //       {/* Main Footer */}
// //       <footer className=" p-6 mx-auto w-full flex flex-col md:flex-row md:justify-between md:items-start gap-7">
// //         {/* Brand section */}
// //         <div>
// //           <div className="flex items-center mb-3">
// //             <span className="bg-[#e8ff64] rounded-full w-9 h-9 flex items-center justify-center mr-3">
// //               <span className="text-[#23262F] font-bold text-2xl">u</span>
// //             </span>
// //             <span className="text-lg font-semibold">unmarshal</span>
// //           </div>
// //           <p className="text-[#bdbec0] text-xs mb-4">
// //             The easiest way to query Blockchain data from<br />
// //             20+ chains including Ethereum, BSC, Polygon
// //           </p>
// //           <div className="flex gap-4">
// //             {SocialIcons.map((item, idx) => (
// //               <a key={idx} href={item.href} className="text-[#bdbec0] hover:text-[#e8ff64] transition">{item.svg}</a>
// //             ))}
// //           </div>
// //         </div>
// //         {/* Company links grid */}
// //         <div className="flex flex-row gap-20">
// //           <div>
// //             <div className="text-white font-semibold mb-4 text-sm">Company</div>
// //             <ul className="space-y-1 text-[#e6e7e8] text-[15px]">
// //               {["About Us","Contact","Products","Unmarshal 2.0","$MARSH","Roadmap","Company","Explorer"].map(txt => (
// //                 <li key={txt}><a href="#" className="hover:text-[#e8ff64]">{txt}</a></li>
// //               ))}
// //             </ul>
// //           </div>
// //           <div>
// //             <div className="text-white font-semibold mb-4 text-sm">Legal</div>
// //             <ul className="space-y-1 text-[#e6e7e8] text-[15px]">
// //               {["Notifications","DeFi APIs","NFT APIs","Bridge","Stake","NFT Indexer"].map(txt => (
// //                 <li key={txt}><a href="#" className="hover:text-[#e8ff64]">{txt}</a></li>
// //               ))}
// //             </ul>
// //           </div>
// //         </div>
// //       </footer>
// //       {/* Footer strip */}
// //       <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:justify-between items-center text-[#757678] text-xs border-t border-[#23262F] pt-5 mt-10">
// //         <span>© 2024 Unmarshal. All Rights Reserved</span>
// //         <div className="flex gap-2 mt-2 md:mt-0">
// //           <a href="#" className="hover:text-[#e8ff64]">Terms and Conditions</a>
// //           <span>|</span>
// //           <a href="#" className="hover:text-[#e8ff64]">Privacy Policy</a>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import React from "react";
// import { FaTwitter, FaMedium, FaTelegramPlane, FaDiscord, FaGithub } from "react-icons/fa";
// import { IoChatbubbles } from "react-icons/io5";

// const Footer = () => {
//   return (
//     <footer className="bg-[#0D0F12]  text-white px-6 md:px-12 lg:px-16 py-16">
//       {/* Newsletter + Feedback Section */}
//       <div className="flex flex-col lg:flex-row justify-between gap-10 border-b border-gray-800 pb-14">
//         {/* Newsletter */}
//         <div className="max-w-lg  scroll-fade-up">
//           <h2 className="text-5xl font-extralight mb-3 tracking-wide">Join Our Community</h2>
//           <p className="text-gray-400 mb-6 mt-5  ml-2 text-sm leading-relaxed">
//             Hipster ipsum tattooed brunch I'm baby. Bread on hipster deep plz meditation.
//              Bread on hipster deep plz meditation.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-3 ">
//             <input
//               type="email"
//               placeholder="YOUR EMAIL"
//               className="bg-[#242627]  max-w-full lg:max-w-[300px] w-full sm:flex-1 rounded-full px-5 py-3 text-sm focus:outline-none text-gray-300 placeholder-gray-500"
//             />
//             <button className="bg-[#D6EF37] font-bold  text-black  rounded-full px-6 py-3 text-sm transition">
//               SUBMIT
//             </button>
//           </div>
//         </div>

//         {/* Feedback Box */}
//         <div className=" border border-[#1f1f1f]  scroll-fade-up rounded-2xl p-6 max-w-lg lg:w-full flex  items-start  justify-center">
//           <div className="bg-[#1f1f1f]  rounded-2xl px-14 w-40 h-36 flex   items-center justify-center ">
//             <IoChatbubbles className="w-20 h-36 text-[#CCCCCC]" />
//           </div>
//           <div className="flex flex-col pl-4 p-2 h-full justify-between items-start ">
//           <p className="text-gray-300 text-sm mb-4 leading-relaxed ">
//             Your feedback is much appreciated. Send an email to{" "}
//             <a
//               href="mailto:info@unmarshal.io"
//               className="text-[#c5f200] hover:underline"
//             >
//               info@unmarshal.io
//             </a>{" "}
//             for enquiries.
//           </p>
//             <a href="#" className="text-white underline text-sm font-medium">
//             SEND MESSAGE
//           </a>
//           </div>
        
//         </div>
//       </div>

//       {/* Footer Links */}
//       <div className="mt-14 flex flex-col lg:flex-row justify-between">
//         {/* Logo + Description */}
//         <div>
//           <div className="flex items-center gap-2 mb-4">
//             <div className="bg-[#D6F039] rounded-full w-9 h-9 flex items-center justify-center text-black font-bold text-lg">
//               t
//             </div>
//             <span className="font-semibold text-lg">unmarshal</span>
//           </div>
//           <p className="text-gray-400 text-sm mb-5 max-w-xs leading-relaxed">
//             The easiest way to query Blockchain data from 20+ chains including
//             Ethereum, BSC, Polygon
//           </p>
//           <div className="flex gap-5 text-gray-400 text-xl">
//             <a href="#" className="hover:text-white"><FaTwitter /></a>
//             <a href="#" className="hover:text-white"><FaMedium /></a>
//             <a href="#" className="hover:text-white"><FaTelegramPlane /></a>
//             <a href="#" className="hover:text-white"><FaDiscord /></a>
//             <a href="#" className="hover:text-white"><FaGithub /></a>
//           </div>
//         </div>
          
//           <div className="flex justify-between mt-12 lg:justify-evenly items-start  w-full lg:w-2/5">
//         {/* Company Links */}
//         <div className="flex flex-col justify-startitems-start">
//           <h3 className="font-semibold mb-4 text-white">Company</h3>
//           <ul className="space-y-2 text-gray-400 text-sm">
//             {["About Us", "Contact", "Products", "Unmarshal 2.0", "$MARSH", "Roadmap", "Company", "Explorer"].map((item) => (
//               <li key={item} className="hover:text-white cursor-pointer">
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Legal Links */}
//         <div>
//           <h3 className="font-semibold mb-4 text-white">Legal</h3>
//           <ul className="space-y-2 text-gray-400 text-sm">
//             {["Notifications", "DeFi APIs", "NFT APIs", "Bridge", "Stake", "NFT Indexer"].map((item) => (
//               <li key={item} className="hover:text-white cursor-pointer">
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       </div>

//       {/* Bottom Line */}
//       <div className="mt-14 flex flex-col sm:flex-row justify-between items-center text-gray-200 text-xs border-t border-gray-800 pt-5">
//         <p>© 2024 Unmarshal. All Rights Reserved</p>
//         <div className="flex gap-3 mt-3 sm:mt-0">
//           <a href="#" className="hover:text-white">Terms and Conditions</a>
//           <span>|</span>
//           <a href="#" className="hover:text-white">Privacy Policy</a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { FaTwitter, FaMedium, FaTelegramPlane, FaDiscord, FaGithub } from "react-icons/fa";
import { IoChatbubbles } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-[#0D0F12] text-white px-6 md:px-12 lg:px-16 py-16">
      {/* Newsletter + Feedback Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 border-b border-gray-800 pb-14">
        {/* Newsletter */}
        <div className="max-w-lg scroll-fade-up">
          <h2 className="text-5xl 2xl:text-6xl font-extralight mb-3 tracking-wide">Join Our Community</h2>
          <p className="text-gray-400 mb-6 mt-5 ml-2 text-sm 2xl:text-base leading-relaxed">
            Hipster ipsum tattooed brunch I'm baby. Bread on hipster deep plz meditation.
            Bread on hipster deep plz meditation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="bg-[#242627] max-w-full lg:max-w-[300px] w-full sm:flex-1 rounded-full px-5 py-3 text-sm 2xl:text-base 2xl:px-6 2xl:py-4 focus:outline-none text-gray-300 placeholder-gray-500"
            />
            <button className="bg-[#D6EF37] font-bold text-black rounded-full px-6 py-3 text-sm 2xl:text-base 2xl:px-8 2xl:py-4 transition">
              SUBMIT
            </button>
          </div>
        </div>

        {/* Feedback Box */}
        <div className="border border-[#1f1f1f] scroll-fade-up rounded-2xl p-6 max-w-lg lg:w-full flex items-start justify-center">
          <div className="bg-[#1f1f1f] rounded-2xl px-14 w-40 h-36 flex items-center justify-center 2xl:w-48 2xl:h-44">
            <IoChatbubbles className="w-20 h-36 text-[#CCCCCC] 2xl:w-24 2xl:h-44" />
          </div>
          <div className="flex flex-col pl-4 p-2 h-full justify-between items-start">
            <p className="text-gray-300 text-sm 2xl:text-base mb-4 leading-relaxed">
              Your feedback is much appreciated. Send an email to{" "}
              <a
                href="mailto:info@unmarshal.io"
                className="text-[#c5f200] hover:underline"
              >
                info@unmarshal.io
              </a>{" "}
              for enquiries.
            </p>
            <a href="#" className="text-white underline text-sm 2xl:text-base font-medium">
              SEND MESSAGE
            </a>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="mt-14 flex flex-col lg:flex-row justify-between">
        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-[#D6F039] rounded-full w-9 h-9 flex items-center justify-center text-black font-bold text-lg 2xl:text-xl 2xl:w-12 2xl:h-12">
              t
            </div>
            <span className="font-semibold text-lg 2xl:text-xl">unmarshal</span>
          </div>
          <p className="text-gray-400 text-sm 2xl:text-base mb-5 max-w-xs leading-relaxed">
            The easiest way to query Blockchain data from 20+ chains including
            Ethereum, BSC, Polygon
          </p>
          <div className="flex gap-5 text-gray-400 text-xl 2xl:text-2xl">
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaMedium /></a>
            <a href="#" className="hover:text-white"><FaTelegramPlane /></a>
            <a href="#" className="hover:text-white"><FaDiscord /></a>
            <a href="#" className="hover:text-white"><FaGithub /></a>
          </div>
        </div>
          
        <div className="flex justify-between mt-12 lg:justify-evenly items-start w-full lg:w-2/5">
          {/* Company Links */}
          <div className="flex flex-col justify-startitems-start">
            <h3 className="font-semibold mb-4 text-white text-sm 2xl:text-base">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm 2xl:text-base">
              {["About Us", "Contact", "Products", "Unmarshal 2.0", "$MARSH", "Roadmap", "Company", "Explorer"].map((item) => (
                <li key={item} className="hover:text-white cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white text-sm 2xl:text-base">Legal</h3>
            <ul className="space-y-2 text-gray-400 text-sm 2xl:text-base">
              {["Notifications", "DeFi APIs", "NFT APIs", "Bridge", "Stake", "NFT Indexer"].map((item) => (
                <li key={item} className="hover:text-white cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-14 flex flex-col sm:flex-row justify-between items-center text-gray-200 text-xs 2xl:text-sm border-t border-gray-800 pt-5">
        <p>© 2024 Unmarshal. All Rights Reserved</p>
        <div className="flex gap-3 mt-3 sm:mt-0">
          <a href="#" className="hover:text-white">Terms and Conditions</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
