import React from "react";
import { Routes, Route } from "react-router-dom";
import Chall1 from "./Chall1";
import Chall2 from "./Chall2";
import Navbar from "./Navbar";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Chall1 />}
        />
        <Route
          path="/chall2"
          element={<Chall2 />}
        />
      </Routes>
    </div>
  );
};

export default App;
