

function chunkArray(arr, size) {
    let temp = []

    return arr.reduce((acc, ele, index) => {

        if (temp.length < size) {
            temp.push(ele);
        }
        else {
            acc.push(temp);
            temp = [ele];
        }

        if (index == arr.length - 1) acc.push([ele]);

        return acc;
    }, [])

}
/* 
function chunkArray(arr, size) {

    return arr.reduce((acc, ele, index)=>{

        if(index%size != 0)
        {
            acc[acc.length - 1].push(ele);
        }
        else{
            acc.push([ele]);
        }

        return acc;
    },[])
    
} */

/* function chunkArray(arr,size){

    return arr.reduce((acc, ele, index)=>{

        if(index%size == 0)
        {
            acc.push(arr.slice(index, index+size));
        }

        return acc;

    },[])

}
 */



console.log(chunkArray([1, 3, 4, 5, 7], 2));