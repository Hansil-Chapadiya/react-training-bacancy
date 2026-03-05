/*

2. **useEffect + cleanup**
    
    Create a component that starts a `setInterval` when it mounts, updates a counter every second, and clears the interval in a `useEffect` cleanup. Unmount the component (e.g. toggle with a button) and confirm the interval stops (no console errors or extra ticks).

*/


import { useEffect } from "react";
import { useState } from "react";

const Counter = () => {

    const [counter, setCount] = useState(0);
    // const incrementSec = () => setCount((counter) => counter + 1);

    useEffect(() => {
        const id = setInterval(() => {
            setCount(count => count + 1);
        }, 1000)

        return () => clearInterval(id);
    }, []);


    return (
        <>
            <p>ASSIGNMENT (TASK-2)</p>
            <p>Interaction Second: {counter}</p>
        </>
    )

};

export default Counter;