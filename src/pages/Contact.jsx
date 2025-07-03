import React from 'react'
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="text-black rounded-xl shadow-sm p-6 space-y-4 w-full max-w-md mx-auto bg-white"
    >
      <h3 className="text-2xl font-semibold mb-2">Contact Me</h3>

      <div className="flex flex-col">
        <label className="text-sm font-bold mb-1" htmlFor="name">Name</label>
        <input
          className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-bold mb-1" htmlFor="email">Email</label>
        <input
          className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-bold mb-1" htmlFor="message">Message</label>
        <textarea
          className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200"
      >
        Send Message
      </button>
    </form>
  );
}

export default Contact