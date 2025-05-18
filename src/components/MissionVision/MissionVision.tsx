"use client";

import { motion } from "framer-motion";
import { Target, Eye, Star, Globe, HeartHandshake, Lightbulb } from "lucide-react";
import React from "react";

export const MissionVision = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const cards = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Our Mission",
      content: "To empower communities through innovative solutions that bridge gaps in healthcare, education, and technology, creating sustainable impact for vulnerable populations.",
      accentColor: "bg-blue-500"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Our Vision",
      content: "A world where every individual has equal access to opportunities and resources needed to thrive, regardless of their background or circumstances.",
      accentColor: "bg-purple-500"
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Our Values",
      content: "Compassion, Innovation, Integrity, and Community. These pillars guide every decision we make and every action we take.",
      accentColor: "bg-emerald-500"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 mb-4">
            <Lightbulb className="w-5 h-5 mr-2" />
            <span className="font-medium">Purpose</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Guiding Principles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The foundation of everything we do
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className={`absolute -inset-1 rounded-xl ${card.accentColor}/10 blur opacity-75 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className="relative h-full bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${card.accentColor}/10 mb-6`}>
                  {React.cloneElement(card.icon, { className: `w-6 h-6 ${card.accentColor.replace('bg', 'text')}` })}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600">{card.content}</p>
                <div className={`absolute bottom-0 left-0 h-1 w-full rounded-b-xl ${card.accentColor}`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Globe Animation */}
        <motion.div
          className="mt-20 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="relative">
            <Globe className="w-24 h-24 text-gray-300" />
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};