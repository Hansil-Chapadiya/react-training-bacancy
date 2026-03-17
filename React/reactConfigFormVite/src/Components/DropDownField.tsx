import type React from "react";
import type { DropdownField as DropdownFieldType, BaseInputProps } from "../types/form.types";
import "./FormInput.css";

type Props = DropdownFieldType & BaseInputProps

const DropDownField = ({
    label,
    id,
    onChange,
    onBlur,
    options,
    error,
}: Props) => {

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange({ id, value: event.target.value })
    }

    const handleBlur = (event: React.FocusEvent<HTMLSelectElement>) => {
        onBlur({ id, value: event.target.value })
    }

    return (
        <div>
            <label htmlFor={id.toString()}>{label}<sup style={{ color: "red" }}>*</sup></label>

            <select id={id.toString()} style={{ display: "flex", justifyContent: "space-between" }} onChange={handleChange} onBlur={handleBlur} className="input-field">
                {options.map(({ label, value }, index) => (
                    <option key={index} id={`${id}-${index}`} value={value}>
                        {label}
                    </option>
                ))}
            </select>
            {error && <span style={{ color: "red" }}>{error}</span>}
        </div>
    )
}

export default DropDownField;
