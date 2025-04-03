// filepath: c:\Users\mn512\OneDrive\Desktop\website\frontend\src\components\Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="p-8 bg-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-center">Kontakt</h2>
      <p className="text-center mb-4">Kontaktieren Sie uns für weitere Informationen.</p>
      <form className="max-w-md mx-auto bg-white p-6 shadow-md rounded-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            id="name"
            type="text"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            placeholder="Ihr Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-Mail</label>
          <input
            id="email"
            type="email"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            placeholder="Ihre E-Mail-Adresse"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Nachricht</label>
          <textarea
            id="message"
            rows="4"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            placeholder="Ihre Nachricht"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600"
        >
          Senden
        </button>
      </form>
    </section>
  );
};

export default Contact;