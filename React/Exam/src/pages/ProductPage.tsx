import Form from "../components/Form";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";
import ProductList from "../components/ProductList";
import { useProducts } from "../hooks/useProducts";

const ProductPage = () => {
    const {
        search,
        setSearch,
        page,
        setPage,
        setOrder,
        setSort,
        setName,
        category,
        data,
        total, 
        handleDelete,
        onSubmit
    } = useProducts();

    const totalPages = Math.ceil(total / 5)
    return (
        <div>
            <Filters search={search} setSearch={setSearch} setOrder={setOrder} setPage={setPage} setSort={setSort} setName={setName} category={category} />

            <ProductList data={data} handleDelete={handleDelete} />

            <Form category={category} onSubmit={onSubmit} />

            {!search && (
                <Pagination setPage={setPage} page={page} totalPages={totalPages} />
            )}

        </div>
    )
}

export default ProductPage;
