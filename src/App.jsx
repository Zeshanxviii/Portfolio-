import { useState } from "react";
import Home from "./Pages/home.jsx";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/600.css"; // Optional: weight 600
import "./index.css"; // Your Tailwind CSS file


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center bg-black min-h-screen">
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-[5rem] mt-10 bg-black shadow-cyan-500/30 shadow-2xl rounded-3xl p-5 sm:p-8">
        <Home />
      </div>
    </div>
  );
}

export default App;

