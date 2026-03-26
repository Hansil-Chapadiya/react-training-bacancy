import type { Dispatch, SetStateAction } from "react"

export type FiltersType = {
    search: string
    category: string[]
    setSearch: (value: string) => void
    name: string
    setPage: Dispatch<SetStateAction<number>>
    setName: (value: string) => void
    setSortBy: (value: string) => void
    setOrder: (value: string) => void
    sort: string
    order: string
}