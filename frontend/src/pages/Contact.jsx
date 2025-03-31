import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin, Loader2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({ type: "", message: "" });

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setNotification({
        type: "success",
        message: "Message sent successfully! We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      setNotification({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

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

  const notificationVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="min-h-screen text-primary-50">
      {/* Notification */}
      <AnimatePresence>
        {notification.message && (
          <motion.div
            variants={notificationVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg ${
              notification.type === "success"
                ? "bg-green-500/90 text-white"
                : "bg-red-500/90 text-white"
            } backdrop-blur-sm`}
          >
            {notification.message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl text-primary-50 lg:text-6xl font-light mb-6"
            >
              Let&apos;s{" "}
              <motion.span
                className="relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-primary-50">Talk</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute -bottom-2 left-0 w-full h-[2px] bg-primary-50"
                />
              </motion.span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg text-primary-300 leading-relaxed"
            >
              Have questions or want to collaborate? We&apos;d love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Layout */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* Contact Form - Spans 2 columns */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-2 backdrop-blur-sm bg-primary-800/50 rounded-xl p-6 border border-primary-300/10"
            >
              <h2 className="text-2xl font-light text-primary-50 mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-primary-300 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-primary-900/50 border ${
                        formErrors.name ? "border-red-500/50" : "border-primary-300/10"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300/30 text-primary-900`}
                      required
                      aria-invalid={formErrors.name ? "true" : "false"}
                      aria-describedby={formErrors.name ? "name-error" : undefined}
                    />
                    {formErrors.name && (
                      <p id="name-error" className="mt-1 text-sm text-red-400">
                        {formErrors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-primary-300 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-primary-900/50 border ${
                        formErrors.email ? "border-red-500/50" : "border-primary-300/10"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300/30 text-primary-900`}
                      required
                      aria-invalid={formErrors.email ? "true" : "false"}
                      aria-describedby={formErrors.email ? "email-error" : undefined}
                    />
                    {formErrors.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-400">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-primary-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-primary-900/50 border ${
                      formErrors.subject ? "border-red-500/50" : "border-primary-300/10"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300/30 text-primary-900`}
                    required
                    aria-invalid={formErrors.subject ? "true" : "false"}
                    aria-describedby={formErrors.subject ? "subject-error" : undefined}
                  />
                  {formErrors.subject && (
                    <p id="subject-error" className="mt-1 text-sm text-red-400">
                      {formErrors.subject}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-primary-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full px-4 py-3 bg-primary-900/50 border ${
                      formErrors.message ? "border-red-500/50" : "border-primary-300/10"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300/30 text-primary-50`}
                    required
                    aria-invalid={formErrors.message ? "true" : "false"}
                    aria-describedby={formErrors.message ? "message-error" : undefined}
                  />
                  {formErrors.message && (
                    <p id="message-error" className="mt-1 text-sm text-red-400">
                      {formErrors.message}
                    </p>
                  )}
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary-50 text-primary-900 rounded-lg font-medium hover:bg-primary-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information - Spans 1 column */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="backdrop-blur-sm bg-primary-800/50 rounded-xl p-6 border border-primary-300/10">
                <h2 className="text-2xl font-light text-primary-50 mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-800/50 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-primary-50 mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:contact@grobots.com"
                        className="text-primary-300 hover:text-primary-50 transition-colors"
                      >
                        contact@grobots.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-800/50 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-primary-50 mb-1">
                        Phone
                      </h3>
                      <a
                        href="tel:+919876543210"
                        className="text-primary-300 hover:text-primary-50 transition-colors"
                      >
                        +91 9876543210
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-800/50 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-primary-50 mb-1">
                        Location
                      </h3>
                      <p className="text-primary-300">
                        SRMCEM<br />
                        Faizabad Road, Lucknow<br/>
                        Uttar Pradesh - 226010
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="backdrop-blur-sm bg-primary-800/50 rounded-xl p-6 border border-primary-300/10">
                <h2 className="text-2xl font-light text-primary-50 mb-6">
                  Follow Us
                </h2>
                <div className="flex gap-4">
                  {[
                    { icon: Facebook, href: "https://facebook.com/grobots" },
                    { icon: Twitter, href: "https://twitter.com/grobots" },
                    { icon: Instagram, href: "https://instagram.com/grobots" },
                    { icon: Linkedin, href: "https://linkedin.com/company/grobots" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-full bg-primary-800/50 flex items-center justify-center hover:bg-primary-700/50 transition-colors"
                    >
                      <social.icon className="w-6 h-6 text-primary-300" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Map Section - Spans full width */}
            <motion.div 
              variants={itemVariants}
              className="col-span-full backdrop-blur-sm bg-primary-800/50 rounded-xl p-6 border border-primary-300/10"
            >
              <h2 className="text-2xl font-light text-primary-50 mb-6">
                Find Us
              </h2>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.416367660208!2d81.070784311039!3d26.890277976563215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399958aa91332bc9%3A0x6a61d0026a9d4548!2sSRMCEM%20College%20Rd%2C%20Uattardhona%2C%20Uttar%20Pradesh%20226010!5e0!3m2!1sen!2sin!4v1743412472777!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SRMCEM Location"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 