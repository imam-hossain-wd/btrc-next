
'use client'
import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

export function Footer() {
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Our Services", href: "/services" },
        { name: "Success Stories", href: "/stories" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Medical Care", href: "/services/medical" },
        { name: "Rehabilitation", href: "/services/rehab" },
        { name: "Mental Health", href: "/services/mental-health" },
        { name: "Family Reunification", href: "/services/family" },
        { name: "24/7 Support", href: "/services/support" },
      ],
    },
    {
      title: "Get Involved",
      links: [
        { name: "Volunteer", href: "/volunteer" },
        { name: "Donate", href: "/donate" },
        { name: "Sponsor a Patient", href: "/sponsor" },
        { name: "Partnerships", href: "/partners" },
        { name: "Careers", href: "/careers" },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Bewarish Treatment & Rehabilitation Center
            </h3>
            <p className="text-gray-300">
              A sanctuary for abandoned and neglected individuals, restoring dignity and hope through comprehensive care.
            </p>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="text-gray-300 hover:text-pink-500 transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
            </div>
          </motion.div>

          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={18} className="text-blue-400" />
                <span>btrc.3205@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone size={18} className="text-blue-400" />
                <span>+880 1819 832832</span>
              </div>
            </div>
            <div className="pt-4">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Bewarish Seba Foundation. All rights reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}