import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FlashProvider } from "./context/FlashContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FlashMessage from "./components/FlashMessage";
import Home from "./components/Home";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <FlashProvider>
      <Router>
        <div className="app">
          <Navbar />
          <FlashMessage />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </FlashProvider>
  );
};

export default App;
