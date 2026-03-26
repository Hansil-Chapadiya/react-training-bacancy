import { createContext, useContext } from "react";
import type { ProductContextType } from "../types/product";

const ProductContext = createContext<ProductContextType | null>(null);

export const useProductContext = () => {
    const context = useContext(ProductContext);

    if (!context) throw new Error("useProductContext must be used within ProductProvider")
    return context;
}

export default ProductContext;
