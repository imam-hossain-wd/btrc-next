// "use client";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import { useState } from "react";
// import { Button } from "@/components/ui/button";


// export function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about" },
//     { name: "Services", href: "/services" },
//     { name: "Patients", href: "/patients" },
//     { name: "Contact", href: "/contact" },
//     { name: "Donate", href: "/donate" },
//   ];

//   return (
//     <motion.header 
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm"
//     >
//       <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//         <Link href="/" className="flex items-center gap-2">
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent"
//           >
//             Bewarish Center
//           </motion.div>
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center gap-6">
//           {navItems.map((item, index) => (
//             <motion.div
//               key={item.name}
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 * index }}
//             >
//               <Link
//                 href={item.href}
//                 className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
//               >
//                 {item.name}
//               </Link>
//             </motion.div>
//           ))}
//           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//             <Button className="bg-gradient-to-r from-blue-600 to-teal-500 text-white">
//               Get Help
//             </Button>
//           </motion.div>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden p-2"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle menu"
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, height: 0 }}
//           animate={{ opacity: 1, height: "auto" }}
//           exit={{ opacity: 0, height: 0 }}
//           className="md:hidden bg-white shadow-lg"
//         >
//           <div className="container mx-auto px-4 py-3 flex flex-col gap-4">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item.name}
//               </Link>
//             ))}
//             <Button className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white">
//               Get Help
//             </Button>
//           </div>
//         </motion.div>
//       )}
//     </motion.header>
//   );
// }


"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, HeartHandshake, UserPlus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { assets } from "@/utils/assets";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [donateModalOpen, setDonateModalOpen] = useState(false);
  const [patientModalOpen, setPatientModalOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Patients", href: "/patients" },
    { name: "Contact", href: "/contact" },
  ];

  const donateOptions = [
    { name: "Donate Money", href: "/donate/money" },
    { name: "Donate Medicine", href: "/donate/medicine" },
    { name: "Donate Food", href: "/donate/food" },
    { name: "Donate Clothes", href: "/donate/clothes" },
  ];

  return (
    <>
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm"
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Image 
                src={assets.logo}
                alt="Bewarish Center Logo"
                quality={100}
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex flex-col"
            >
              <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                BTRC
              </span>
              <span className="text-xs text-gray-500">
                Bewarish Treatment & Rehabilitation Center
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            
            <div className="flex gap-3 ml-4">
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={() => setDonateModalOpen(true)}
                  className="bg-gradient-to-r from-blue-600 to-teal-500 text-white gap-2"
                >
                  <HeartHandshake className="w-4 h-4" />
                  Donate
                </Button>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={() => setPatientModalOpen(true)}
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 gap-2"
                >
                  <UserPlus className="w-4 h-4" />
                  Donate Patient
                </Button>
              </motion.div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Side Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 left-0 w-72 bg-white z-50 shadow-xl"
            >
              <div className="p-4 flex justify-between items-center border-b">
                <div className="flex items-center gap-3">
                   <Image 
                src={assets.logo}
                alt="Bewarish Center Logo"
                quality={100}
                width={40}
                height={40}
                className="w-10 h-10"
              />
                  <span className="font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                    BTRC
                  </span>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-4 space-y-4">
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Link
                      href={item.href}
                      className="block py-2 px-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                <div className="pt-4 space-y-3">
                  <Button 
                    onClick={() => {
                      setIsOpen(false);
                      setDonateModalOpen(true);
                    }}
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white gap-2"
                  >
                    <HeartHandshake className="w-4 h-4" />
                    Donate
                  </Button>
                  
                  <Button 
                    onClick={() => {
                      setIsOpen(false);
                      setPatientModalOpen(true);
                    }}
                    variant="outline"
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 gap-2"
                  >
                    <UserPlus className="w-4 h-4" />
                    Donate Patient
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Donate Modal */}
      <AnimatePresence>
        {donateModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setDonateModalOpen(false)}
            />
            
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl z-50 shadow-xl p-6 max-w-2xl mx-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">Donation Options</h3>
                <button 
                  onClick={() => setDonateModalOpen(false)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {donateOptions.map((option, index) => (
                  <motion.div
                    key={option.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <Link
                      href={option.href}
                      className="block p-4 border border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all"
                      onClick={() => setDonateModalOpen(false)}
                    >
                      <h4 className="font-medium text-gray-900">{option.name}</h4>
                      <p className="text-sm text-gray-500 mt-1">Click to learn more</p>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Patient Donation Modal */}
      <AnimatePresence>
        {patientModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setPatientModalOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-0 m-auto max-w-md max-h-[90vh] bg-white rounded-2xl z-50 shadow-xl p-6 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">Patient Donation Form</h3>
                <button 
                  onClick={() => setPatientModalOpen(false)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <X size={20} />
                </button>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Patient Information
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    rows={3}
                    placeholder="Describe the patient's condition and location..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Contact Information
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Phone number or email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location Details
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Where is the patient located?"
                  />
                </div>
                
                <div className="pt-2">
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white"
                  >
                    Submit Patient Information
                  </Button>
                </div>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}