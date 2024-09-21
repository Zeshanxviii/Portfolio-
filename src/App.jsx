import { useState } from "react";
import Home from "./Pages/home.jsx";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/600.css"; // Optional: weight 600
import "./index.css"; // Your Tailwind CSS file

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center bg-black h-screen">
      <div className=" mx-[5rem] mt-[5rem] bg-black shadow-cyan-500/30 shadow-2xl rounded-3xl">
        <Home />
      </div>
    </div>
  );
}

export default App;
