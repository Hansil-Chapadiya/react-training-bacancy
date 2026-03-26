import { Component } from "react";
import Option from "./Option";

const FormConfig = [
    {
        name: "name",
        label: "Name",
        type: "text",
        required: true,
        pattern: /^[A-Za-z ]{3,20}$/,
        errorMessage: "Name should be 3–20 letters"
    },
    {
        name: "email",
        label: "Email",
        type: "email",
        required: true,
        pattern: /^\S+@\S+\.\S+$/,
        errorMessage: "Enter a valid email"
    },
    {
        name: "password",
        label: "Password",
        type: "password",
        required: true,
        minLength: 8,
        errorMessage: "Password must be at least 8 characters"
    },
    {
        name: "country",
        label: "Country",
        type: "select",
        required: true,
        errorMessage: "Please select a country",
        values: [
            { id: 1, name: "India" },
            { id: 2, name: "UK" },
            { id: 3, name: "NZ" }
        ]
    }
];

class ClassBasedForm extends Component<{}, Record<string, string>> {

    constructor(props: {}) {
        super(props);

        const InitialState: Record<string, string> = {};

        FormConfig.forEach((field) => {
            InitialState[field.name] = "";
        });

        this.state = {
            ...InitialState,
            errors: {}
        };
    }

    validate = () => {

        const errors = {};

        FormConfig.forEach((field) => {

            const value = this.state[field.name];

            if (field.required && !value) {
                errors[field.name] = `${field.label} is required`;
            }

            if (field.pattern && value && !field.pattern.test(value)) {
                errors[field.name] = field.errorMessage;
            }

            if (field.minLength && value.length < field.minLength) {
                errors[field.name] = field.errorMessage;
            }

        });

        this.setState({ errors });

        return Object.keys(errors).length === 0;
    };

    handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!this.validate()) return;

        console.log(this.state);
    };

    render() {

        return (
            <form onSubmit={this.handleSubmit}>

                {FormConfig.map((field) => {

                    const error = this.state.errors?.[field.name];

                    if (field.type === "select") {
                        return (
                            <div key={field.name}>
                                <Option
                                    name={field.name}
                                    label={field.label}
                                    values={field.values}
                                    value={this.state[field.name]}
                                    onChange={this.handleChange}
                                />
                                {error && <p style={{ color: "red" }}>{error}</p>}
                            </div>
                        );
                    }

                    return (
                        <div key={field.name}>
                            <label>{field.label}</label>
                            <input
                                type={field.type}
                                name={field.name}
                                value={this.state[field.name]}
                                onChange={this.handleChange}
                            />
                            {error && <p style={{ color: "red" }}>{error}</p>}
                        </div>
                    );

                })}

                <button type="submit">Submit</button>

            </form>
        );
    }
}

export default ClassBasedForm;