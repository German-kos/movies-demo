export async function loadMovies() {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch movies! ---" + response.statusText);
  }

  const data = await response.json();

  return data.results;
}
