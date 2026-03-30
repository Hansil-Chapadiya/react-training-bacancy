// import type { CategoriesType } from "./types/form.types"

import type { CategoriesType } from "./types/form.types"

export const Categories: CategoriesType = {

    personal_details: {
        name: "Personal Details",
        inputs: [
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
        ]
    },
    location: {
        name: "Location",
        inputs: [
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
        ]
    },
    terms: {
        name: "Terms",
        inputs: [
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
        ]
    }

}