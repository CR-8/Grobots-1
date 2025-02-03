import React from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

export default function Hero_video() {
  return (
    <div className="relative">
      {/* Main Video Container */}
      <div className="absolute inset-0 flex justify-center items-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.4,
            duration: 0.8,
            ease: "easeOut"
          }}
          className="w-[85vw] max-w-[1400px]"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="relative rounded-3xl overflow-hidden group"
          >
            {/* Video Thumbnail */}
            <div className="relative h-[600px]">
              <img 
                src="/api/placeholder/800/500" 
                alt="Team meeting" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              
              {/* Enhanced Play Button */}
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                         bg-white rounded-full p-6
                         shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all duration-300
                         hover:shadow-[0_0_50px_rgba(0,0,0,0.5)]"
              >
                <Play className="w-10 h-10 text-black drop-shadow-lg" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}


