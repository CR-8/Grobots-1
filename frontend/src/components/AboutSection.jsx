import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/about.webp";

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="right-10 relative w-screen px-4 h-screen bg-gradient-to-br from-[#001219] via-[#001824] to-[#002030] text-white py-24">
      {/* Background Effects */}
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
        className="absolute top-0 right-0 w-full h-full bg-gradient-radial from-[#40E0D0]/20 to-transparent rounded-full blur-[120px]"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image Section */}
          <motion.div
            variants={itemVariants}
            className="relative group right-4"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#40E0D0]/20 to-[#2CB5A8]/20 rounded-2xl transform -rotate-6 scale-105 transition-transform duration-300 group-hover:scale-110" />
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur-sm bg-white/5"
            >
              <img
                src={aboutImage}
                alt="About Grobots"
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <motion.h2
                className="text-4xl sm:text-5xl font-light mb-6 text-gray-400"
              >
                About{" "}
                <motion.span
                  className="relative inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#40E0D0] to-[#2CB5A8]">
                    Grobots
                  </span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-[#40E0D0] to-[#2CB5A8]"
                  />
                </motion.span>
              </motion.h2>
              <motion.p className="text-lg text-gray-400 leading-relaxed mb-8">
                At Grobots, we're pioneering the future of robotics and automation. Our journey began with a vision to transform how industries operate through innovative technological solutions.
              </motion.p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Innovation",
                  description: "Pushing boundaries with cutting-edge robotics solutions",
                },
                {
                  title: "Excellence",
                  description: "Delivering quality and precision in every project",
                },
                {
                  title: "Collaboration",
                  description: "Working together to achieve breakthrough results",
                },
                {
                  title: "Impact",
                  description: "Creating meaningful change in the industry",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10"
                >
                  <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#40E0D0] to-[#2CB5A8]">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#40E0D0] to-[#2CB5A8] hover:opacity-90 px-8 py-3 rounded-lg text-sm font-medium transition-all duration-300"
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
