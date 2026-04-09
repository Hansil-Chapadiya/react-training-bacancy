import { useForm } from "react-hook-form";
import MaleView from "./MaleView";
import FemaleView from "./FemaleView";

const BasicForm = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const values = watch("firstName");
    // const allField = watch();
    const gender = watch("gender");
    const password = watch("password");
    // console.log("Watching lastName: " + allField.lastName);

    return (
        <>
            <form onSubmit={handleSubmit((data) => console.log(data))}>
                <div>

                    <label>FirstName</label>
                    <input className={errors.firstName ? 'field-error' : ''} {...register('firstName',
                        {
                            required: {
                                value: true,
                                message: "Required"
                            },
                            minLength:
                            {
                                value: 3,
                                message: 'Minimum length should be 3'
                            },
                            maxLength:
                            {
                                value: 10,
                                message: 'Maximum length should be 10'
                            }

                        }
                    )} />
                    {errors.firstName && <p className="error-msg">{errors.firstName.message as string}</p>}
                </div>

                <label>LastName</label>
                <input className={errors.lastName ? 'field-error' : ''} {...register('lastName',
                    {
                        required: {
                            value: true,
                            message: "Required"
                        },
                        minLength:
                        {
                            value: 3,
                            message: 'Minimum length should be 3'
                        },
                        maxLength:
                        {
                            value: 10,
                            message: 'Maximum length should be 10'
                        }

                    }
                )} />
                {errors.lastName && <p className="error-msg">{errors.lastName.message as string}</p>}

                <div>
                    <label>Phone No: </label>
                    <input type="text" className={errors.phoneno ? 'field-error' : ''} {...register('phoneno', {
                        required: {
                            value: true,
                            message: "Required"
                        },
                        pattern: {
                            // value: /^[0-9]{10}/,
                            value: /^[6-9]\d{9}$/,
                            message: "number should be 10"

                        }
                    })} />
                    {errors.phoneno && <p className="error-msg">{errors.phoneno.message as string}</p>}
                </div>
                <div>
                    <select {...register("gender")}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>

                    {
                        gender === "male" ? <MaleView /> : <FemaleView />
                    }
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" className={errors.password?.message ? 'field-error' : ''} {...register('password',
                        {
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                message: "Password should contain 8+ chars, upper, lower, digit, special Characters"
                            }
                        }
                    )} />
                    {errors.password && <p className="error-msg">{errors.password.message as string}</p>}
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" className={errors.confirmPassword ? 'field-error' : ''} {...register('confirmPassword',
                        {
                            validate: (value) => {
                                return value === password || "Password do not match"
                            }
                        }
                    )} />
                    {errors.confirmPassword && <p className="error-msg">{errors.confirmPassword?.message as string}</p>}
                </div>
                {/* <input type="submit" /> */}
                <button type="submit">Submit</button>
            </form>
            <div>

                <p> Watching FirstName</p>
                <p>{values}</p>

            </div>
        </>
    )

}

export default BasicForm;



// 1) useForm hook
// 2) custom form
// 3) classbased component form
// 4) config driven form
// 5) zod validation
// 6) Hoc for auth & custom hook for debounce
// 7) section vise rendering