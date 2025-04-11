import { Link, Outlet } from "react-router";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/movies">Movies</Link> |{" "}
        <Link to="/favorites">Favorites</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default App;
