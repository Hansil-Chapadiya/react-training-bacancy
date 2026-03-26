import type { Dispatch, SetStateAction } from "react"
import type { Category } from "./Category"

export type ProductType = {
    id: number
    title: string
    images: string[]
    description: string
    price: number
    stock: number,
    rating: number,
    category: string,
    thumbnail: string
}

export type CartItemType = ProductType & {
    quantity: number
}

export type ProductItemProp = {
    product: ProductType
    category?: string[]
    onAddToCart: (product: ProductType) => void
}

export type CartRenderProp = {
    cart: CartItemType[]
    onDeleteToCart : (product : ProductType) => void
    onClearCart : () => void
}

export type ProductListProp = {
    data: ProductType[]
    handleDelete: (id: number) => void
}

export type ProductContextType = {
    products: ProductType[]
    cart: CartItemType[]
    total: number
    loading: boolean
    error: string
    page: number
    order: string
    sort: string
    search: string
    name: string
    setPage: Dispatch<SetStateAction<number>>
    setCart: Dispatch<SetStateAction<CartItemType[]>>
    setName: (value: string) => void
    setSearch: (value: string) => void
    setSortBy: (value: string) => void
    setOrder: (value: string) => void
    PAGE_SIZE : number
}

