import { createBrowserRouter } from "react-router";
import { HomePage } from "./Features/home/HomePage";
import App from "./App";
import { MoviesPage } from "./Features/movies/MoviesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: HomePage },
      { path: "movies", Component: MoviesPage },
    ],
  },
]);
