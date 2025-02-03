import React from "react";
import { motion } from "framer-motion";

export default function TeamSection() {
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

  const teamMembers = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      image: "https://via.placeholder.com/300x300",
      description: "Visionary leader with 15+ years in robotics",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      image: "https://via.placeholder.com/300x300",
      description: "AI and automation expert",
    },
    {
      name: "Mike Johnson",
      role: "Lead Engineer",
      image: "https://via.placeholder.com/300x300",
      description: "Robotics systems specialist",
    },
    {
      name: "Sarah Williams",
      role: "Product Manager",
      image: "https://via.placeholder.com/300x300",
      description: "Innovation strategist",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#001219] via-[#001824] to-[#002030] text-white py-24">
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
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-[#40E0D0]/20 to-transparent rounded-full blur-[120px]"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="text-center">
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-light mb-6 text-gray-400"
            >
              Our{" "}
              <motion.span
                className="relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#40E0D0] to-[#2CB5A8]">
                  Team
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-[#40E0D0] to-[#2CB5A8]"
                />
              </motion.span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 max-w-2xl mx-auto"
            >
              Meet the innovative minds behind Grobots, driving the future of robotics and automation
            </motion.p>
          </div>

          {/* Team Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="backdrop-blur-md bg-white/5 rounded-xl border border-white/10 overflow-hidden transition-all duration-300"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#001219] opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#40E0D0] to-[#2CB5A8]">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Join the Team CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#40E0D0] to-[#2CB5A8] hover:opacity-90 px-8 py-3 rounded-lg text-sm font-medium transition-all duration-300"
            >
              Join Our Team
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
