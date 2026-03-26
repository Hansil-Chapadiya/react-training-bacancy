import Pagination from "../components/Pagination";
import ProductCard from "../components/ProductCard";
import CartRender from "../components/CartRender";
import Filters from "../components/FilterComponent";
import { useProductContext } from "../contexts/ProductContext";
import "../styles/ProductCard.css";
import { useCategoryContext } from "../contexts/CategoryContext";
import { useCartContext } from "../contexts/CartContext";

const Home = () => {
    const { products, total, loading, error, page, setPage, order, setOrder, sort, setSortBy, search, setSearch, name, setName, PAGE_SIZE } = useProductContext();
    const category = useCategoryContext();
    const {cart, handleAddToCart, handleDeleteToCart, handleClearCart} = useCartContext();

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>
    if (products.length === 0) return <p>No products found.</p>

    const totalPages = Math.ceil(total / PAGE_SIZE);
    return (
        <div>
            <Filters
                search={search}
                setSearch={setSearch}
                setPage={setPage}
                setOrder={setOrder}
                category={category}
                name={name}
                setName={setName}
                setSortBy={setSortBy}
                sort={sort}
                order={order}
            />
            {cart.length > 0 && <CartRender cart={cart} onDeleteToCart={handleDeleteToCart} onClearCart={handleClearCart} />}
            <div className="products-grid">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
                ))}
            </div>
            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </div>
    )
}

export default Home;
