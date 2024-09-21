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
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-orange-400 via-pink-500 to-blue-400 p-8">
      {/* Feedback Title */}
      <h2 className="text-7xl font-extrabold  text-gray-100 mb-8 self-start ml-24">
        Feedback Form
      </h2>

      {/* Form Container */}
      <div className="max-w-2xl w-full bg-white p-12 transition ease-in-out">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-xl font-semibold text-gray-800">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-4 border border-gray-300  focus:outline-none focus:ring-1 focus:ring-black shadow-lg transition duration-300"
              placeholder="Enter your name"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xl font-semibold text-gray-800">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-4 border border-gray-300  focus:outline-none focus:ring-1 focus:ring-black shadow-lg transition duration-300"
              placeholder="Enter your email"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xl font-semibold text-gray-800">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={6}
              className="w-full p-4 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black shadow-lg transition duration-300"
              placeholder="Write your message here"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-white-500 text-black font-bold text-lg p-4  shadow-xl focus:ring-2 focus:ring-blue-500 transition duration-300 transform hover:scale-105"
          >
            Submit
          </button>

          {success && (
            <p className="mt-4 text-green-500 text-center text-lg font-semibold">
              Thank you for your feedback!
            </p>
          )}
          {error && (
            <p className="mt-4 text-red-500 text-center text-lg font-semibold">
              There was an error submitting your feedback. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
