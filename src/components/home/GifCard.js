import React from "react";
import { useHistory } from "react-router-dom";

export const GifCard = (props) => {
  const history = useHistory()
  const { gif } = props;
  const clickAction = (e) => {
    e.preventDefault();
    history.push(`/gif/${gif.id}`)
  }
  return (
    <div className="col-md-3 mb-5" data-testid='gifs'>
      <div className="card card-body bg-dark text-center h-10">
        <a className="btn btn-primary" onClick={clickAction}>
          <img
            className="w-100 mb-2"
            src={gif.images.fixed_height_small.url}
            alt="Gif Cover"
          />
        </a>
        {/* <Link className="btn btn-primary" to={"/gif/" + gif.id}>
          Gif Details
          <i className="fas fa-chevron-right" />
        </Link> */}
      </div>
    </div>
  );
};

export default GifCard;
