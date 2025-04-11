import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

export default function FavoritesPage() {
  const favorites = useSelector((state: RootState) => state.favorites.ids);

  if (favorites.length === 0) {
    return <p>Your favorites list is empty.</p>;
  }

  return (
    <div>
      <h2>Favorite Movies</h2>
      <ul>
        {favorites.map((id) => (
          <li key={id}>Movie ID: {id}</li>
        ))}
      </ul>
    </div>
  );
}
