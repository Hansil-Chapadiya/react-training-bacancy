import ProductContext from './ProductContext'
import useProducts from '../hooks/useProducts'
import { useState } from 'react'
import type { CartItemType } from '../types/product'

const ProductProvider = ({ children }: { children: React.ReactNode }) => {
    const {
        products,
        total,
        loading,
        error,
        setSortBy,
        setOrder,
        setPage,
        page,
        order,
        sort,
        search,
        setSearch,
        name,
        setName,
        PAGE_SIZE,
    } = useProducts();
    const [cart, setCart] = useState<CartItemType[]>([]);
    return (
        <ProductContext.Provider
            value={{
                products,
                cart,
                total,
                loading,
                error,
                page,
                order,
                sort,
                search,
                name,
                setPage,
                setCart,
                setName,
                setSearch,
                setOrder,
                setSortBy,
                PAGE_SIZE,
            }}
        >
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider
