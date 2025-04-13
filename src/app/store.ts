import { configureStore } from "@reduxjs/toolkit/react";
import { favoritesReducer } from "../routes/movies/favorite/favoritesSlice";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
