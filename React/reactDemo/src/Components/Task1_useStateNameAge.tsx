/*

1. **useState**
    
    Add a new component that has two pieces of state: `name` (string) and `age` (number). Render them and add buttons to increment age and update name from an input.

*/

import { useState } from "react";


const StateComponent = () => {

    const [name, setName] = useState("Hansil");
    const [age, setAge] = useState(12);
    const handleUpdate = (val: number) => setAge(val + 1);
    const handleName = (name: string) => setName(name);

    return (
        <>
            <p>ASSIGNMENT (TASK-1)</p>
            <p>Current Name : {name}</p>
            <p>Current Age : {age}</p>

            <button onClick={() => { handleUpdate(age) }}>
                Update Age
            </button>
            <br />
            <input type="text" value={name} onChange={(e) => { handleName(e.target.value) }} />
        </>
    );

};

// const a = 12;
// export const a = () => {
//     const [ab,_]= useState(12);
// }
export default StateComponent;