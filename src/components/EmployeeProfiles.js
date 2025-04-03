import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const EmployeeProfiles = () => {
  const employees = [
    { name: "Max Mustermann", position: "Webentwickler" },
    { name: "Anna Müller", position: "IT-Beraterin" },
  ];

  return (
    <section id="employees" className="p-8 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Unser Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {employees.map((employee, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 shadow-md rounded-lg transform transition-transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold">{employee.name}</h3>
            <p>{employee.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EmployeeProfiles;