import { motion } from "framer-motion";
import logo from "../assets/Grobotslogo.png";

export default function IntroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 mb-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl sm:text-3xl font-light text-primary-200"
            >
              Welcome to Grobots
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-primary-300 leading-relaxed"
            >
              We are a pioneering robotics club at SRMCEM , dedicated to pushing the boundaries of innovation and technology. Our journey began in 2012, and since then, we've been at the forefront of robotics education and development.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              {[
                { label: "Robotics", value: "Innovation" },
                { label: "Automation", value: "Excellence" },
                { label: "Technology", value: "Future" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="backdrop-blur-sm bg-primary-800/50 rounded-lg p-4 border border-primary-300/10 hover:border-primary-300/30 transition-all duration-300"
                >
                  <p className="text-sm text-primary-300">{item.label}</p>
                  <p className="text-lg font-medium text-primary-50">{item.value}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden backdrop-blur-sm bg-primary-800/50 border border-primary-300/10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-700/30 to-primary-900/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  className="text-6xl font-bold text-primary-50/20"
                >
                  <img src={logo} alt="Grobots Logo" className="w-full h-full object-cover" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
} 