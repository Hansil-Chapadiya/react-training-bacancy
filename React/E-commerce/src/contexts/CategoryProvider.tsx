import useCategory from "../hooks/useCategory";
import CategoryContext from "./CategoryContext";

const CategoryProvider = ({ children }: { children: React.ReactNode }) => {
    const { category } = useCategory();

    return (
        <CategoryContext.Provider value={category}>
            {children}
        </CategoryContext.Provider>
    )
}

export default CategoryProvider;
