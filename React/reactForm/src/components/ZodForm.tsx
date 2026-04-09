import { useState } from "react";
import { formSchema } from "./FormSchema";

const ZodForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        country: "",
        gender: "",
        terms: false
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (e: any) => {

        const { name, value, type, checked } = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const result = formSchema.safeParse(formData);

        if (!result.success) {

            console.log(result);
            const fieldErrors: Record<string, string> = {};

            result.error.issues.forEach((err) => {
                fieldErrors[err.path[0] as string] = err.message;
            });

            setErrors(fieldErrors);
            return;
        }

        console.log("Valid Data:", result.data);
        setErrors({});
    };
    return (
        <form onSubmit={handleSubmit}>

            <div>
                <label>Name</label>
                <input name="name" value={formData.name} onChange={handleChange} />
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
            </div>

            <div>
                <label>Email</label>
                <input name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>

            <div>
                <label>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
                {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
            </div>

            <div>
                <label>Country</label>
                <select name="country" value={formData.country} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="india">India</option>
                    <option value="uk">UK</option>
                    <option value="nz">NZ</option>
                </select>
                {errors.country && <p style={{ color: "red" }}>{errors.country}</p>}
            </div>

            <div>
                <label>Gender</label>

                <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={handleChange}
                /> Male

                <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleChange}
                /> Female

                {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}
            </div>

            <div>
                <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                />
                Accept Terms

                {errors.terms && <p style={{ color: "red" }}>{errors.terms}</p>}
            </div>

            <button type="submit">Submit</button>

        </form>
    );
};

export default ZodForm;