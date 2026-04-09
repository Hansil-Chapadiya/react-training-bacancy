
import { createContext, useContext } from 'react';
import type { Category } from '../types/Category';

const CategoryContext = createContext<Category[] | null>(null);

export const useCategoryContext = () => {
    const context = useContext(CategoryContext);

    if (!context) throw new Error("useCategoryContext must be used within Category Provider");
    return context;
}

export default CategoryContext;
