export const Footer = () => {
  return (
    <footer className="bg-white mt-auto py-6 border-gray-300 border-t text-gray-500 text-sm text-center">
      <p>
        Made using <span className="font-medium text-blue-600">React</span>,{" "}
        <span className="font-medium text-purple-600">Redux Toolkit</span>, and{" "}
        <span className="font-medium text-pink-500">Tailwind CSS</span>.
      </p>
      <p className="mt-1">
        View source on{" "}
        <a
          href="https://github.com/German-kos/movies-demo"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 underline transition"
        >
          GitHub
        </a>
        .
      </p>
    </footer>
  );
};
