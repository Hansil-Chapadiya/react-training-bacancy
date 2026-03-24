export type ProductType = {
    id: number
    title: string
    images: string[]
    description: string
    price: number
    stock: number,
    rating: number,
    category: string
}

export type ProductItemProp = {
    product?: ProductType
    category?: string[]
    onSubmit : (product : ProductType) => void
}

export type ProductListProp = {
    data: ProductType[]
    handleDelete : (id: number) => void
}
