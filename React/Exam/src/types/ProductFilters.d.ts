export type FiltersType = {
    search: string
    category: string[]
    setSearch: (value: string) => void
    setPage: (page: number) => void
    setName: (value: string) => void
    setSort: (value: string) => void
    setOrder: (value: string) => void
}