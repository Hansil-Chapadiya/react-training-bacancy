// import { a } from "./Task1_useStateNameAge"
import { useReducer } from "react";

const reducer = (state: number, action: string) => {
    switch (action) {
        case "increament":
            return state + 1;

        case "decrement":
            return state - 1;

        default:
            return state
    }
}

const init = (initialCount: number) => {
    // console.log(a);
    return initialCount;
}

const Incdec = () => {

    const [state, dispatch] = useReducer(reducer, 0, init);

    return (
        <>
            <p>State Count Reducer</p>
            <p>
                Count : {state};
            </p>
            <button onClick={() => dispatch("increament")}>
                +
            </button>
            <button onClick={() => dispatch("decrement")}>
                -
            </button>
        </>

    )

}

export default Incdec;