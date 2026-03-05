import { useRef } from "react"

const Increment = () => {

    const incrementStateCount = useRef(0);

    function handleCount() {
        incrementStateCount.current++;
        console.log(incrementStateCount.current);
    }

    return (
        <>
            <p>ASSIGNMNENT(TASK-6)</p>
            {/* <p>Increment Count: {incrementStateCount.current}</p> */}
            <p>Increament Counter Doesn't Render: Go in Console</p>
            <button onClick={handleCount}>Click</button>
        </>

    )
}

export default Increment;