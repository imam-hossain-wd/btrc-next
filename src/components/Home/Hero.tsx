"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";
import { assets } from "@/utils/assets";


export function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-teal-50/50 -z-10" />
      
      {/* Floating Circles Animation */}
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, 15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-200/30 blur-xl -z-10"
      />
      <motion.div
        animate={{
          x: [0, -20, 0],
          y: [0, -15, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-teal-200/30 blur-xl -z-10"
      />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Restoring <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Dignity</span> and <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Hope</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600"
            >
              The Bewarish Treatment and Rehabilitation Center provides free medical care, shelter, and rehabilitation to society's most vulnerable individuals.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button className="bg-gradient-to-r from-blue-600 to-teal-500 text-white hover:from-blue-700 hover:to-teal-600">
                Get Help Now
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Learn More
              </Button>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src={assets.hospital}
              alt="Bewarish Treatment and Rehabilitation Center"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-gray-900/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}