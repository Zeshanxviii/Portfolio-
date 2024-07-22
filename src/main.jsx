import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@fontsource/poppins'; // Defaults to weight 400
import '@fontsource/poppins/600.css'; // Optional: weight 600
import './index.css'; // Your Tailwind CSS file


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
