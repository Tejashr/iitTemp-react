import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

function Home() {
  const testimonials = [
    {
      name: "Rohit",
      role: "IIT Bombay",
      content:
        "I joined in Class 11 with weak fundamentals. Thanks to the faculty's personal mentorship, I cracked JEE Advanced and secured AIR 527.",
      avatar: "👨‍🎓",
    },
    {
      name: "Ananya",
      role: "IIT Delhi",
      content:
        "The integrated program made all the difference. I managed school and IIT-JEE prep without stress and got into IIT Delhi.",
      avatar: "👩‍🎓",
    },
    {
      name: "Karthik",
      role: "NIT Trichy",
      content:
        "The test analysis feature helped me improve topic by topic. I went from struggling in Physics to scoring 98 percentile.",
      avatar: "👨‍🎓",
    },
    {
      name: "Priya",
      role: "IIT Madras",
      content:
        "The daily practice questions and mock tests were game-changers. Secured under 1000 rank in JEE Advanced from 50k in my first attempt.",
      avatar: "👩‍🎓",
    },
    {
      name: "Arjun",
      role: "IIT Kharagpur",
      content:
        "Started preparing late in Class 12, but the intensive program and dedicated mentors helped me achieve AIR 892 in just 8 months.",
      avatar: "👨‍🎓",
    },
    {
      name: "Sneha",
      role: "IIT Roorkee",
      content:
        "Their unique approach to Physics concepts and problem-solving techniques helped me score 99.8 percentile in JEE Mains.",
      avatar: "👩‍🎓",
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Crack IIT-JEE with India's Most Trusted Learning Platform
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Personalized learning, proven results, and expert mentors guiding
            you from fundamentals to JEE success.
          </motion.p>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Expert IITian Faculty",
              description:
                "Learn from experienced IIT graduates who understand the exam pattern and requirements inside out.",
              icon: "👨‍🏫",
            },
            {
              title: "Live + Recorded Classes",
              description:
                "Flexible learning with interactive live sessions and comprehensive recorded lectures for revision.",
              icon: "🎥",
            },
            {
              title: "Adaptive Practice Tests",
              description:
                "AI-powered tests that adapt to your level and help you focus on areas that need improvement.",
              icon: "📝",
            },
            {
              title: "Progress Reports",
              description:
                "Detailed personalized progress reports to track your improvement and identify weak areas.",
              icon: "📊",
            },
            {
              title: "24/7 Doubt Solving",
              description:
                "Round-the-clock access to expert mentors for clearing your doubts and queries instantly.",
              icon: "💡",
            },
            {
              title: "Study Material",
              description:
                "Comprehensive study materials designed by IIT toppers covering all JEE topics thoroughly.",
              icon: "📚",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        className="container mx-auto px-4 py-16 bg-gray-50 dark:bg-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "95%", label: "Students Improved Ranks" },
            { number: "10,000+", label: "IIT Aspirants Trained" },
            { number: "24/7", label: "Doubt Solving" },
            { number: "100%", label: "Success Focus" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className="text-4xl mb-4">{testimonial.avatar}</div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "{testimonial.content}"
              </p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {testimonial.role}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="bg-blue-600 dark:bg-blue-700 rounded-2xl p-8 md:p-12 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Start Your IIT-JEE Journey Today
          </motion.h2>
          <motion.p
            className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Join thousands of successful students who have achieved their
            IIT-JEE dreams with our proven learning methodology.
          </motion.p>
          <Link to="/contact">
            <motion.div
              className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              Enroll Now
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
