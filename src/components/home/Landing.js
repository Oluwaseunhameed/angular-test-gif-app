import React from "react";

import { connect } from "react-redux";

import SearchForm from "./SearchForm";
import GifsContainer from "./GifsContainer";
import Spinner from "../layout/Spinner";

export const Landing = ({ loading }) => {
  return (
    <div className="container">
      <SearchForm />
      {loading ? <Spinner /> : <GifsContainer />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.gifs.loading,
});

export default connect(mapStateToProps)(Landing);
