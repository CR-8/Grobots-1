import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/hero'
import Hero_video from '../components/hero_video'
import Marquee from '../components/marquee'
import About from '../components/AboutSection'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
}

export default function Home() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="relative overflow-x-hidden bg-slate-200"
    >
      {/* Hero Section */}
      <section className="relative">
        <Hero />
      </section>

      {/* About Section */}
      <section className="relative h-screen w-screen bg-white">
        <div className="container-padding">
          <About />
        </div>
      </section>


      {/* Team Section */}
      <section className="relative h-screen w-screen bg-gradient-to-b from-dark-900/50 to-dark-900">
        <div className="container-padding">
          <motion.div
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our{' '}
              <span className="animate-gradient-text">
                Exceptional Team
              </span>
            </h2>
            <p className="text-lg text-gray-300">
              Passionate individuals driving innovation and excellence in robotics and technology
            </p>
          </motion.div>
        </div>
        <Marquee />
      </section>

      {/* Contact Section */}
      <section className="relative h-screen w-screen bg-white">
        <div className="container-padding">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
      </div>
    </motion.div>
  )
}
