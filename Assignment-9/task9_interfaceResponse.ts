/*

Design an interface for an API response object
Create a function that accepts this interface as a parameter
Extend the interface and reuse it

*/

interface APIResponse{

    status : string,
    array :  object[]

}

interface Response extends APIResponse{
    bool : boolean
}

function accepts(res : Response)
{
    console.log(res.status);
    console.log(res.array);
    console.log(res.bool)
}


const response : Response = {
    status : "success",
    array : [{
        id:1,
        college : "Hello"
    }],
    bool : true
} 

accepts(response);
console.dir(response);