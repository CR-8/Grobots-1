import Marquee from "./marquee";
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

  return (
    <section className="relative text-primary-50 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          <div className="text-center">
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-light mb-6 text-primary-200"
            >
              Our{" "}
              <motion.span
                className="relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-primary-50">
                  Team
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute -bottom-2 left-0 w-full h-[2px] bg-primary-50"
                />
              </motion.span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-primary-300 max-w-2xl mx-auto"
            >
              Meet the innovative minds behind Grobots, driving the future of robotics and automation
            </motion.p>
          </div>

          <div className="mt-16 overflow-hidden">
            <Marquee />
          </div>

          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-50 text-primary-900 hover:bg-primary-100 px-8 py-3 rounded-lg text-sm font-medium transition-all duration-300"
            >
              Join Our Team
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
