"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Award, HeartHandshake, Shield } from "lucide-react";
import { assets } from "@/utils/assets";

export function AboutFounder() {
  const achievements = [
    {
      icon: <Award className="w-6 h-6 text-blue-600" />,
      text: "National Humanitarian Award 2023"
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-teal-600" />,
      text: "Over 200 lives transformed"
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      text: "Community Leadership Recognition"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Mohammad Shawkat Hossain</span>
          </h2>
          <p className="text-xl text-gray-600">
            "The Humanitarian Carrier" - Founder of Bewarish Seba Foundation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src={assets.founder}
              alt="Mohammad Shawkat Hossain"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600">
              Mohammad Shawkat Hossain, widely known as the "Humanitarian Carrier," is the founder of the Bewarish Treatment and Rehabilitation Center and the Bewarish Seba Foundation. With a heart full of compassion, he has dedicated his life to rescuing and rehabilitating abandoned and destitute individuals suffering on the streets.
            </p>
            
            <p className="text-lg text-gray-600">
              Shawkat Hossain's mission is to restore dignity and humanity to the neglected. Under his leadership, countless lives have been saved and transformed through free medical care, shelter, and nourishment. He also works tirelessly to reunite these individuals with their families, ensuring they find hope and belonging once again.
            </p>

            <div className="space-y-3 pt-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3"
                >
                  {achievement.icon}
                  <span className="text-gray-700">{achievement.text}</span>
                </motion.div>
              ))}
            </div>

            <blockquote className="mt-8 p-6 bg-white rounded-xl shadow-sm border-l-4 border-blue-600">
              <p className="text-gray-700 italic">
                "Every human being deserves dignity, care, and a chance to heal. Our work is not charity - it's restoring basic human rights to those who have been forgotten."
              </p>
              <p className="mt-3 font-medium text-gray-900">
                — Mohammad Shawkat Hossain
              </p>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}