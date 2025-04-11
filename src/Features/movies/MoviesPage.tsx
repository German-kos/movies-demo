import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "./favoritesSlice";
import { RootState } from "../../app/store";
import { useLoaderData } from "react-router";

export default function MoviesPage() {
  const movies = useLoaderData() as {
    id: number;
    title: string;
    poster_path: string;
  }[];

  const favorites = useSelector((state: RootState) => state.favorites.ids);
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
            <button onClick={() => dispatch(toggleFavorite(movie.id))}>
              {favorites.includes(movie.id) ? "★ Favorited" : "☆ Favorite"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
