import { popularRoute } from "./popular";
import { favoriteRoute } from "./favorite";

export const moviesRoutes = [
  {
    path: "popular",
    children: [popularRoute],
  },
  {
    path: "favorites",
    children: [favoriteRoute],
  },
];
