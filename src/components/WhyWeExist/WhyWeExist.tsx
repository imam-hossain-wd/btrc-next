"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { AlertCircle, Heart, Home, Hand } from "lucide-react";

export function WhyWeExist() {
  const problems = [
    {
      icon: <AlertCircle className="w-6 h-6 text-red-500" />,
      title: "The Problem",
      description: "Thousands of mentally ill and destitute people live on Bangladesh's streets without access to basic care"
    },
    {
      icon: <Heart className="w-6 h-6 text-blue-600" />,
      title: "Our Response",
      description: "Comprehensive rehabilitation center providing medical care, shelter, and family reunification"
    },
    {
      icon: <Home className="w-6 h-6 text-teal-600" />,
      title: "Our Vision",
      description: "A society where no one is left to suffer on the streets without care"
    },
    {
      icon: <Hand className="w-6 h-6 text-blue-600" />,
      title: "Join Us",
      description: "Together we can restore dignity and hope to forgotten lives"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">We Exist</span>
          </h2>
          <p className="text-xl text-gray-600">
            The urgent need we address and the change we create
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900">
              The Harsh Reality
            </h3>
            <p className="text-lg text-gray-600">
              Across Bangladesh's cities, hundreds of mentally ill, disabled, and destitute individuals are abandoned on the streets - exposed to danger, starvation, and untreated medical conditions.
            </p>
            <p className="text-lg text-gray-600">
              Without intervention, these vulnerable people face shortened lifespans, continued suffering, and complete isolation from society.
            </p>
            <p className="text-lg text-gray-600">
              Many are victims of circumstance - mental health crises, family abandonment, or economic hardship left them with nowhere to turn.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="text-2xl font-bold text-red-600">500+</h3>
                <p className="text-gray-600">Estimated on streets</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-600">3%</h3>
                <p className="text-gray-600">Receive proper care</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 gap-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl"
                >
                  <div className="mt-1 flex-shrink-0">
                    {problem.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900">{problem.title}</h4>
                    <p className="text-gray-600">{problem.description}</p>
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