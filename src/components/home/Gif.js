import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchGif } from "../../actions/searchActions";
import Spinner from "../layout/Spinner";
import { useParams } from "react-router-dom";

export const Gif = (props) => {
  const { id } = useParams();
  useEffect(() => {
    props.fetchGif(id);
    console.log(props.loading);
  }, [id]);

  if (props.loading) {
    return <Spinner />;
  }

  return props.gif.images ? (
    <div className="container">
      <div className="row">
        <div className="col-md-4 card card-body">
          {
            <img
              src={props.gif.images.fixed_height.url}
              className="thumbnail"
              alt="Gif"
            />
          }
        </div>
        <div className="col-md-8">
          <h2 className="mb-4">{props.gif.title}</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>URL:</strong> {props.gif.url}
            </li>
            <li className="list-group-item">
              <strong>Type:</strong> {props.gif.type}
            </li>
            <li className="list-group-item">
              <strong>Released:</strong> {props.gif.import_datetime}
            </li>
            <li className="list-group-item">
              <strong>Trending date:</strong> {props.gif.trending_datetime}
            </li>
            <li className="list-group-item">
              <strong>Rating:</strong> {props.gif.rating}
            </li>
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <Spinner />
  );
};

const mapStateToProps = (state) => ({
  loading: state.gifs.loading,
  gif: state.gifs.gif,
});

export default connect(mapStateToProps, { fetchGif })(Gif);
