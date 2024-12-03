import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState } from "react";

import LandingPage from "./Landing Page/LandingPage";
import Home from "./Home/Home";

export default function App() {
  document.title = "flames by MARCEL";
  const [personsInfo, setPersonsInfo] = useState({ 1: {}, 2: {} });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/home"
          element={
            <Home personsInfo={personsInfo} setPersonsInfo={setPersonsInfo} />
          }
        />
      </Routes>
    </Router>
  );
}
