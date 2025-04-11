import { useLoaderData } from "react-router";

export const MoviesPage = () => {
  const movies = useLoaderData() as {
    id: number;
    title: string;
    poster_path: string;
  }[];

  return (
    <div>
      <h2>Popular Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
