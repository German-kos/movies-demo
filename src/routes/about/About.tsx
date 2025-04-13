export const Component = () => {
  return (
    <div className="flex justify-center items-center px-4 min-h-[calc(100vh-200px)]">
      <p className="max-w-md text-gray-600 text-lg sm:text-xl text-center">
        This app lets you explore popular movies, view details, and save your
        favorites — all in one place. Built with React, Redux, and TypeScript.
      </p>
    </div>
  );
};

Component.displayName = "About";
