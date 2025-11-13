
// // import React, { useRef } from "react";
// // import { motion } from "framer-motion";
// // import { Star, ArrowLeft, ArrowRight } from "lucide-react";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Navigation, Pagination, Autoplay } from "swiper/modules";
// // import "swiper/css";
// // import "swiper/css/pagination";

// // const testimonials = [
// //   {
// //     name: "Riya Mehta",
// //     role: "Founder, TaskFlow AI",
// //     image:
// //       "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=100&q=80",
// //     text: "Voice Overflow transformed our customer engagement with AI-driven chatbots.  and the analytics helped us scale faster.",
// //     rating: 5,
// //   },
// //   {
// //     name: "Arjun Patel",
// //     role: "CTO, FinEdge Technologies",
// //     image:
// //       "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=100&q=80",
// //     text: "The platform’s automation tools are next-level. We integrated multiple CRMs seamlessly. Totally worth the  Best investment!",
// //     rating: 5,
// //   },
// //   {
// //     name: "Sanya Kapoor",
// //     role: "Marketing Head, Growthify",
// //     image:
// //       "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=100&q=80",
// //     text: "Our lead conversion improved by 60% after adopting Voice Overflow’s AI solutions. The insights are gold for marketing  Bexdecisions.",
// //     rating: 5,
// //   },
// //   {
// //     name: "Vikram Rao",
// //     role: "CEO, CloudBridge",
// //     image:
// //       "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=100&q=80",
// //     text: "Excellent team and product! Their automation stack made our internal workflows super efficient. Highly recommended.",
// //     rating: 5,
// //   },
// // ];

// // const Testimonials = () => {
// //   const swiperRef = useRef(null);

// //   return (
// //     <section
// //       className="py-20 bg-[#0d0f12]  relative text-white"
// //       id="testimonials"
// //     >
// //       {/* Subtle grid background */}
   

// //       <div className=" max-w-6xl  p-0 2xl:p-20 2xl:max-w-full 2xl:w-full  mx-auto px-6 text-center relative z-10">
// //         <motion.h2
// //           initial={{ opacity: 0, y: 40 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           className="text-4xl font-bold text-white  mb-3"
// //         >
// //           What Our Clients Say
// //         </motion.h2>
// //         <p className="text-gray-400 mb-12">
// //           Trusted by SaaS startups and enterprise teams worldwide 🌍
// //         </p>

// //         {/* Swiper Container */}
// //         <Swiper
// //           modules={[Navigation, Pagination, Autoplay]}
// //           spaceBetween={30}
// //           slidesPerView={1}
// //           pagination={{ clickable: true }}
// //           autoplay={{ delay: 6000, disableOnInteraction: false }}
// //           onBeforeInit={(swiper) => {
// //             swiperRef.current = swiper;
// //           }}
// //           breakpoints={{
// //              1540: { slidesPerView: 4},
// //             768: { slidesPerView: 3},
// //             480: { slidesPerView: 1 },
// //           }}
// //           className="pb-12"
// //         >
// //           {testimonials.map((t, i) => (
// //             <SwiperSlide key={i}>
// //               <motion.div
// //                 whileHover={{ scale: 1.03 }}
// //                 initial={{ opacity: 0, y: 50 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: i * 0.1 }}
// //                 className="p-8  backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-xl    text-white] max-w-sm mx-auto"
// //               >
// //                 <div className="flex justify-center mb-4">
// //                   <img
// //                     src={t.image}
// //                     alt={t.name}
// //                     className="w-16 h-16 rounded-full object-cover border-2 border-[#daff45]"
// //                   />
// //                 </div>
// //                 <p className="text-white mb-4 italic leading-relaxed">
// //                   “{t.text}”
// //                 </p>
// //                 <div className="flex justify-center mb-2">
// //                   {Array.from({ length: t.rating }).map((_, i) => (
// //                     <Star
// //                       key={i}
// //                       className="w-5 h-5 text-[#020202] fill-[#bad833]"
// //                     />
// //                   ))}
// //                 </div>
// //                 <h3 className="text-lg font-semibold text-white">
// //                   {t.name}
// //                 </h3>
// //                 <p className="text-sm text-white/50">{t.role}</p>
// //               </motion.div>
// //             </SwiperSlide>
// //           ))}
// //         </Swiper>

