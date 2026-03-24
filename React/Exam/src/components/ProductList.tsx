import type { ProductListProp, ProductType } from "../types/Product"
import ProductItem from "./ProductItem"

const ProductList = ({ data, handleDelete }: ProductListProp) => {
    return (
        <div>
            {data.map((product: ProductType) => (
                <div key={product.id}>
                    <ProductItem  product={product} />
                    <button key={`delete-${product.id}`} onClick={() => handleDelete(product.id)}>
                        Delete
                    </button>
                </div>

            ))}
        </div>
    )
}

export default ProductList
