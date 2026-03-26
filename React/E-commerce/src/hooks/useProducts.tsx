import { useEffect, useState } from "react";
import { fetchProducts } from "../api/productApi";
import type { ProductType } from "../types/product";
import { useDebounce } from "./useDebounce";
import { useUtilContext } from "../contexts/UitlContext";

const useProducts = () => {

    const [products, setProducts] = useState<ProductType[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [page, setPage] = useState<number>(1);
    const [order, setOrder] = useState<string>("asc");
    const [sort, setSortBy] = useState<string>("price");
    const [search, setSearch] = useState<string>("");
    const [name, setName] = useState<string>("all");
    const debounceSearch = useDebounce(search, 500);

    const { setLoading, setError, error, loading } = useUtilContext();

    const PAGE_SIZE = 9;
    const SKIP = (page - 1) * PAGE_SIZE;


    useEffect(() => {
        const loadProduct = async () => {
            setLoading(true);
            setError("");
            try {
                const data = await fetchProducts(SKIP, PAGE_SIZE, sort, order, debounceSearch, name);
                setProducts(data.products);
                setTotal(data.total);
            } catch (err) {
                setError("Failed to fetch data");
            } finally {
                setLoading(false);
            }
        }

        loadProduct();
    }, [SKIP, PAGE_SIZE, sort, order, debounceSearch, name]);

    return {
        products,
        total,
        loading,
        error,
        page,
        setPage,
        order,
        setOrder,
        sort,
        setSortBy,
        search,
        setSearch,
        name,
        setName,
        PAGE_SIZE,
    };
}

export default useProducts;
