import React from "react";
import "./App.css";
import MainPage from "./Components/Mainpage";
import MainPage2 from "./Components/MainPage2";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<MainPage />}  />
        <Route path="/Analyzer" element={<MainPage2 />} />
      </Routes>
    </Router>
  );
}

export default App;