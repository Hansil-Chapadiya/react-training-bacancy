import type { FiltersType } from "../types/ProductFilters"
const Filters = (
    {
        search,
        setSearch,
        setPage,
        setOrder,
        category,
        setName,
        setSort
    }: FiltersType
) => {
    return (
        <div>
            <input placeholder="Sodh Bhai"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setSearch(e.target.value)
                    setPage(1)
                }}
                value={search} />

            <select onChange={(e) => {
                setOrder(e.target.value)
                setPage(1)
            }}>
                <option value="asc">Asc</option>
                <option value="desc">Desc</option>
            </select>

            <select onChange={(e) => {
                setName(e.target.value)
                setPage(1)
            }}>
                {category.map((c) => (
                    <option key={c} value={c}>{c}</option>
                ))}
            </select>

            <select onChange={(e) => {
                setSort(e.target.value);
                setPage(1);
            }}>
                <option value="price">Price</option>
                <option value="rating">Rating</option>
            </select>

        </div>
    )
}

export default Filters;
