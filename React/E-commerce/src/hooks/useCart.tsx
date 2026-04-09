import { useState } from "react";
import type { CartItemType, ProductType } from "../types/product";

const useCart = () => {
    const [cart, setCart] = useState<CartItemType[]>([]);

    const handleAddToCart = (product: ProductType) => {
        setCart((prev) => {
            const existingItem = prev.find((item) => item.id === product.id);

            if (existingItem) {
                return prev.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
                );
            }

            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const handleDeleteToCart = (product: ProductType) => {
        setCart((prev) => {
            const existingItem = prev.find((item) => item.id === product.id);

            if (!existingItem) {
                return prev;
            }

            if (existingItem.quantity === 1) {
                return prev.filter((item) => item.id !== product.id);
            }

            return prev.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item,
            );
        });
    }

    const handleClearCart = () => {
        setCart([]);
    }

    return {
        cart, handleAddToCart, handleDeleteToCart, handleClearCart
    }

}

export default useCart
