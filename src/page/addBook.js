import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function AddBook() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publishYear: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5555/books",
        formData
      );
      console.log("Book added:", response.data);
      toast.success("add book details");
      // Reset form or provide further user feedback
    } catch (error) {
      console.error("Error adding book:", error);
      toast.error("Request faild");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 space-y-5">
      <h2 className="text-lg font-semibold">Add a New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="author"
            className="block text-sm font-medium text-gray-700"
          >
            Author
          </label>
          <input
            type="text"
            name="author"
            id="author"
            value={formData.author}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="publishYear"
            className="block text-sm font-medium text-gray-700"
          >
            Publish Year
          </label>
          <input
            type="number"
            name="publishYear"
            id="publishYear"
            value={formData.publishYear}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Book
        </button>
      </form>
    </div>
  );
}
