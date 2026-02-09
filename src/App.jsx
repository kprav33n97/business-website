import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Admin from "./Pages/Admin";
import Home from "./Pages/Home";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";



const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(() => {
  const storedAuth = localStorage.getItem("isLoggedIn");
  if (storedAuth === "true") {
    setIsLoggedIn(true);
  }
}, []);

  return (
    <BrowserRouter basename="/business-website">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route
  path="/admin"
  element={
    isLoggedIn ? (
      <Admin setIsLoggedIn={setIsLoggedIn} />
    ) : (
      <Navigate to="/login" />
    )
  }
/>


      </Routes>
    </BrowserRouter>
  );
};

export default App;
