import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://formspree.io/f/xanwgjwg', {
        name,
        email,
        message,
      });
      setSuccess(true);
      setError(false);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setError(true);
      setSuccess(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row bg-white p-8 rounded-lg shadow-lg">
      <div className="md:w-1/2 flex items-center justify-center">
        <img src="https://via.placeholder.com/400" alt="Feedback" className="rounded-lg shadow-md" />
      </div>
      <div className="md:w-1/2 md:pl-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">We Value Your Feedback!</h2>
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <div>
            <label className="block text-blue-500">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-300"
            />
          </div>
          <div>
            <label className="block text-blue-500">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-300"
            />
          </div>
          <div>
            <label className="block text-blue-500">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={2}
              className="w-full p-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-400 text-white font-semibold p-2 rounded hover:bg-orange-500 transition duration-300"
          >
            Submit Feedback
          </button>
          {success && <p className="text-green-500">Thank you for your feedback!</p>}
          {error && <p className="text-red-500">There was an error submitting your feedback.</p>}
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
