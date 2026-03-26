interface OptionProps {
    name: string;
    label: string;
    values: { id: number; name: string }[];
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Option = ({ name, label, values, value, onChange }: OptionProps) => {

    return (
        <div>
            <label>{label}</label>
            <br />

            <select name={name} value={value} onChange={onChange}>
                <option value="">Select</option>

                {values.map((v) => (
                    <option key={v.id} value={v.name}>
                        {v.name}
                    </option>
                ))}

            </select>
        </div>
    );
};

export default Option;