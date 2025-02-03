import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import SmoothScroll from './components/SmoothScroll';
import { motion, AnimatePresence } from 'framer-motion'
import AppRouter from './router'
import Home from './pages/home'

export default function App() {
  return (
    <Router>
      <SmoothScroll>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-gradient-to-b from-white to-gray-50"
          >
            <div className="relative z-10">
              <Home />
            </div>

            {/* Background Decorative Elements */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-primary-500/10 to-transparent rounded-full blur-[120px] animate-float" />
              <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-dark-400/10 to-transparent rounded-full blur-[100px] animate-float" style={{ animationDelay: '-3s' }} />
            </div>
          </motion.div>
        </AnimatePresence>
      </SmoothScroll>
    </Router>
  )
}
