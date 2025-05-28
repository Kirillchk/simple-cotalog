import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './router.jsx'
import { CartProvider } from './store/cartContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <Router />
    </CartProvider>
  </StrictMode>,
)
