import './App.css'
import CartProvider from './contexts/CartProvider'
import CategoryProvider from './contexts/CategoryProvider'
import Home from './pages/Home'

function App() {

  return (
    <>
      <CategoryProvider>
        <CartProvider>
          <Home />
        </CartProvider>
      </CategoryProvider>
    </>
  )
}

export default App
