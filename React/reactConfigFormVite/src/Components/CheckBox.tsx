import type { BaseInputProps, CheckboxField } from "../types/form.types"

type Props = CheckboxField & BaseInputProps

const CheckBox = ({
    label,
    id,
    onChange,
    onBlur,
    checked,
    value,
    type,
    error,
    ...input
}: Props) => {

    const handleChange = () => {
        onChange({ id, value, checked: !checked })
    }

    const handleBlur = () => {
        onBlur({ id, value, checked })
    }

    return (

        <div>
            <input type={type} id={String(id)} checked={checked} value={value} {...input} onChange={handleChange} onBlur={handleBlur} />
            <label htmlFor={String(id)}>{label}<sup style={{ color: "red" }}>*</sup></label><br />
            {error && <span style={{ color: "red" }}>{error}</span>}
        </div>
    )
}

export default CheckBox
