import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white hover:text-gray-300">
            Bookstore
          </Link>
        </li>
        <li>
          <Link to="/add-book" className="text-white hover:text-gray-300">
            Add Book
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
