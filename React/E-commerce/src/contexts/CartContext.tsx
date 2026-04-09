import { createContext, useContext } from "react";
import type { CartContextType } from "../types/cartContexttype";

export const CartContext = createContext<CartContextType | null>(null);

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCartContext must be used within Cart Provider");
    return context;
};