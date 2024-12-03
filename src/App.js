import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState } from "react";

export default function App() {
  document.title = "flames by MARCEL";
  const [personsInfo, setPersonsInfo] = useState({ 1: {}, 2: {} });

  return <Router></Router>;
}
