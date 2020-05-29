import { SEARCH_GIF, FETCH_GIFS, FETCH_GIF, LOADING } from "./types";
import axios from "axios";

import { APIKey } from "../APIKey";

export const searchGif = (text) => (dispatch) => {
  dispatch({
    type: SEARCH_GIF,
    payload: text,
  });
};

export const fetchGifs = (text) => (dispatch) => {
  axios
    .get(
      `https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&q=${text}&limit=25&offset=0&rating=G&lang=en`
    )
    .then((response) =>
      dispatch({
        type: FETCH_GIFS,
        payload: response.data.data,
      })
    )
    .catch((err) => console.log(err));
};

export const fetchGif = (id) => (dispatch) => {
  dispatch({type:LOADING,payload:true})
  axios
    .get(`https://api.giphy.com/v1/gifs/${id}?api_key=${APIKey}`)
    .then((response) => {
      dispatch({
        type: FETCH_GIF,
        payload: response.data.data,
      })
  dispatch({ type: LOADING, payload: false })
})
    .catch((err) => {
      console.log(err);
      dispatch({ type: LOADING, payload: false })

})
};

export const setLoading = () => {
  return {
    type: LOADING,
  };
};
