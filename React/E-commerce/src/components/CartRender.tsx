import type { CartRenderProp } from "../types/product"

const CartRender = ({ cart, onDeleteToCart, onClearCart }: CartRenderProp) => {
    return (
        <section>
            <h2>Cart Items</h2>
            {cart.map((item) => (
                <article key={item.id} className="product-card">
                    <p className="product-card__title">{item.title}</p>
                    <p className="product-card__price">${item.price}</p>
                    <p>Qty: {item.quantity}</p>
                    <button className="product-card__button" onClick={() => onDeleteToCart(item)}>
                        Remove
                    </button>
                </article>
            ))}
            <button onClick={onClearCart}>Clear Cart</button>
        </section>
    )
}

export default CartRender
