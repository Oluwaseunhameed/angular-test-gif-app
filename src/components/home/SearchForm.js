import React from "react";

import { connect } from "react-redux";

import { searchGif, fetchGifs, setLoading } from "../../actions/searchActions";

export const SearchForm = (props) => {
  const onChange = (e) => {
    props.searchGif(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.fetchGifs(props.text);
    props.setLoading();
  };

  return (
    <div className="jumbotron jumbotron-fluid mt-5 text-center">
      <div className="container">
        <h1 className="display-4 mb-3">Search for a Gif</h1>
        <form id="searchForm" onSubmit={onSubmit}>
          <input
            type="text"
            className="form-control"
            name="searchText"
            data-testid='searchinput'
            placeholder="Search gifs..."
            onChange={onChange}
          />
          <button data-testid='Search' type="submit" className="btn btn-primary btn-bg mt-3">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  text: state.gifs.text,
});

export default connect(mapStateToProps, { searchGif, fetchGifs, setLoading })(
  SearchForm
);
