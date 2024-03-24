import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Bookstore() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("YOUR_API_ENDPOINT");
        setBooks(response.data.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {books.map((book) => (
        <div
          key={book._id}
          className="m-4 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {book.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700">
            Author: {book.author}
          </p>
          <p className="mb-3 font-normal text-gray-700">
            Publish Year: {book.publishYear}
          </p>
        </div>
      ))}
    </div>
  );
}
