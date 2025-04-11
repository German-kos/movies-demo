import { Outlet } from "react-router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="px-4 py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
