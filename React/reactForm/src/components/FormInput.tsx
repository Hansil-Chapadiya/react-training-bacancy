import './FormInput.css'

interface FormInputProps {
    id: number;
    type: string;
    name: string;
    label: string;
    placeholder?: string;
    value: string;
    errors?: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = (props: FormInputProps) => {
    const { id, label, errors, onChange, value, ...inputProps } = props;
    return (
        <div>
            <label>{props.label}</label><br />
            <input className="input-field" {...inputProps} value={value} onChange={onChange} />

            {errors && <p className='error-msg'>
                {errors}
            </p>}
        </div>
    )
}

export default FormInput
