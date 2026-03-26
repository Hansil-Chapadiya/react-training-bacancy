import type { ProductItemProp } from "../types/product";

const ProductCard = ({ product, onAddToCart }: ProductItemProp) => {
    return (
        <article className="product-card">
            <img className="product-card__image" src={product.thumbnail} alt={product.title} />
            <h3 className="product-card__title">{product.title}</h3>
            <p className="product-card__price">${product.price}</p>
            <button className="product-card__button" onClick={() => onAddToCart(product)}>
                Add to cart
            </button>
        </article>
    );
};

export default ProductCard;