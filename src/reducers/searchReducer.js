import { SEARCH_GIF, FETCH_GIFS, FETCH_GIF, LOADING } from "../actions/types";

const initialState = {
  text: "",
  gifs: [],
  loading: false,
  gif:{},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_GIF:
      return {
        ...state,
        text: action.payload,
      };
    case FETCH_GIFS:
      return {
        ...state,
        gifs: action.payload,
      };
    case FETCH_GIF:
      console.log(action.payload)
      return {
        ...state,
        gif: { ...action.payload }
      };
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
}
