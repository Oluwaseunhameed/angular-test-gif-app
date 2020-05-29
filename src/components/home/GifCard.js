import React from "react";
import { useHistory } from "react-router-dom";

export const GifCard = (props) => {
  const history = useHistory();
  const { gif } = props;
  const clickAction = (e) => {
    e.preventDefault();
    history.push(`/gif/${gif.id}`);
  };
  return (
    <div className="col-md-3 mb-3" data-testid="gifs">
      <div className="card card-body bg-dark text-center h-7">
        <a className="btn btn-primary" onClick={clickAction}>
          <img
            className="w-100 mb-1"
            src={gif.images.fixed_height.url}
            alt="Gif Cover"
          />
        </a>
      </div>
    </div>
  );
};

export default GifCard;
