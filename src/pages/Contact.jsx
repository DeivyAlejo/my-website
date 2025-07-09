import React from 'react'
import { useState } from 'react';

const Contact = () => {
  return (
    <div className="pt-20 min-h-screen text-black px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mt-4 mb-6 text-center">Contact Me</h2>

        <form
          action="mailto:dmunoz2460@gmail.com"
          method="POST"
          encType="text/plain"
          className="space-y-4 bg-white p-6 rounded-lg shadow-sm"
        >
          <div>
            <label className="block text-base font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
          </div>
          <div>
            <label className="block text-base font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
          </div>
          <div>
            <label className="block text-base font-semibold mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-blue-1200 px-4 py-1 border border-black rounded-full hover:bg-black hover:text-white font-bold cursor-pointer"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact