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
    case ADD_FAVORITES:
      const fav2Add = action.payload;
      const newMoviesList = state.movies.filter((m) => m.id !== fav2Add.id);

      return {
        ...state,
        favorites: [...state.favorites, fav2Add],
        movies: newMoviesList,
        sira: state.sira === newMoviesList.length ? state.sira - 1 : state.sira,
      };
    case REMOVE_FAV:
      const fav2RemoveID = action.payload;
      const newFavList = state.favorites.filter((f) => f.id !== fav2RemoveID);
      const fav2Move3Movies = state.favorites.find(
        (f) => f.id === fav2RemoveID
      );

      const movList2Add = [...state.movies, fav2Move3Movies];
      return {
        ...state,
        favorites: newFavList,
        movies: movList2Add,
      };
    case SONRAKI_FILM:
      return {
        ...state,
        sira: state.sira + 1,
      };
    case ONCEKI_FILM:
      return {
        ...state,
        sira: state.sira - 1,
      };
    default:
      return state;
  }
};

export default reducer;
