import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
    <footer className="relative text-primary-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-semibold text-primary-50">Grobots</h3>
            <p className="text-primary-300 leading-relaxed">
              Empowering the future through robotics and automation innovation.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-primary-800/50 border border-primary-300/10 hover:border-primary-300/30 flex items-center justify-center transition-all duration-300"
                >
                  <social.icon className="w-5 h-5 text-primary-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold text-primary-50">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Team", "Projects", "Events", "Contact"].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="text-primary-300 hover:text-primary-50 transition-colors duration-300"
                >
                  <a href="#" className="flex items-center space-x-2">
                    <span className="w-1 h-1 rounded-full bg-primary-300/50" />
                    <span>{link}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold text-primary-50">Contact Us</h4>
            <ul className="space-y-4">
              {[
                { icon: Mail, text: "info@grobots.com" },
                { icon: Phone, text: "+91 9876543210" },
                { icon: MapPin, text: "SRMCEM , Faizabaad Road , Lucknow , Uttar Pradesh" },
              ].map((contact, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-primary-300 hover:text-primary-50 transition-colors duration-300"
                >
                  <contact.icon className="w-5 h-5" />
                  <span>{contact.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold text-primary-50">Newsletter</h4>
            <p className="text-primary-300">
              Subscribe to our newsletter for updates and insights.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-primary-800/50 border border-primary-300/10 focus:border-primary-300/30 focus:outline-none text-primary-900 placeholder-primary-600 transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary-50 text-primary-900 hover:bg-primary-100 py-2 rounded-lg text-sm font-medium transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-primary-300/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-300 text-sm">
              © {new Date().getFullYear()} Grobots. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  className="text-primary-300 hover:text-primary-50 text-sm transition-colors duration-300"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}