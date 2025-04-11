import { createBrowserRouter } from "react-router";
import { HomePage } from "./Features/home/HomePage";
import App from "./App";
import { loadMovies } from "./Features/movies/loader";
import MoviesPage from "./Features/movies/MoviesPage";
import FavoritesPage from "./Features/movies/FavoritesPage";

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
