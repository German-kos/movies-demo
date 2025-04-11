import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "./favoritesSlice";
import { RootState } from "../../app/store";
import { useLoaderData } from "react-router";
import { Movie } from "../../types/movie";

export default function MoviesPage() {
  const movies = useLoaderData() as Movie[];

  const favorites = useSelector((state: RootState) => state.favorites.movies);
  const dispatch = useDispatch();

  return (
    <div className="mx-auto px-4 py-8 max-w-4xl">
      <h2 className="mb-6 font-semibold text-2xl text-center">
        Popular Movies
      </h2>

      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {movies.map((movie) => {
          const isFavorited = favorites.some((fav) => fav.id === movie.id);
          return (
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
                  className={`mt-2 px-3 py-1 rounded text-sm font-medium transform hover:scale-105 active:scale-95 transition duration-200 ${
                    isFavorited
                      ? "bg-yellow-300 text-black hover:bg-yellow-400"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                >
                  {isFavorited ? "★ Favorited" : "☆ Favorite"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
