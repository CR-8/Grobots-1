import { motion } from "framer-motion";
import { Award, Users, Lightbulb, Target, Clock, Rocket } from "lucide-react";

export default function About() {
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

  const features = [
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality in robotics and automation solutions.",
    },
    {
      icon: Users,
      title: "Community",
      description: "A diverse team of passionate individuals working together to innovate.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly pushing boundaries and exploring new possibilities in technology.",
    },
    {
      icon: Target,
      title: "Focus",
      description: "Dedicated to solving real-world challenges through robotics.",
    },
  ];

  const milestones = [
    {
      year: "2012",
      title: "Foundation",
      description: "Grobots was established with a vision to revolutionize robotics education.",
    },
    {
      year: "2015",
      title: "First Competition",
      description: "Successfully organized our first robotics competition.",
    },
    {
      year: "2018",
      title: "Expansion",
      description: "Expanded our reach to multiple cities and institutions.",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Launched online learning platforms and virtual competitions.",
    },
    {
      year: "2023",
      title: "Recognition",
      description: "Received acclaim for our innovative projects.",
    },
  ];

  return (
    <div className="min-h-screen text-primary-50">
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
              className="text-4xl  sm:text-5xl lg:text-6xl font-light mb-6"
            >
              About{" "}
              <motion.span
                className="relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-primary-50">Grobots</span>
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
              We are a community of innovators, creators, and tech enthusiasts dedicated to pushing the boundaries of robotics and automation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-light text-primary-50">
                Our Mission
              </h2>
              <p className="text-lg text-primary-300 leading-relaxed">
                At Grobots, we're on a mission to democratize robotics education and innovation. We believe that everyone should have access to the tools and knowledge needed to create the future of automation.
              </p>
              <p className="text-lg text-primary-300 leading-relaxed">
                Through our comprehensive programs, hands-on workshops, and competitive events, we're building a community of problem-solvers who will shape the future of technology.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="relative aspect-square rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary-800/50 backdrop-blur-sm border border-primary-300/10 rounded-2xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Rocket className="w-32 h-32 text-primary-300" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="backdrop-blur-sm bg-primary-800/50 rounded-xl p-6 border border-primary-300/10 hover:border-primary-300/30 transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-primary-300 mb-4" />
                <h3 className="text-xl font-semibold text-primary-50 mb-2">
                  {feature.title}
                </h3>
                <p className="text-primary-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-light text-primary-50 text-center mb-12">
              Our Journey
            </h2>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-8 border-l-2 border-primary-300/20"
                >
                  <div className="absolute left-[-5px] top-0 w-3 h-3 rounded-full bg-primary-300/50" />
                  <div className="backdrop-blur-sm bg-primary-800/50 rounded-xl p-6 border border-primary-300/10">
                    <div className="flex items-center gap-4 mb-2">
                      <Clock className="w-5 h-5 text-primary-300" />
                      <span className="text-primary-300">{milestone.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-primary-50 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-primary-300">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-light text-primary-50 mb-6">
              Join Our Journey
            </h2>
            <p className="text-lg text-primary-300 mb-8">
              Be part of our growing community of innovators and help shape the future of robotics.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-50 text-primary-900 hover:bg-primary-100 px-8 py-3 rounded-lg text-sm font-medium transition-all duration-300"
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 