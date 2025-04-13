import { Link } from "react-router";

export const Component = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 h-[80vh] text-center">
      <h1 className="mb-4 font-extrabold text-blue-600 text-4xl sm:text-5xl">
        🎬 Redux & Router Demo
      </h1>
      <p className="max-w-md text-gray-600 text-lg sm:text-xl">
        A minimal, modern React app showing off{" "}
        <span className="font-medium text-black">Redux Toolkit</span> and{" "}
        <span className="font-medium text-black">React Router DOM 7</span> with
        real API integration and state management.
      </p>
      <div className="space-x-4 mt-6">
        <Link
          to="/movies/popular"
          className="inline-block bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded text-white transition"
        >
          Explore Movies
        </Link>
        <Link
          to="/movies/favorites"
          className="inline-block bg-yellow-300 hover:bg-yellow-400 px-5 py-2 rounded text-black transition"
        >
          View Favorites
        </Link>
        <div className="mt-12 text-gray-600 text-base">
          Built by{" "}
          <a
            href="https://github.com/German-kos/movies-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline underline-offset-2 transition"
          >
            @German-kos
          </a>
        </div>
      </div>
    </div>
  );
};

Component.displayName = "Home";
