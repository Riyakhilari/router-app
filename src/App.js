import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";

const App = () => {
  return (
    <div className="app">
      <h1 className="header">Social Media App</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;