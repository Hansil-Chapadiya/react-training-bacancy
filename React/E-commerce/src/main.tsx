import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ProductProvider from './contexts/ProductProvider.tsx'
import UtilProvider from './contexts/UtilProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <UtilProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </UtilProvider>
  </StrictMode>,
)
