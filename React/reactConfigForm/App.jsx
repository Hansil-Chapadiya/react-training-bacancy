import { useState } from "react";
import FormWrapper from "./components/FormWrapper";
import { Inputs } from "./inputsConfig"
const App = () => {
    const [inputs, setInputs] = useState(
        structuredClone(Inputs)
    );

    return (
        <div>
            <label>Hello World</label>
            <FormWrapper inputs={inputs} />
        </div>
    )
}

export default App;