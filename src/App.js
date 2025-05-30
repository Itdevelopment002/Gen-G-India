import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./assets/css/vendors.min.css";
import "./assets/css/icon.min.css";
import "./assets/css/responsive.css";
import "./assets/css/style.css";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Introduction from "./components/Introduction/Introduction";
import MissionVissionPage from "./components/MissionVissionPage/MissionVissionPage";
import Message from "./components/Message/Message";
import Infrastructure from "./components/Infrastructure/Infrastructure";
import Other from "./components/Other/Other";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/mission-vission" element={<MissionVissionPage />} />
        <Route path="/message" element={<Message />} />
        <Route path="/infrastructure" element={<Infrastructure/>} />
        <Route path="/other" element={<Other/>} />




      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
