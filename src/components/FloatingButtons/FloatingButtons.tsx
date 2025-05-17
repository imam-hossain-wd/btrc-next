"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageSquare, ArrowUp, HeartHandshake } from "lucide-react";
import { useEffect, useState } from "react";

export function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

  // Show scroll-to-top button when user scrolls down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="p-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-full shadow-lg"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Donate Button */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="/donate"
        className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-red-600 to-pink-500 text-white rounded-full shadow-lg text-sm sm:text-base"
      >
        <HeartHandshake className="w-4 h-4 sm:w-5 sm:h-5" />
        <span>Donate</span>
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="https://wa.me/PHONE_NUMBER" // Replace with actual WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-3 bg-[#25D366] text-white rounded-full shadow-lg text-sm sm:text-base"
      >
        <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
        <span>WhatsApp</span>
      </motion.a>

      {/* Call Button */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="tel:+880XXXXXXXXXX" // Replace with actual phone number
        className="flex items-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-full shadow-lg text-sm sm:text-base"
      >
        <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
        <span>Call Now</span>
      </motion.a>
    </div>
  );
}