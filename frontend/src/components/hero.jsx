import React from "react";
import { motion } from "framer-motion";
// import Hero_video from "./hero_video";

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
    <div className="min-h-screen text-primary-50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-6 sm:py-12 relative z-10">
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
              <motion.h1 
                className="text-4xl text-primary-200 sm:text-6xl lg:text-[90px] leading-[1.1] font-light tracking-[-1px] text-center sm:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                We Are{" "}
                <motion.span
                  className="relative inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-primary-50">
                    Innovators
                  </span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute -bottom-2 left-0 w-full h-[2px] bg-primary-50"
                  />
                </motion.span>
              </motion.h1>
            </div>

            <div className="hidden sm:block w-px h-24 bg-gradient-to-b from-transparent via-primary-300/30 to-transparent mx-8" />

            <motion.div
              variants={itemVariants}
              className="col-span-full sm:col-span-4 backdrop-blur-sm bg-primary-800/50 rounded-xl p-6 border border-primary-300/10 hover:border-primary-300/30 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-lg sm:text-xl text-primary-200 leading-relaxed">
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
                className="backdrop-blur-md bg-primary-800/50 rounded-xl p-6 border border-primary-300/10 hover:border-primary-300/30 transition-all duration-300"
              >
                <p className="text-sm text-primary-300">Established</p>
                <p className="text-4xl font-semibold text-primary-50">
                  2012
                </p>
              </motion.div>
              <div className="flex-1 text-left">
                <motion.h2 
                  className="text-3xl text-primary-200 sm:text-5xl font-light text-balance"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  Innovate, Automate, Dominate
                </motion.h2>
              </div>
            </div>

            <div className="col-span-full sm:col-span-6 grid grid-cols-3 gap-5">
              {[
                { number: "10+", label: "Years of\nExperience" },
                { number: "1k+", label: "Students\nTrained" },
                { number: "100+", label: "Events\nWon" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="backdrop-blur-md bg-primary-800/50 rounded-xl p-4 sm:p-6 border border-primary-300/10 hover:border-primary-300/30 text-center transition-all duration-300"
                >
                  <motion.p
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-2xl sm:text-4xl font-bold mb-2 text-primary-50"
                  >
                    {stat.number}
                  </motion.p>
                  <p className="text-sm text-primary-300 whitespace-pre-line">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
