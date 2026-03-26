import { useEffect, useState } from "react";
import type { Category } from "../types/Category";
import { useUtilContext } from "../contexts/UitlContext";
import { getAllCategory } from "../api/categoryAPI";

const useCategory = () => {

    const [category, setCategories] = useState<Category[]>([]);
    const { setError } = useUtilContext();
    useEffect(() => {
        const loadCategories = async () => {
            try {
                const data = await getAllCategory();
                setCategories(data);
            } catch {
                setError("Failed to fetch data");
            }
        };

        loadCategories();
    }, []);
    return { category };
}

export default useCategory;
