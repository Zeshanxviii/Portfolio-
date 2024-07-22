import { useState } from 'react'
import Home from './components/home'
import '@fontsource/poppins'; // Defaults to weight 400
import '@fontsource/poppins/600.css'; // Optional: weight 600
import './index.css'; // Your Tailwind CSS file



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-Mine-143 h-screen' >
    <Home/>
    </div>
  )
}

export default App
