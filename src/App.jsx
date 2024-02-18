import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import HomePage from "./Pages/HomePage";
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  AOS.init();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
