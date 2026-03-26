const BASE_URL = "https://dummyjson.com/products"

export const getAllCategory = async () => {
    const res = await fetch(`${BASE_URL}/category-list`);

    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }
    return await res.json();
}