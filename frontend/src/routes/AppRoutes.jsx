import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import QrGenerator from "../pages/QrGenerator";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProtectedRoute from "../components/ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/qr" element={<ProtectedRoute><QrGenerator /></ProtectedRoute>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
} 