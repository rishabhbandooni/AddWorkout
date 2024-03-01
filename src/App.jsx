// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import WorkoutLog from "./components/WorkoutLog";
import ExcerciseTracker from "./components/ExcerciseTracker";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ForgotPassword from "./components/Auth/ForgotPassword";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/workout-log" element={<WorkoutLog />} />
          <Route path="/exercise-tracker" element={<ExcerciseTracker />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
