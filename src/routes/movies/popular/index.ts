import { RouteObject } from "react-router";
import { loadMovies } from "./loader";

export const popularRoute: RouteObject = {
  path: "",
  lazy: () => import("./PopularMovies"),
  loader: loadMovies,
};
