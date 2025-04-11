import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router";
import { RootState } from "./app/store";

function App() {
  const favorites = useSelector((state: RootState) => state.favorites.movies);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/movies">Movies</Link> |{" "}
        <Link to="/favorites">Favorites{` (${favorites.length})`}</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default App;
