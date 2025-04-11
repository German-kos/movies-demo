import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { toggleFavorite } from "./favoritesSlice";
import { Movie } from "../../types/movie";
import { Link } from "react-router";

export default function FavoritesPage() {
  const favorites = useSelector((state: RootState) => state.favorites.movies);
  const dispatch = useDispatch();

  if (favorites.length === 0) {
    return (
      <div className="py-16 text-center">
        <h2 className="mb-4 font-semibold text-xl">No favorites yet</h2>
        <p className="text-gray-500">Go to the Movies page and add some!</p>
        <div className="space-x-4 py-6">
          <Link
            to="/movies"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded text-white transition"
          >
            Explore Movies
          </Link>
          <Link
            to="/"
            className="inline-block bg-yellow-300 hover:bg-yellow-400 px-5 py-2 rounded text-black transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto px-4 py-8 max-w-4xl">
      <h2 className="mb-6 font-semibold text-2xl text-center">
        Your Favorites
      </h2>

      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {favorites.map((movie: Movie) => (
          <div
            key={movie.id}
            className="bg-white shadow-sm hover:shadow-lg border border-gray-200 rounded-md text-sm text-center transition-shadow duration-300"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="rounded-t-md w-full h-auto"
            />

            <div className="p-3">
              <h3 className="mb-1 font-medium">{movie.title}</h3>
              <button
                onClick={() => dispatch(toggleFavorite(movie))}
                className="bg-yellow-300 hover:bg-yellow-400 mt-2 px-3 py-1 rounded font-medium text-black text-sm hover:scale-105 active:scale-95 transition duration-200 transform"
              >
                ★ Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
