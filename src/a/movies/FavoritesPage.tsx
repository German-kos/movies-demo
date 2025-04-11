import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { toggleFavorite } from "./favoritesSlice";

export default function FavoritesPage() {
  const favorites = useSelector((state: RootState) => state.favorites.movies);
  const dispatch = useDispatch();

  if (favorites.length === 0) {
    return <p>Your favorites list is empty.</p>;
  }

  return (
    <div>
      <h2>Favorite Movies</h2>
      <ul>
        {favorites.map((movie) => (
          <li key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.title}</p>
            <button onClick={() => dispatch(toggleFavorite(movie))}>
              Remove from favorites
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
