import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function MarqueeCard({ 
  image, 
  name, 
  position, 
  graduationYear, 
  employed, 
  company 
}) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative h-[28rem] w-[24rem] rounded-2xl overflow-hidden group"
    >
      {/* Main Card Content */}
      <div className="relative h-full w-full bg-[#001824] rounded-2xl">
        {/* Large Image Section */}
        <div className="h-full w-full overflow-hidden">
          {!imageError ? (
            <motion.img
              src={image}
              alt={name}
              onError={handleImageError}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center bg-gray-800">
              <span className="text-6xl text-gray-600">{name.charAt(0)}</span>
            </div>
          )}
          
          {/* Gradient Overlay - Visible on Hover */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#001824]/50 to-[#001824] opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
        </div>

        {/* Info Overlay - Appears on Hover */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-[30%] group-hover:translate-y-0 transition-transform duration-500">
          {/* Name & Position */}
          <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 mb-4">
            <h3 className="text-xl font-semibold text-white mb-1">{name}</h3>
            <p className="text-[#40E0D0] text-sm">{position}</p>
            <div className="flex items-center gap-4 mt-3">
              <div className="flex-1">
                <p className="text-gray-400 text-xs mb-1">Graduation Year</p>
                <p className="text-white font-medium">{graduationYear}</p>
              </div>
              <div className="flex-1">
                <p className="text-gray-400 text-xs mb-1">Status</p>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${employed ? 'bg-green-500' : 'bg-red-500'}`} />
                  <p className="text-white text-sm">{employed ? 'Employed' : 'Seeking'}</p>
                </div>
                {employed && company && (
                  <p className="text-[#40E0D0] text-sm mt-1">{company}</p>
                )}
              </div>
            </div>
          </div>

          {/* Connect Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-gradient-to-r from-[#40E0D0] to-[#2CB5A8] rounded-xl text-white font-medium shadow-lg"
          >
            Connect
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
