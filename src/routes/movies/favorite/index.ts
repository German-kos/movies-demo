import { RouteObject } from "react-router";

export const favoriteRoute: RouteObject = {
  path: "",
  lazy: () => import("./FavoriteMovies"),
};
