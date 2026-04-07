function formate(num: number) : string;
function formate(date : Date) : string;
function formate(value : number | Date) : string {

    if (typeof value === "number") return value.toString();
    else if(typeof value === "object") return value.toDateString();
    else return "";

}

const d: Date = new Date();
console.log(formate(d.getDate()));
console.log(formate(134));
// console.log(formate("")); No overload matches this call.
