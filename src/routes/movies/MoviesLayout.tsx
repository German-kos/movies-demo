import { Link, Outlet } from "react-router";

export const MoviesLayout = () => {
  return (
    <div>
      <nav>
        <Link to="/movies">Popular</Link> |{" "}
        <Link to="/movies/favorite">Favorites</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};
