import "./FormInput.css"
import type { TextField as TextFieldType, BaseInputProps } from "../types/form.types";

type Props = TextFieldType & BaseInputProps

const TextField = ({
    label,
    id,
    onChange,
    onBlur,
    value,
    type,
    error,
    categorykey,
    ...input
}: Props) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        onChange({ id, value: event.target.value, categorykey });
    }

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
        onBlur({ id, value: event.target.value, categorykey })
    }

    return (
        <div>
            <label htmlFor={id.toString()}>{label}<sup style={{ color: "red" }}>*</sup></label> <br />
            <input id={id.toString()} className="input-field" {...input} value={value} onChange={handleChange} onBlur={handleBlur} /><br />
            {error && <span style={{ color: "red" }}>{error}</span>}
        </div>
    )
}

export default TextField
