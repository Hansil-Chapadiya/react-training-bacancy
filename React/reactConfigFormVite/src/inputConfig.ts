import type { InputField } from "./types/form.types";

export const Inputs: InputField[] = [
    {
        type: "text",
        name: "full_name",
        label: "Full Name",
        placeholder: "Enter your full name",
        value: "",
        required: true,
        readOnly: false,
        disabled: false,
        minLength: 2,
        maxLength: 50,
        error: ""
    },
    {
        type: "email",
        name: "email",
        label: "Email Address",
        placeholder: "Enter your email",
        value: "",
        required: true,
        readOnly: false,
        disabled: false,
        pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
        error: ""
    },
    {
        type: "dropdown",
        name: "country",
        label: "Select Country",
        value: "",
        required: true,
        disabled: false,
        options: [
            { label: "Select Country", value: "" },
            { label: "India", value: "IN" },
            { label: "United States", value: "US" },
            { label: "United Kingdom", value: "UK" }
        ],
        error: ""
    },
    {
        type: "radio",
        name: "gender",
        label: "Gender",
        value: "",
        required: true,
        disabled: false,
        options: [
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
            { label: "Other", value: "other" }
        ],
        error: ""
    },
    {
        type: "checkbox",
        name: "terms",
        label: "I agree to the Terms & Conditions",
        checked: false,
        required: true,
        readOnly: false,
        disabled: false,
        value: "I agree to the Terms & Conditions",
        error: ""
    },
];