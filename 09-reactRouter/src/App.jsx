/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<Home />} />
        <Route path="contact" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
