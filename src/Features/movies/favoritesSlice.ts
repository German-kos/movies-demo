import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../types/movie";

interface FavoritesState {
  movies: Movie[];
}

const initialState: FavoritesState = {
  movies: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<Movie>) {
      const movie = action.payload;
      const exists = state.movies.find((m) => m.id === movie.id);

      if (exists) {
        state.movies = state.movies.filter((m) => m.id !== movie.id);
      } else {
        state.movies.push(movie);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
