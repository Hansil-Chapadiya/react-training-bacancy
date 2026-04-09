import CheckBox from "./CheckBox"
import TextField from "./TextField"

const FormWrapper = ({ inputs }) => {
    return (
        <>
            {inputs.map((input, index) => {

                if (input.type === 'checkbox') {
                    return <CheckBox key={index} {...input} />
                }
                return <TextField key={index} {...input} />
            })}
        </>
    )
}

export default FormWrapper;
