import { useState , useEffect } from "react";
import Home from "./Pages/home.jsx";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/600.css"; // Optional: weight 600
import "./index.css"; // Your Tailwind CSS file
import Contact from "./components/contact.jsx";

function App() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    setLight(mediaQuery.matches);

    const handleChange = (e) => {
      setLight(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  return (
    <div className={light ? "dark" : ""}>
      <div className="flex justify-center bg-slate-100 dark:bg-black min-h-screen">
        <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-[5rem] mt-10 bg-white dark:bg-black shadow-cyan-500/50 shadow-2xl rounded-3xl p-5 sm:p-8">
          <Home />
          </div>
        </div>
      </div>
  );
}

export default App;
