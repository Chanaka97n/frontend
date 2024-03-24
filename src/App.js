import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Bookstore from "./page/bookstore";
import AddBook from "./page/addBook";
import Navbar from "./components/navBar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Bookstore />} />
          <Route path="/add-book" element={<AddBook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
