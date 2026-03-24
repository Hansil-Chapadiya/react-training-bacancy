import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";
import type { ProductType } from "../types/Product";
import type { Category } from "../types/Category";

export const useProducts = () => {

    const baseUrl = "https://dummyjson.com/products";

    const [data, setData] = useState<ProductType[]>([]);
    const [page, setPage] = useState<number>(1);
    const [total, setTotal] = useState<number>(0);
    const [search, setSearch] = useState<string>("");
    const [category, setCategory] = useState<Category[]>([]);
    const [name, setName] = useState<string>("");
    const [order, setOrder] = useState<string>('asc');
    const [sort, setSort] = useState<string>("price");

    const limit = 5;
    const skip = (page - 1) * limit;

    let url;


    const debounceSearch = useDebounce(search, 500);
    if (debounceSearch) {
        url = `${baseUrl}/search?q=${debounceSearch}&limit=${limit}&skip=${skip}&sortBy=${sort}&order=${order}`;
    } else if (name) {
        url = `${baseUrl}/category/${name}?limit=${limit}&skip=${skip}&sortBy=${sort}&order=${order}`;
    } else {
        url = `${baseUrl}?limit=${limit}&skip=${skip}&sortBy=${sort}&order=${order}`;
    }


    const getAllCategory = async () => {
        const res = await fetch(`${baseUrl}/category-list`);
        const result = await res.json();
        result.unshift("-- select option --")
        // console.log(result);
        setCategory(result);
    }

    const fetchProducts = async () => {
        const res = await fetch(url);
        const result = await res.json();
        console.log(result);
        // console.log(result);
        const data = result.products;
        const localProduct = JSON.parse(localStorage.getItem("products") || "[]");
        setData([...data, ...localProduct]);
        setTotal(result.total);
    };

    const handleDelete = (id: number) => {
        const existing = JSON.parse(localStorage.getItem("products") || "[]");

        const updated = existing.filter((item: any) => item.id !== id);

        localStorage.setItem("products", JSON.stringify(updated));

        // 🔥 remove from UI
        setData((prev) => prev.filter((item) => item.id !== id));
    };

    const onSubmit = (data: any) => {
        const newProduct = {
            id: Number(Date.now()),
            ...data,
            images: [data.images], // string → array
        };

        console.log("New Product:", newProduct);

        // ✅ save to localStorage
        const existing = JSON.parse(localStorage.getItem("products") || "[]");
        localStorage.setItem("products", JSON.stringify([...existing, newProduct]));

        setData((prev) => [...prev, newProduct]);

    };

    useEffect(() => {
        fetchProducts();
    }, [debounceSearch, page, order, name, sort]);

    useEffect(() => {
        getAllCategory();
    }, [])

    useEffect(() => {
        if (page > Math.ceil(total / limit)) {
            setPage(1);
        }
    }, [total]);

    return {
        data,
        page,
        total,
        search,
        category,
        name,
        order,
        sort,
        setPage,
        setSearch,
        setName,
        setOrder,
        setSort,
        handleDelete,
        onSubmit
    }
}

