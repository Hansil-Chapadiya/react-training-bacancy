import type { CartItemType, ProductType } from "./product"

export type CartContextType = {
    cart: CartItemType[]
    handleDeleteToCart: (cart: ProductType) => void
    handleAddToCart: (cart: ProductType) => void
    handleClearCart: () => void
}