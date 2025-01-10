import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch students from the API
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("/api/all"); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json(); // Parse the response as JSON
        console.log(data.data); // Log the data for debugging
        setStudents(data.data); // Set the fetched data to state
      } catch (error) {
        console.error("Error fetching students:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Student List</h1>

      {loading ? (
        <p className="text-xl text-gray-500">Loading...</p>
      ) : (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {students &&
            students.map((student) => (
              <motion.div
                key={student._id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
                variants={itemVariants}
              >
                <h2 className="text-xl font-semibold text-gray-800">
                  {student.name}
                </h2>
                <p className="text-gray-600">
                  <span className="font-medium">Email:</span> {student.email}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Phone:</span> {student.phone}
                </p>
                {student.institution && (
                  <p className="text-gray-600">
                    <span className="font-medium">Institution:</span>{" "}
                    {student.institution}
                  </p>
                )}
                {student.profession && (
                  <p className="text-gray-600">
                    <span className="font-medium">Profession:</span>{" "}
                    {student.profession}
                  </p>
                )}
              </motion.div>
            ))}
        </motion.div>
      )}
    </div>
  );
};

export default StudentList;
