import useCart from "../hooks/useCart"
import { CartContext } from "./CartContext"

const CartProvider = ({ children }: { children: React.ReactNode }) => {

    const { cart, handleAddToCart, handleDeleteToCart, handleClearCart } = useCart();

    return (
        <CartContext.Provider value={{ cart, handleAddToCart, handleDeleteToCart, handleClearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
