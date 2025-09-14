import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Courses() {
  const programs = [
    {
      title: "IIT-JEE Program",
      target:
        "Class 11th & 12th students preparing exclusively for IIT-JEE (Main & Advanced)",
      features: [
        "600+ hours of LIVE interactive sessions",
        "Weekly doubt-solving classes",
        "Chapter-wise mock tests and rank predictor",
        "Crash course before exams",
      ],
      outcome: "Crack JEE with confidence and secure your dream IIT seat.",
      icon: "🎯",
    },
    {
      title: "Integrated Program (Class 9–12)",
      target:
        "Students who want early preparation along with school curriculum",
      features: [
        "Covers Physics, Chemistry, Maths + school syllabus",
        "Foundation building from Class 9",
        "Regular Olympiad/NTSE prep included",
        "Personalized mentor tracking for 4 years",
      ],
      outcome:
        "A stress-free, well-planned journey from school basics to JEE Advanced success.",
      icon: "🌟",
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          Our Programs
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{program.icon}</div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {program.title}
              </h2>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  Who It's For:
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {program.target}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  Features:
                </h3>
                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-blue-600 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  Outcome:
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {program.outcome}
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to="/contact"
                  className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-colors"
                >
                  Enroll Now
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
