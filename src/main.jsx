import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductContextProvider from './context/ProductContextProvider.jsx'
import { BrowserRouter as Router } from 'react-router-dom'  // Import BrowserRouter

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>  {/* Wrap your app and context provider with Router */}
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </Router>
  </StrictMode>,
)
