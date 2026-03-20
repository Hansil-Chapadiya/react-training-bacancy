import type React from "react"
import type { BaseInputProps, RadioField as RadioFieldType } from "../types/form.types"

type Props = RadioFieldType & BaseInputProps

const RadioField = ({
    label,
    id,
    onChange,
    onBlur,
    value,
    type,
    options,
    error,
    categorykey,
    ...input
}: Props) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange({ id, value: event.target.value,categorykey })
    }

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        onBlur({ id, value: event.target.value, categorykey })
    }

    return (
        <div>
            <label htmlFor={id.toString()}>{label}<sup style={{ color: "red" }}>*</sup></label>

            <div id={id.toString()} style={{ display: "flex", justifyContent: "space-between" }}>
                {options.map(({ label, value }, index) => (
                    <div key={index} className="input-field">
                        <input
                            id={`${id}-${index}`}
                            type={type}
                            value={value}
                            {...input}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <label htmlFor={`${id}-${index}`}>{label}</label>
                    </div>
                ))}<br />
                {error && <span style={{ color: "red" }}>{error}</span>}
            </div>
        </div>
    );
}

export default RadioField;
