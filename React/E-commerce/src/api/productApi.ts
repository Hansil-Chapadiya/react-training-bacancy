const BASE_URL = "https://dummyjson.com/products";

export const fetchProducts = async (
    SKIP: number,
    PAGE_SIZE: number,
    sort: string,
    order: string,
    search: string,
    name: string,
) => {
    let url;

    if (name && name !== "all") {
        url = `${BASE_URL}/category/${encodeURIComponent(name)}?limit=${PAGE_SIZE}&skip=${SKIP}&sortBy=${sort}&order=${order}`;
    } else if (search) {
        url = `${BASE_URL}/search?q=${encodeURIComponent(search)}&limit=${PAGE_SIZE}&skip=${SKIP}&sortBy=${sort}&order=${order}`;
    } else {
        url = `${BASE_URL}?limit=${PAGE_SIZE}&skip=${SKIP}&sortBy=${sort}&order=${order}`;
    }
    const res = await fetch(url);


    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }

    const data = await res.json();
    return {
        products: data.products,
        total: data.total,
    };
};