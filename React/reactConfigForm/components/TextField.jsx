const TextField = ({
    label,
    ...input
}) => {
    return (
        <div>
            <label>{label}</label>
            <br />
            <input {...input} />
        </div>
    )
}
export default TextField;