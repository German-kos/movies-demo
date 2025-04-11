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
    <div>
      <h2>Popular Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.title}</p>
            <button onClick={() => dispatch(toggleFavorite(movie))}>
              {favorites.includes(movie) ? "★ Favorited" : "☆ Favorite"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
