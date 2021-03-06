import React from "react";
import { Provider } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Landing from "./components/home/Landing";
import Gif from "./components/home/Gif";

import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/gif/:id" component={Gif} />
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