// //         {/* Custom Navigation Buttons */}
// //         <div className="flex justify-center gap-6 mt-6">
// //           <button
// //             onClick={() => swiperRef.current?.slidePrev()}
// //             className="w-12 h-12 rounded-lg bg-[#daff45] text-[#10121a] flex items-center justify-center hover:scale-105 transition-transform"
// //           >
// //             <ArrowLeft className="w-5 h-5" />
// //           </button>
// //           <button
// //             onClick={() => swiperRef.current?.slideNext()}
// //             className="w-12 h-12 rounded-lg bg-[#daff45] text-[#10121a] flex items-center justify-center hover:scale-105 transition-transform"
// //           >
// //             <ArrowRight className="w-5 h-5" />
// //           </button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Testimonials;


// import React, { useRef, useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Star, ArrowLeft, ArrowRight, Plus, X } from "lucide-react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const API_URL = "http://localhost:5000/api/testimonials";

// // 🧩 Set your fixed image here
// const DEFAULT_IMAGE =
//   "https://drpunitjain.in/wp-content/uploads/2021/05/testimonial-pic.png";
  

// const Testimonials = () => {
//   const [testimonials, setTestimonials] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     role: "",
//     text: "",
//     rating: 5,
//   });
//   const [loading, setLoading] = useState(false);
//   const swiperRef = useRef(null);

//   // ✅ Fetch testimonials from backend
//   useEffect(() => {
//     fetch(API_URL)
//       .then((res) => res.json())
//       .then((data) => setTestimonials(data))
//       .catch((err) => console.error("Error fetching testimonials:", err));
//   }, []);

//   // ✅ Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // ✅ Submit form to backend
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const newTestimonial = {
//       ...formData,
//       image: DEFAULT_IMAGE, // ✅ Use fixed image for all testimonials
//       rating: parseInt(formData.rating, 10),
//     };

//     try {
//       const res = await fetch(API_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(newTestimonial),
//       });

//       const saved = await res.json();
//       if (res.ok) {
//         setTestimonials((prev) => [...prev, saved]);
//         setShowModal(false);
//         setFormData({ name: "", role: "", text: "", rating: 5 });
//       } else {
//         alert("Error saving testimonial: " + saved.error);
//       }
//     } catch (err) {
//       console.error("Error submitting testimonial:", err);
//       alert("Could not connect to the backend.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="py-20 bg-[#0d0f12] relative text-white" id="testimonials">
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

//         {/* ✅ Swiper Slider */}
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           spaceBetween={30}
//           slidesPerView={1}
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 6000, disableOnInteraction: false }}
//           onBeforeInit={(swiper) => (swiperRef.current = swiper)}
//           breakpoints={{
//             1540: { slidesPerView: 4 },
//             768: { slidesPerView: 3 },
//             480: { slidesPerView: 1 },
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
//                 className="p-8 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-xl text-white max-w-sm mx-auto"
//               >
//                 <div className="flex justify-center mb-4">
//                   <img
//                     src={DEFAULT_IMAGE} // ✅ Fixed image used everywhere
//                     alt={t.name}
//                     className="w-16 h-16 rounded-full object-cover border-2 border-[#daff45]"
//                   />
//                 </div>
//                 <p className="text-white mb-4 italic leading-relaxed">“{t.text}”</p>
//                 <div className="flex justify-center mb-2">
//                   {Array.from({ length: t.rating }).map((_, i) => (
//                     <Star key={i} className="w-5 h-5 text-[#020202] fill-[#bad833]" />
//                   ))}
//                 </div>
//                 <h3 className="text-lg font-semibold text-white">{t.name}</h3>
//                 <p className="text-sm text-white/50">{t.role}</p>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Navigation Buttons */}
//         <div className="flex justify-center gap-6 mt-6">
//           <button
//             onClick={() => swiperRef.current?.slidePrev()}
//             className="w-12 h-12 rounded-lg bg-[#daff45] text-[#10121a] flex items-center justify-center hover:scale-105 transition-transform"
//           >
//             <ArrowLeft className="w-5 h-5" />
//           </button>
//           <button
//             onClick={() => swiperRef.current?.slideNext()}
//             className="w-12 h-12 rounded-lg bg-[#daff45] text-[#10121a] flex items-center justify-center hover:scale-105 transition-transform"
//           >
//             <ArrowRight className="w-5 h-5" />
//           </button>
//         </div>

