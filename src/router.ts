import { createBrowserRouter } from "react-router";
import { HomePage } from "./features/home/HomePage";
import App from "./App";
import { loadMovies } from "./features/movies/loader";
import MoviesPage from "./features/movies/MoviesPage";
import FavoritesPage from "./features/movies/FavoritesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: HomePage },
      { path: "movies", Component: MoviesPage, loader: loadMovies },
      { path: "favorites", Component: FavoritesPage },
    ],
  },
]);
