import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-center">Unsere Dienstleistungen</h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
      >
        {[
          { title: "Webentwicklung", description: "Professionelle Websites und Webanwendungen." },
          { title: "IT-Beratung", description: "Strategische IT-Lösungen für Ihr Unternehmen." },
          { title: "Cloud-Lösungen", description: "Skalierbare und sichere Cloud-Dienste." },
        ].map((service, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 shadow-lg rounded-lg"
            variants={cardVariants}
          >
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;