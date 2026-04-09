
const input = [

    { id: 3, tags: ["a", "b"] },
    { id: 1, tags: ["b", "c"] },
    { id: 2, tags: ["a", "c", "d"] },
    { id: 2, tags: ["d", "e"] }

]
console.log(

    input.reduce((acc, obj) => {
        obj.tags.map((ele) => {
            // acc[ele] ? ((!acc[ele].find(x => x == obj.id)) ? acc[ele].push(obj.id) : null) : [obj.id];

            if (acc[ele]) {
               // acc[ele] = [...(new Set([...acc[ele], obj.id]))];
               //  destructing arr and add id then covert it into set then destructuring set and convert into array
               // temp = acc[ele].filter(x => x == obj.id)
               if (!acc[ele].find(x => x == obj.id)) {
                   acc[ele].push(obj.id);
               }
           }
           else {
               acc[ele] = [obj.id];
           }

        })
        return acc;
    }, {})

)


/*
    Output:

const output = {

a : [2,3],
b : [1,3],
c : [1,2],
d : [2],
e : [2]

}
*/





