import React from "react";

import { connect } from "react-redux";

import GifCard from "./GifCard";

export const GifsContainer = (props) => {
  const { gifs } = props;
  let content = "";

  content =
    gifs.length > 0
      ? gifs.map((gif, index) => <GifCard key={index} gif={gif} />)
      : null;
  return <div className="row">{content}</div>;
};

const mapStateToProps = (state) => ({
  gifs: state.gifs.gifs,
});

export default connect(mapStateToProps)(GifsContainer);
