// "use client";

// import { motion } from "framer-motion";
// import { Card } from "@/components/ui/card";
// import { assets } from "@/utils/assets";
// import Image from "next/image";

// const { iqbal, selim, anowar, ratan, tayub, saykat } = assets;

// const leadershipTeam = [
//   {
//     name: "Anowar Hossain",
//     role: "Chairman",
//     image: anowar
//   },
//   {
//     name: "Mohammad Shawkat Hossain",
//     role: "Founder",
//     image: saykat
//   },
//   {
//     name: "Saidul Islam Tayub",
//     role: "Manager",
//     image: tayub
//   },
//   {
//     name: "Gias Uddin Salim",
//     role: "Advisor",
//     image: selim
//   },
//   {
//     name: "Ratan Sen",
//     role: "Advisor",
//     image: ratan
//   },
// ];

// const TeamSection = () => {
//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
//       <div className="max-w-7xl mx-auto">
//         {/* Header with animation */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             Our Leadership Team
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Meet the visionaries driving our mission forward
//           </p>
//         </motion.div>

//         {/* Modern Team Cards with Enhanced Animations */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {leadershipTeam.map((member, index) => (
//             <motion.div
//               key={member.name}
//               initial={{ opacity: 0, y: 30, scale: 0.95 }}
//               whileInView={{ opacity: 1, y: 0, scale: 1 }}
//               transition={{ 
//                 duration: 0.5, 
//                 delay: index * 0.15,
//                 type: "spring",
//                 stiffness: 100
//               }}
//               viewport={{ once: true, margin: "0px 0px -100px 0px" }}
//               whileHover={{ y: -5 }}
//             >
//               <Card className="relative h-full overflow-hidden rounded-xl border-2 border-sky-500/20 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
//                 {/* Animated Profile Image */}
//                 <motion.div 
//                   className="relative mx-auto mt-8 h-40 w-40 overflow-hidden rounded-full border-4 border-sky-500 shadow-lg"
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ type: "spring", stiffness: 400 }}
//                 >
//                   <Image
//                     src={member.image}
//                     alt={member.name}
//                     fill
//                     className="object-cover object-top"
//                     style={{ objectPosition: 'top center' }}
//                     sizes="(max-width: 160px) 100vw"
//                     priority
//                   />
//                   <div className="absolute inset-0 rounded-full ring-2 ring-inset ring-white/50" />
//                 </motion.div>

//                 {/* Card Content with Staggered Animations */}
//                 <motion.div 
//                   className="p-6 text-center space-y-4"
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   transition={{ delay: 0.3 }}
//                 >
//                   <motion.div
//                     initial={{ y: 10 }}
//                     whileInView={{ y: 0 }}
//                     transition={{ delay: 0.2 }}
//                   >
//                     <h3 className="text-xl font-bold text-gray-900">
//                       {member.name}
//                     </h3>
//                     <p className="text-md font-medium text-sky-600 mt-2">
//                       {member.role}
//                     </p>
//                   </motion.div>
//                 </motion.div>

//                 {/* Animated Accent Element */}
//                 <motion.div 
//                   className="absolute bottom-0 right-0 h-16 w-16 rounded-tl-full bg-sky-500"
//                   initial={{ opacity: 0, scale: 0.5 }}
//                   whileInView={{ opacity: 0.2, scale: 1 }}
//                   transition={{ delay: 0.4 }}
//                 />
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TeamSection;


"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { assets } from "@/utils/assets";
import Image from "next/image";
import { useEffect, useRef } from "react";

const { iqbal, selim, anowar, ratan, tayub, saykat } = assets;

const leadershipTeam = [
  {
    name: "Anowar Hossain",
    role: "Chairman",
    image: anowar
  },
  {
    name: "Mohammad Shawkat Hossain",
    role: "Founder",
    image: saykat
  },
  {
    name: "Saidul Islam Tayub",
    role: "Manager",
    image: tayub
  },
  {
    name: "Gias Uddin Salim",
    role: "Advisor",
    image: selim
  },
  {
    name: "Ratan Sen",
    role: "Advisor",
    image: ratan
  },
];

const TeamSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start({
        x: ["0%", "-100%"],
        transition: {
          duration: 40, // Slower duration (40 seconds for full loop)
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      });
    } else {
      controls.stop();
    }
  }, [isInView, controls]);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header with animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Leadership Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the visionaries driving our mission forward
          </p>
        </motion.div>

        {/* Auto-playing Carousel Container */}
        <div ref={ref} className="relative overflow-hidden py-4">
          {/* Gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/90 to-transparent z-10" />

          {/* Sliding Cards */}
          <motion.div 
            className="flex gap-8 w-max"
            animate={controls}
          >
            {/* Original Cards */}
            {[...leadershipTeam, ...leadershipTeam].map((member, index) => (
              <motion.div 
                key={`card-${index}`}
                className="w-[280px] flex-shrink-0"
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <Card className="relative h-full overflow-hidden rounded-xl border-2 border-sky-500/20 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative mx-auto mt-8 h-36 w-36 overflow-hidden rounded-full border-4 border-sky-500 shadow-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                      style={{ objectPosition: 'top center' }}
                      sizes="(max-width: 144px) 100vw"
                      priority
                    />
                    <div className="absolute inset-0 rounded-full ring-2 ring-inset ring-white/50" />
                  </div>
                  <div className="p-6 text-center space-y-3">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-xl font-bold text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-md font-medium text-sky-600 mt-2">
                        {member.role}
                      </p>
                    </motion.div>
                  </div>
                  <motion.div 
                    className="absolute bottom-0 right-0 h-16 w-16 rounded-tl-full bg-sky-500 opacity-20"
                    animate={{
                      opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                  />
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;