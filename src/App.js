import React from "react";
import { HashRouter as Router } from "react-router-dom";

import "./App.css";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
