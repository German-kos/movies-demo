import { createBrowserRouter } from "react-router";
import App from "./App";

import { moviesRoutes } from "./routes";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, lazy: () => import("./routes/home/Home") },
      { path: "about", lazy: () => import("./routes/about/About") },
      {
        path: "movies",
        children: moviesRoutes,
      },
    ],
  },
]);
