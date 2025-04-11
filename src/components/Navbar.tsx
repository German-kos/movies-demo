import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { Link } from "react-router";

export const Navbar = () => {
  const favoritesCount = useSelector(
    (state: RootState) => state.favorites.movies.length
  );

  return (
    <nav className="top-0 z-10 sticky bg-white shadow-md py-4">
      <div className="flex justify-center space-x-10 font-semibold text-lg">
        <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
          Home
        </Link>
        <Link
          to="/movies"
          className="text-gray-700 hover:text-blue-600 transition"
        >
          Movies
        </Link>
        <Link
          to="/favorites"
          className="relative text-gray-700 hover:text-blue-600 transition"
        >
          Favorites
          <span className="inline-block bg-yellow-300 ml-2 px-2 py-0.5 rounded-full text-black text-xs">
            {favoritesCount}
          </span>
        </Link>
      </div>
    </nav>
  );
};
