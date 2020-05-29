import React from "react";

import { connect } from "react-redux";

import SearchForm from "./SearchForm";

export const Landing = (props) => {
  return (
    <div className="container">
      <SearchForm />
    </div>
  );
};

export default Landing;
