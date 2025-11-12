
// import React from "react";
// import { motion } from "framer-motion";
// import { Star } from "lucide-react";

// const testimonials = [
//   {
//     name: "Riya Mehta",
//     role: "Founder, TaskFlow AI",
//     image:
//       "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=100&q=80",
//     text: "Voice Overflow transformed our customer engagement with AI-driven chatbots. The onboarding was smooth, and the analytics helped us scale faster.",
//     rating: 5,
//     color: "bg-[#FEF9C4]",
//   },
//   {
//     name: "Arjun Patel",
//     role: "CTO, FinEdge Technologies",
//     image:
//       "https://images.unsplash.com/photo-1603415526960-f7e0328f6a18?auto=format&fit=crop&w=100&q=80",
//     text: "The platform’s automation tools are next-level. We integrated multiple CRMs seamlessly. Totally worth the investment!",
//     rating: 5,
//     color: "bg-[#EAF4F4]",
//   },
//   {
//     name: "Sanya Kapoor",
//     role: "Marketing Head, Growthify",
//     image:
//       "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=100&q=80",
//     text: "Our lead conversion improved by 60% after adopting Voice Overflow’s AI solutions. The insights are gold for marketing decisions.",
//     rating: 5,
//     color: "bg-[#F5E9DA]",
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section className="py-16 bg-[#0d0f12]" id="testimonials">
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl font-bold text-white mb-4"
//         >
//           What Our Clients Say
//         </motion.h2>
//         <p className="text-gray-500 mb-12">
//           Trusted by SaaS startups and enterprise teams across the world 🌍
//         </p>

//         <div className="grid md:grid-cols-3 gap-8">
//           {testimonials.map((t, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.03 }}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.1 }}
//               className={`rounded-2xl p-6 shadow-lg ${t.color} transition-all`}
//             >
//               <div className="flex justify-center mb-4">
//                 <img
//                   src={t.image}
//                   alt={t.name}
//                   className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
//                 />
//               </div>
//               <p className="text-gray-700 mb-4 italic">“{t.text}”</p>
//               <div className="flex justify-center mb-2">
//                 {Array.from({ length: t.rating }).map((_, i) => (
//                   <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
//                 ))}
//               </div>
//               <h3 className="text-lg font-semibold text-gray-800">{t.name}</h3>
//               <p className="text-sm text-gray-500">{t.role}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;


// import React, { useRef } from "react";
// import { motion } from "framer-motion";
// import { Star, ArrowLeft, ArrowRight } from "lucide-react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const testimonials = [
//   {
//     name: "Riya Mehta",
//     role: "Founder, TaskFlow AI",
//     image:
//       "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=100&q=80",
//     text: "Voice Overflow transformed our customer engagement with AI-driven chatbots. The onboarding was smooth, and the analytics helped us scale faster.",
//     rating: 5,
//     color: "bg-[#FEF9C4]",
//   },
//   {
//     name: "Arjun Patel",
//     role: "CTO, FinEdge Technologies",
//     image:
//       "https://images.unsplash.com/photo-1603415526960-f7e0328f6a18?auto=format&fit=crop&w=100&q=80",
//     text: "The platform’s automation tools are next-level. We integrated multiple CRMs seamlessly. Totally worth the investment!",
//     rating: 5,
//     color: "bg-[#FFF9C4]",
//   },
//   {
//     name: "Sanya Kapoor",
//     role: "Marketing Head, Growthify",
//     image:
//       "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=100&q=80",
//     text: "Our lead conversion improved by 60% after adopting Voice Overflow’s AI solutions. The insights are gold for marketing decisions.",
//     rating: 5,
//     color: "bg-[#FFF9C4]",
//   },
//   {
//     name: "Vikram Rao",
//     role: "CEO, CloudBridge",
//     image:
//       "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=100&q=80",
//     text: "Excellent team and product! Their automation stack made our internal workflows super efficient. Highly recommended.",
//     rating: 5,
//     color: "bg-[#D8F3DC]",
//   },
// ];

// const Testimonials = () => {
//   const swiperRef = useRef(null);

//   return (
//     <section className="py-20 bg-[#0d0f12] relative text-white" id="testimonials">
//       {/* Background grid pattern */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] z-0" />

//       <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl font-bold text-white mb-3"
//         >
//           What Our Clients Say
//         </motion.h2>
//         <p className="text-gray-400 mb-12">
//           Trusted by SaaS startups and enterprise teams worldwide 🌍
//         </p>

//         {/* Swiper Container */}
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           spaceBetween={30}
//           slidesPerView={3}
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 6000, disableOnInteraction: false }}
//           onBeforeInit={(swiper) => {
//             swiperRef.current = swiper;
//           }}
//           breakpoints={{
//             768: { slidesPerView: 2 },
//           }}
//           className="pb-12"
//         >
//           {testimonials.map((t, i) => (
//             <SwiperSlide key={i}>
//               <motion.div
//                 whileHover={{ scale: 1.03 }}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 className={`rounded-2xl p-8 shadow-xl ${t.color} text-white max-w-lg mx-auto`}
//               >
//                 <div className="flex justify-center mb-4">
//                   <img
//                     src={t.image}
//                     alt={t.name}
//                     className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
//                   />
//                 </div>
//                 <p className="text-gray-700 mb-4 italic leading-relaxed">
//                   “{t.text}”
//                 </p>
//                 <div className="flex justify-center mb-2">
//                   {Array.from({ length: t.rating }).map((_, i) => (
//                     <Star
//                       key={i}
//                       className="w-5 h-5 text-yellow-500 fill-yellow-500"
//                     />
//                   ))}
//                 </div>
//                 <h3 className="text-lg font-semibold">{t.name}</h3>
//                 <p className="text-sm text-gray-600">{t.role}</p>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Custom Navigation Buttons */}
//         <div className="flex justify-center gap-6 mt-6">
//           <button
//             onClick={() => swiperRef.current?.slidePrev()}
//             className="w-12 h-12 rounded-lg border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-all group"
//           >
//             <ArrowLeft className="w-5 h-5 text-gray-300 group-hover:text-white" />
//           </button>
//           <button
//             onClick={() => swiperRef.current?.slideNext()}
//             className="w-12 h-12 rounded-lg border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-all group"
//           >
//             <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-white" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Riya Mehta",
    role: "Founder, TaskFlow AI",
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=100&q=80",
    text: "Voice Overflow transformed our customer engagement with AI-driven chatbots.  and the analytics helped us scale faster.",
    rating: 5,
  },
  {
    name: "Arjun Patel",
    role: "CTO, FinEdge Technologies",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=100&q=80",
    text: "The platform’s automation tools are next-level. We integrated multiple CRMs seamlessly. Totally worth the  Best investment!",
    rating: 5,
  },
  {
    name: "Sanya Kapoor",
    role: "Marketing Head, Growthify",
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=100&q=80",
    text: "Our lead conversion improved by 60% after adopting Voice Overflow’s AI solutions. The insights are gold for marketing  Bexdecisions.",
    rating: 5,
  },
  {
    name: "Vikram Rao",
    role: "CEO, CloudBridge",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=100&q=80",
    text: "Excellent team and product! Their automation stack made our internal workflows super efficient. Highly recommended.",
    rating: 5,
  },
];

const Testimonials = () => {
  const swiperRef = useRef(null);

  return (
    <section
      className="py-20 bg-[#0d0f12]  relative text-white"
      id="testimonials"
    >
      {/* Subtle grid background */}
   

      <div className=" max-w-6xl  p-0 2xl:p-20 2xl:max-w-full 2xl:w-full  mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white  mb-3"
        >
          What Our Clients Say
        </motion.h2>
        <p className="text-gray-400 mb-12">
          Trusted by SaaS startups and enterprise teams worldwide 🌍
        </p>

        {/* Swiper Container */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
             1540: { slidesPerView: 4},
            768: { slidesPerView: 3},
            480: { slidesPerView: 1 },
          }}
          className="pb-12"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8  backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-xl    text-white] max-w-sm mx-auto"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#daff45]"
                  />
                </div>
                <p className="text-white mb-4 italic leading-relaxed">
                  “{t.text}”
                </p>
                <div className="flex justify-center mb-2">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-[#020202] fill-[#bad833]"
                    />
                  ))}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {t.name}
                </h3>
                <p className="text-sm text-white/50">{t.role}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="flex justify-center gap-6 mt-6">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-12 h-12 rounded-lg bg-[#daff45] text-[#10121a] flex items-center justify-center hover:scale-105 transition-transform"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-12 h-12 rounded-lg bg-[#daff45] text-[#10121a] flex items-center justify-center hover:scale-105 transition-transform"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
