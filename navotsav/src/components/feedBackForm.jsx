import React, { useState } from "react";
import axios from "axios";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://formspree.io/f/xanwgjwg", {
        name,
        email,
        message,
      });
      setSuccess(true);
      setError(false);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setError(true);
      setSuccess(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-orange-400 via-pink-500 via-purple-600 to-blue-400 p-8">
      <div className="max-w-2xl w-full bg-white p-8 rounded-xl ">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-8 text-center">
          We Value Your Feedback!
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-lg font-semibold text-gray-800">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-md transition duration-300"
              placeholder="Enter your name"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-lg font-semibold text-gray-800">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-md transition duration-300"
              placeholder="Enter your email"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-lg font-semibold text-gray-800">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-md transition duration-300"
              placeholder="Write your message here"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-white text-blue-500 font-bold text-lg p-4 rounded-lg shadow-xl focus:ring-2 focus:ring-blue-500 transition duration-300 transform hover:scale-105"
          >
            Submit Feedback
          </button>
          {success && (
            <p className="mt-6 text-green-500 text-center text-lg font-semibold">
              Thank you for your feedback!
            </p>
          )}
          {error && (
            <p className="mt-6 text-red-500 text-center text-lg font-semibold">
              There was an error submitting your feedback. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
