import { useState } from "react";
import FormInput from "./FormInput";

type ForValues = {
  username: string;
  email: string;
  birthdate: string;
  password: string;
  confirmPassword: string;
};

const CustomForm = () => {

  const [values, setValues] = useState<ForValues>({
    username: "",
    email: "",
    birthdate: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const validate = () => {

    const newErrors: Record<string, string> = {};

    if (!values.username) {
      newErrors.username = "Username is required";
    }

    if (!values.email.includes("@")) {
      newErrors.email = "Invalid email";
    }

    if (values.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (values.password !== values.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    console.log(values);
  };

  const inputs = [
    { id: 1, name: "username", type: "text", label: "Username" },
    { id: 2, name: "email", type: "email", label: "Email" },
    { id: 3, name: "birthdate", type: "date", label: "Birth Date" },
    { id: 4, name: "password", type: "password", label: "Password" },
    { id: 5, name: "confirmPassword", type: "password", label: "Confirm Password" }
  ];

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>

        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name as keyof ForValues]}
            onChange={onChange}
            errors={errors[input.name]}
          />
        ))}

        <button type="submit">Submit</button>

      </form>
    </div>
  );
};

export default CustomForm;