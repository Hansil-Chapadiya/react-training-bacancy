import { useEffect, useState } from "react";

const WindowWidth = () => {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {

        window.addEventListener("resize", ()=>{
            setWidth(getWindowSize());
        })

        return () => {
            window.removeEventListener("resize", ()=>{
                setWidth(getWindowSize());
            })
        }
    }, [])

    return (

        <>
            <p>ASSIGNMENT (TASK-5)</p>
            <p>Width = {width}</p>
        </>

    )

}

function getWindowSize() {
    return window.innerWidth;
}

export default WindowWidth;