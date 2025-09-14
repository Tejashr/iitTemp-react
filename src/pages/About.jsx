import { useSelector } from "react-redux";
import { selectCount } from "../redux/slices/counterSlice";
import { motion } from "framer-motion";

function About() {
  const count = useSelector(selectCount);

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4 py-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
        >
          About Us
        </motion.h1>
        <div className="text-lg text-gray-700 dark:text-gray-300">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              We are an EdTech platform built by IITians, for future IITians.
              With years of experience in preparing students for competitive
              exams, we combine technology with expert guidance to deliver the
              most effective learning experience.
            </p>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12"
          >
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="mb-6">
              To make top-quality IIT-JEE coaching accessible, affordable, and
              result-oriented for every student across India. We believe in
              nurturing talent and helping students achieve their dreams of
              joining premier institutions.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-12"
          >
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">
              Our Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Concept First",
                  desc: "Focus on building strong fundamentals and deep understanding of core concepts.",
                },
                {
                  title: "Practice Smart",
                  desc: "Regular mock tests and instant analysis to track progress and improve performance.",
                },
                {
                  title: "Mentor Driven",
                  desc: "Personalized 1-on-1 guidance from experienced IIT alumni mentors.",
                },
                {
                  title: "Technology Powered",
                  desc: "Adaptive learning paths customized for every student's unique needs and pace.",
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.2 },
                  }}
                >
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {value.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-12 px-1 sm:px-2"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-4 break-words">
              Our Journey
            </h2>
            <p className="mb-6 text-sm sm:text-base md:text-lg">
              Our journey began with a simple mission - to make quality IIT-JEE
              preparation accessible to every aspiring student. Today, we're
              proud to have helped thousands of students achieve their dreams
              through our innovative approach to learning.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 p-3 sm:p-4 md:p-6 rounded-lg"
            >
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Our Impact
              </h3>
              <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm md:text-base">
                <li>Over 10,000 successful IIT-JEE aspirants</li>
                <li>95% improvement rate in student rankings</li>
                <li>Pan-India presence with students from 28 states</li>
                <li>Team of 100+ IIT alumni as mentors and instructors</li>
              </ul>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}

export default About;
