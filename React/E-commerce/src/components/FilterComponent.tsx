import type { FiltersType } from "../types/filter"
const Filters = (
    {
        search,
        name,
        sort,
        order,
        setSearch,
        setPage,
        setOrder,
        category,
        setName,
        setSortBy
    }: FiltersType
) => {
    return (
        <div>
            <input placeholder="Search products"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setSearch(e.target.value)
                    setPage(1)
                }}
                value={search} />

            <select onChange={(e) => {
                setOrder(e.target.value)
                setPage(1)
            }} value={order}>
                <option value="asc">Asc</option>
                <option value="desc">Desc</option>
            </select>

            <select onChange={(e) => {
                setName(e.target.value)
                setPage(1)
            }} value={name}>
                <option value="all">All Categories</option>
                {category.map((c) => (
                    <option key={c} value={c}>{c}</option>
                ))}
            </select>

            <select onChange={(e) => {
                setSortBy(e.target.value);
                setPage(1);
            }} value={sort}>
                <option value="price">Price</option>
                <option value="rating">Rating</option>
            </select>

        </div>
    )
}

export default Filters;