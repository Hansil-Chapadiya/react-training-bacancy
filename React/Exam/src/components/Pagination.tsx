import type { PaginationType } from "../types/Pagination";

const Pagination = ({ page, setPage, totalPages }: PaginationType) => {


    return (
        <div>
            <button disabled={page === 1} onClick={() => setPage((p: number) => p - 1)}>{"<=="}</button>
            <span>{page} of {totalPages}</span>
            <button disabled={page === totalPages} onClick={() => setPage((p: number) => p + 1)}>{"==>"}</button>
        </div>
    )
}

export default Pagination;
