import type { ProductItemProp } from "../types/Product";

const ProductItem = ({ product }: ProductItemProp) => {

    return (
        <div>
            <p>{product?.title}</p>
            <img src={product?.images?.[0]} width={100} height={100} />
            <p>{product?.description}</p>
            <p>{product?.category}</p>
            <p>{product?.price}</p>
            <p>{product?.stock}</p>
            <p>{product?.rating}</p>
        </div>
    )
}

export default ProductItem;
