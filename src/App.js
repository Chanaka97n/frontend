import React from "react";
import { Routes, Route } from "react-router-dom";
import Bookstore from "./page/bookstore";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Bookstore />} />
    </Routes>
  );
}

export default App;
