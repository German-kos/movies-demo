import { RouteObject } from "react-router";
import { FavoriteMovies } from "./FavoriteMovies";

export const favoriteRoute: RouteObject = {
  path: "",
  lazy: () =>
    import("./FavoriteMovies").then(() => ({
      Component: FavoriteMovies,
    })),
};
