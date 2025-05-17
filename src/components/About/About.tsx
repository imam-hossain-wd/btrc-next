"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { HeartPulse, Home, Utensils, Stethoscope, Users } from "lucide-react";
import { assets } from "@/utils/assets";

export function AboutHospital() {
  const features = [
    {
      icon: <HeartPulse className="w-8 h-8 text-blue-600" />,
      title: "Medical Care",
      description: "24/7 professional medical treatment and supervision"
    },
    {
      icon: <Home className="w-8 h-8 text-teal-600" />,
      title: "Shelter",
      description: "Safe and comfortable living environment"
    },
    {
      icon: <Utensils className="w-8 h-8 text-blue-600" />,
      title: "Nutrition",
      description: "Balanced meals for all residents"
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-teal-600" />,
      title: "Rehabilitation",
      description: "Physical and mental health recovery programs"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Family Reunification",
      description: "Helping residents reconnect with loved ones"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src={assets.hospital}
              alt="Bewarish Treatment Center"
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
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Bewarish Center</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              The Bewarish Treatment and Rehabilitation Center, operated by the Bewarish Seba Foundation, is a sanctuary for abandoned and neglected individuals found on the streets. Dedicated to restoring dignity and hope, the center provides free medical care, shelter, food, and rehabilitation to society's most vulnerable.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-600">140+</h3>
                <p className="text-gray-600">Current Patients</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg">
                <h3 className="text-2xl font-bold text-teal-600">42</h3>
                <p className="text-gray-600">Family Reunions</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 p-4 rounded-lg flex items-start gap-3"
                >
                  {feature.icon}
                  <div>
                    <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}