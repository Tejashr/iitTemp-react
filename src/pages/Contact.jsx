import { motion } from "framer-motion";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.div
      className="min-h-screen pt-16 bg-white dark:bg-gray-900 transition-colors duration-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <motion.h1
            className="text-5xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Let's Begin Your IIT-JEE Journey
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have questions? Our academic counselors are here to guide you.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="program"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Class/Program Interested In
                  </label>
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select a program</option>
                    <option value="class-11">Class 11 IIT-JEE</option>
                    <option value="class-12">Class 12 IIT-JEE</option>
                    <option value="dropper">Dropper Batch</option>
                    <option value="crash-course">Crash Course</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg"
                >
                  Request a Callback
                </button>
              </div>
            </form>
          </motion.div>
          <motion.div
            className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <span className="text-2xl mr-4">📍</span>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                    Our Centers
                  </h3>
                  <div className="space-y-2">
                    <p className="text-gray-600 dark:text-gray-300">
                      Main Branch: Crystal Tower, 3rd Floor
                      <br />
                      Koramangala 5th Block
                      <br />
                      Bangalore - 560095, Karnataka
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Delhi-NCR: A-12, Sector 62
                      <br />
                      Noida - 201309, Uttar Pradesh
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-4">📞</span>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                    Contact Numbers
                  </h3>
                  <div className="space-y-1">
                    <p className="text-gray-600 dark:text-gray-300">
                      Bangalore: +91-80-4862-1234
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Delhi-NCR: +91-120-4581-5678
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Toll-Free: 1800-203-8877
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-4">📧</span>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                    Email
                  </h3>
                  <div className="space-y-1">
                    <a
                      href="mailto:admissions@iitprep.edu.in"
                      className="text-blue-600 dark:text-blue-400 hover:underline block"
                    >
                      admissions@iitprep.edu.in
                    </a>
                    <a
                      href="mailto:support@iitprep.edu.in"
                      className="text-blue-600 dark:text-blue-400 hover:underline block"
                    >
                      support@iitprep.edu.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
