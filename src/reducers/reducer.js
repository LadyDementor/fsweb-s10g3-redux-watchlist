import { movies } from "../movies";
import {
  REMOVE_FAV,
  ADD_FAVORITES,
  SONRAKI_FILM,
  ONCEKI_FILM,
} from "../actions/action";
const ADD_TO_FAV = "ADD_TO_FAV";
const favoriteMovies = [movies[2]]; // örnek olarak ilk ve dördüncü filmi favoriler listesine ekledik
const initialState = {
  movies: movies,
  favorites: favoriteMovies,
  sira: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      return state;

    default:
      return state;
  }
};
export default reducer;
