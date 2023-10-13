import { LISTEME_EKLE, LISTEDEN_CIKAR } from "./actions";

const initialState = {
  favMovies: [],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case LISTEME_EKLE:
      return {
        ...state,
        favMovies: [...state.favMovies, action.payload],
      };
    case LISTEDEN_CIKAR:
      const updatedCart = state.favMovies.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, favMovies: updatedCart };
    default:
      return state;
  }
}
