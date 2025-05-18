"use client";

import { motion } from "framer-motion";
import { ArrowRight, House, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const NotFoundPage = () => {
  const router = useRouter();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  // Floating shapes data
  const shapes = [
    { id: 1, top: "10%", left: "15%", size: "w-16 h-16", color: "bg-purple-500/20" },
    { id: 2, top: "70%", left: "80%", size: "w-24 h-24", color: "bg-blue-500/20" },
    { id: 3, top: "30%", left: "50%", size: "w-12 h-12", color: "bg-emerald-500/20" },
    { id: 4, top: "85%", left: "20%", size: "w-20 h-20", color: "bg-amber-500/20" },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      {/* Floating animated shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute rounded-full ${shape.color} ${shape.size}`}
          style={{ top: shape.top, left: shape.left }}
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16 text-center">
        {showContent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* Animated 404 text */}
            <motion.div 
              className="relative mb-8"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 10
              }}
            >
              <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="text-9xl font-bold text-gray-800/30"
                  animate={{ opacity: [0.3, 0.5, 0.3] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  404
                </motion.div>
              </div>
            </motion.div>

            <motion.h2
              className="text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Lost in the Digital Void
            </motion.h2>

            <motion.p
              className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <button
                onClick={() => router.push("/")}
                className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium hover:shadow-lg transition-all duration-300 group"
              >
                <House className="mr-2 group-hover:translate-x-1 transition-transform" />
                Go Home
              </button>

              <button
                onClick={() => router.back()}
                className="flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-full text-white font-medium hover:shadow-lg transition-all duration-300 group"
              >
                <ArrowRight className="mr-2 transform rotate-180 group-hover:-translate-x-1 transition-transform" />
                Go Back
              </button>
            </motion.div>

            {/* Search suggestion */}
            <motion.div
              className="mt-12 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 max-w-lg mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <h3 className="text-lg font-medium text-white mb-3">Search Instead</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <Search className="absolute left-3 top-3.5 text-gray-400" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Animated background elements */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default NotFoundPage;