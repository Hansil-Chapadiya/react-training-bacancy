/*
1. Create a generic function called wrapInArray that accepts any value and returns it inside an
array.
*/

function wrapInArray<T>(t: T) {
    return [t];
}

console.log(wrapInArray<(number | string)[]>([10, "str"]));


/*
Create a generic interface PaginatedResponse<T> with properties:
items: T[]
total: number
*/

interface PaginatedResponse<T> {
    items: T[]
    total: number
}

function totalValue(items: number[]) { 
    return items.reduce((acc:number, val:number) => { 
        acc += val 
        return acc;
    }, 0); 
}

const response: PaginatedResponse<number> = {
    items: [10, 12, 14],
    total: totalValue([10, 12, 14])
} 

console.log(response);