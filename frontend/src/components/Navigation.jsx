import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/Grobotslogo.png";

export default function Navigation() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col backdrop-blur-md sm:flex-row justify-between items-center mb-4 sm:mb-32 bg-primary-800/50 rounded-xl p-4 sm:p-6 border border-primary-300/10 hover:border-primary-300/30 text-center transition-all duration-300"
    >
      <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 sm:mb-0">
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={logo}
            alt="Grobots Logo"
            className="scale-[240%] transition-transform duration-300"
          />
        </div>
        <span className="text-lg font-medium tracking-wide text-primary-50">Grobots</span>
      </motion.div>

      <div className="flex flex-wrap justify-center sm:space-x-8 mb-6 sm:mb-0">
        {[
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
          { name: "Team", path: "/team" },
          { name: "Projects", path: "/projects" },
          { name: "Contact Us", path: "/contact" },
        ].map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`${
              item.name === "Home" ? "text-primary-50" : "text-primary-300"
            } hover:text-primary-50 transition-colors relative group px-2 py-1 sm:px-4`}
          >
            <Link to={item.path} className="flex items-center space-x-2">
              <span>{item.name}</span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary-50 origin-left"
              />
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="flex gap-4">
        {["Get Started", "Let's Talk"].map((text, index) => (
          <motion.button
            key={text}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${
              index === 0
                ? "bg-primary-50 text-primary-900 hover:bg-primary-100"
                : "border border-primary-300 hover:border-primary-50/40 hover:bg-primary-800/20 text-primary-300"
            } px-4 sm:px-8 py-2 sm:py-3 rounded-lg text-sm font-medium transition-all duration-300`}
          >
            {text}
          </motion.button>
        ))}
      </div>
      
    </motion.nav>
  );
} 