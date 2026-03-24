import { useForm } from "react-hook-form";
import type { ProductItemProp} from "../types/Product";
import { productFormConfig } from "../ProductConfig/productConfig";

const Form = ({ category, onSubmit }: ProductItemProp) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // 🔥 inject category dynamically
    const updatedConfig = productFormConfig.map((field) =>
        field.name === "category"
            ? { ...field, options: category }
            : field
    );

    

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {updatedConfig.map((input) => {
                return (
                    <div key={input.id} style={{ marginBottom: "10px" }}>
                        <label>{input.label}</label>

                        {/* 🔥 TEXTAREA */}
                        {input.type === "textarea" && (
                            <textarea
                                {...register(input.name, { required: input.required })}
                                placeholder={input.placeholder}
                            />
                        )}

                        {/* 🔥 SELECT */}
                        {input.type === "select" && (
                            <select {...register(input.name)}>
                                <option value="">Select category</option>
                                {input.options?.map((opt: string, index: number) => (
                                    <option key={index} value={opt}>
                                        {opt}
                                    </option>
                                ))}
                            </select>
                        )}

                        {/* 🔥 INPUT */}
                        {input.type !== "textarea" && input.type !== "select" && (
                            <input
                                type={input.type}
                                placeholder={input.placeholder}
                                defaultValue={input.defaultValue}
                                {...register(input.name, { required: input.required })}
                            />
                        )}

                        {/* 🔥 ERROR */}
                        {errors[input.name] && (
                            <p style={{ color: "red" }}>
                                {input.label} is required
                            </p>
                        )}
                    </div>
                );
            })}

            <button type="submit">Create Product</button>
        </form>
    );
};

export default Form;