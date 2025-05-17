"use client";
import { motion } from "framer-motion";
import { Users, Eye, Target, HandHeart } from "lucide-react";

export function WhoWeAre() {
  const principles = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Compassion",
      description: "Treating every individual with empathy and dignity"
    },
    {
      icon: <Eye className="w-8 h-8 text-teal-600" />,
      title: "Transparency",
      description: "Open and honest in all our operations"
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Impact",
      description: "Measurable change in lives we touch"
    },
    {
      icon: <HandHeart className="w-8 h-8 text-teal-600" />,
      title: "Community",
      description: "Building support networks for lasting change"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">We Are</span>
          </h2>
          <p className="text-xl text-gray-600">
            Our identity, values, and what drives us every day
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900">
              Our Identity
            </h3>
            <p className="text-lg text-gray-600">
              The Bewarish Seba Foundation is a non-profit organization dedicated to rescuing, rehabilitating, and restoring dignity to abandoned individuals found on the streets of Bangladesh.
            </p>
            <p className="text-lg text-gray-600">
              We are a team of medical professionals, social workers, and volunteers who believe that every human being deserves care, respect, and the opportunity to heal - regardless of their circumstances.
            </p>
            <p className="text-lg text-gray-600">
              Founded in 2018, we've grown from a small initiative to a comprehensive treatment center serving hundreds of individuals each year.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900">
              Our Core Principles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="flex items-center gap-3 mb-3">
                    {principle.icon}
                    <h4 className="font-semibold text-gray-900">{principle.title}</h4>
                  </div>
                  <p className="text-gray-600">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}