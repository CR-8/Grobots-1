import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import logo from "../assets/Grobotslogo.png";
import Hero_video from "./hero_video";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001219] via-[#001824] to-[#002030] text-white relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-[#40E0D0]/20 to-transparent rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-[#40E0D0]/10 to-transparent rounded-full blur-[100px]"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-6 sm:py-12 relative z-10">
        {/* Enhanced Navigation */}
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-center mb-16 sm:mb-32"
        >
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 mb-6 sm:mb-0">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={logo}
                alt="Grobots Logo"
                className="scale-[240%] transition-transform duration-300"
              />
            </div>
            <span className="text-lg font-medium tracking-wide">Grobots</span>
          </motion.div>

          <div className="flex flex-wrap justify-center sm:space-x-8 mb-6 sm:mb-0">
            {["Home", "About Us", "Team", "Projects", "Contact Us"].map((item, index) => (
              <motion.a
                key={item}
                href="#"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`${
                  item === "Home" ? "text-white" : "text-gray-400"
                } hover:text-[#40E0D0] transition-colors relative group px-2 py-1 sm:px-4`}
              >
                {item}
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#40E0D0] to-[#2CB5A8] origin-left"
                />
              </motion.a>
            ))}
          </div>

          <div className="flex gap-4">
            {["Get Started", "Let's Talk"].map((text, index) => (
              <motion.button
                key={text}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${
                  index === 0
                    ? "bg-gradient-to-r from-[#40E0D0] to-[#2CB5A8] hover:opacity-90"
                    : "border border-white/20 hover:border-[#40E0D0]/40 hover:bg-white/5"
                } px-4 sm:px-8 py-2 sm:py-3 rounded-lg text-sm font-medium transition-all duration-300`}
              >
                {text}
              </motion.button>
            ))}
          </div>
        </motion.nav>

        {/* Enhanced Hero Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-12 sm:gap-24"
        >
          {/* Enhanced Top Row */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
            <div className="col-span-full sm:col-span-7">
              <h1 className="text-4xl text-gray-400 sm:text-6xl lg:text-[90px] leading-[1.1] font-light tracking-[-1px] text-center sm:text-left">
                We Are{" "}
                <motion.span
                  className="relative inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#40E0D0] to-[#2CB5A8]">
                    Innovators
                  </span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-[#40E0D0] to-[#2CB5A8]"
                  />
                </motion.span>
              </h1>
            </div>

            <div className="hidden sm:block w-px h-24 bg-gradient-to-b from-transparent via-gray-400/30 to-transparent mx-8" />

            <motion.div
              variants={itemVariants}
              className="col-span-full sm:col-span-4 backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10"
            >
              <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
                We're a community of creators and tech enthusiasts, pushing the limits of robotics and automation to
                inspire and empower innovation for the future.
              </p>
            </motion.div>
          </motion.div>

          {/* Enhanced Bottom Row */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
            <div className="flex flex-col sm:flex-row justify-evenly items-center gap-8 col-span-full sm:col-span-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10"
              >
                <p className="text-sm text-gray-400">Established</p>
                <p className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#40E0D0] to-[#2CB5A8]">
                  2012
                </p>
              </motion.div>
              <h2 className="flex-1 text-3xl text-gray-500 sm:text-5xl font-light tracking-tight text-center">
                Innovate, Automate, Dominate
              </h2>
            </div>

            <div className="col-span-full sm:col-span-6 grid grid-cols-3 gap-4">
              {[
                { number: "10", label: "Years of\nExperience" },
                { number: "1k", label: "Students\nTrained" },
                { number: "100", label: "Events\nWon" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="backdrop-blur-md bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10 text-center transition-all duration-300"
                >
                  <motion.p
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-2xl sm:text-4xl font-bold mb-2"
                  >
                    {stat.number}
                  </motion.p>
                  <p className="text-sm text-gray-400 whitespace-pre-line">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
