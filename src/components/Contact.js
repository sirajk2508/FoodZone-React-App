import React, { useState } from "react";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <div className="flex flex-col m-2 p-2">
      <h1 className="text-3xl font-bold text-center">Contact Us</h1>
      <p className="p-2 text-center m-2">
        Have questions or feedback? Reach out to us using the form below.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col mx-auto w-full max-w-md shadow-lg p-9 rounded-lg"
      >
        <label htmlFor="name" className="mt-3">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border border-gray-300"
        />

        <label htmlFor="email" className="mt-3">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border border-gray-300"
        />

        <label htmlFor="message" className="mt-3">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="border border-gray-300"
        ></textarea>

        <div className="flex items-center my-3">
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
