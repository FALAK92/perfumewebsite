import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-300 via-purple-200 to-pink-300 p-6">
      <h1 className="text-5xl font-bold text-pink-900 mb-8 animate-fade-in-down">
        Contact Us
      </h1>

      <form className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md animate-scale-up">
        <div className="mb-6">
          <label className="block text-pink-700 font-medium mb-2" htmlFor="name">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-900"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-6">
          <label className="block text-pink-700 font-medium mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-900"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label className="block text-pink-700 font-medium mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-900"
            rows={4}
            placeholder="Write your message"
          />
        </div>

        <button
          className="w-full bg-pink-900 text-white font-bold py-2 rounded-md transition duration-200 transform hover:scale-105 focus:scale-95"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