//         {/* ➕ Add Testimonial Button */}
//         <div className="mt-10">
//           <button
//             onClick={() => setShowModal(true)}
//             className="flex items-center gap-2 bg-[#daff45] text-[#0d0f12] font-semibold px-6 py-3 rounded-xl mx-auto hover:scale-105 transition-transform"
//           >
//             <Plus className="w-5 h-5" />
//             Add Testimonial
//           </button>
//         </div>
//       </div>

//       {/* ✅ Modal Form */}
//       {/* {showModal && (
//         <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
//           <div className="bg-[#1b1d22] rounded-2xl p-8 w-full max-w-lg relative">
//             <button
//               onClick={() => setShowModal(false)}
//               className="absolute top-3 right-3 text-gray-400 hover:text-white"
//             >
//               <X className="w-6 h-6" />
//             </button>
//             <h3 className="text-2xl font-bold mb-6 text-[#daff45]">
//               Add New Testimonial
//             </h3>
//             <form onSubmit={handleSubmit} className="space-y-4 text-left">
//               <div>
//                 <label className="block text-sm mb-1">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full bg-gray-800 text-white p-2 rounded-lg border border-gray-600"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm mb-1">Role / Company</label>
//                 <input
//                   type="text"
//                   name="role"
//                   value={formData.role}
//                   onChange={handleChange}
//                   required
//                   className="w-full bg-gray-800 text-white p-2 rounded-lg border border-gray-600"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm mb-1">Testimonial</label>
//                 <textarea
//                   name="text"
//                   value={formData.text}
//                   onChange={handleChange}
//                   required
//                   rows="3"
//                   className="w-full bg-gray-800 text-white p-2 rounded-lg border border-gray-600"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm mb-1">Rating (1–5)</label>
//                 <input
//                   type="number"
//                   name="rating"
//                   min="1"
//                   max="5"
//                   value={formData.rating}
//                   onChange={handleChange}
//                   className="w-full bg-gray-800 text-white p-2 rounded-lg border border-gray-600"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full mt-4 bg-[#daff45] text-[#0d0f12] py-3 rounded-xl font-semibold hover:scale-105 transition-transform"
//               >
//                 {loading ? "Saving..." : "Save Testimonial"}
//               </button>
//             </form>
//           </div>
//         </div>
//       )} */}
//       {showModal && (
//   <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
//     <div className="bg-[#1b1d22] rounded-2xl p-6 w-full max-w-md relative">
//       <button
//         onClick={() => setShowModal(false)}
//         className="absolute top-3 right-3 text-gray-400 hover:text-white"
//       >
//         <X className="w-6 h-6" />
//       </button>
//       <h3 className="text-xl font-bold mb-5 text-[#daff45]">
//         Add New Testimonial
//       </h3>
//       <form onSubmit={handleSubmit} className="space-y-3 text-left">
//         <div>
//           <label className="block text-sm mb-1">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="w-full bg-gray-800 text-white p-2 rounded-lg border border-gray-600"
//           />
//         </div>
//         <div>
//           <label className="block text-sm mb-1">Role / Company</label>
//           <input
//             type="text"
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//             required
//             className="w-full bg-gray-800 text-white p-2 rounded-lg border border-gray-600"
//           />
//         </div>
//         <div>
//           <label className="block text-sm mb-1">Testimonial</label>
//           <textarea
//             name="text"
//             value={formData.text}
//             onChange={handleChange}
//             required
//             rows="3"
//             className="w-full bg-gray-800 text-white p-2 rounded-lg border border-gray-600"
//           />
//         </div>
//         <div>
//           <label className="block text-sm mb-1">Rating (1–5)</label>
//           <input
//             type="number"
//             name="rating"
//             min="1"
//             max="5"
//             value={formData.rating}
//             onChange={handleChange}
//             className="w-full bg-gray-800 text-white p-2 rounded-lg border border-gray-600"
//           />
//         </div>
//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full mt-4 bg-[#daff45] text-[#0d0f12] py-2.5 rounded-xl font-semibold hover:scale-105 transition-transform"
//         >
//           {loading ? "Saving..." : "Save Testimonial"}
//         </button>
//       </form>
//     </div>
//   </div>
// )}

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