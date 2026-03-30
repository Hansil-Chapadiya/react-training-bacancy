import CheckBox from "./CheckBox"
import TextField from "./TextField"
import "./FormInput.css";
import RadioField from "./RadioField";
import DropDownField from "./DropDownField";
import type React from "react";
import type { InputField, EventParams } from "../types/form.types";

type WrapperParams = {
    inputs: InputField[],
    onInputBlur: (params: EventParams) => void
    onInputChange: (params: EventParams) => void
    onHandleSubmit: () => void
    onHandleCancel: () => void
    disableSubmit: boolean
}

const FormWrapper = ({ inputs, onInputChange, onHandleSubmit, onHandleCancel, disableSubmit, onInputBlur }: WrapperParams) => {

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        onHandleSubmit();
    }

    return (
        <form className="app" onSubmit={handleSubmit}>
            {
                Object.keys(inputs).map((key) => {
                    const data = inputs[key];
                    return (
                        <fieldset key={`category-${key}`}>
                            <legend>{data.name}</legend>
                            {data.inputs.map((input: InputField, index: number) => {
                                if (input.type === 'checkbox') {
                                    return (
                                        <CheckBox categorykey={key} key={index} id={index} onChange={onInputChange} onBlur={onInputBlur} {...input} />
                                    )
                                }
                                if (input.type === "radio") {
                                    return (
                                        <RadioField categorykey={key} key={index} id={index} onChange={onInputChange} onBlur={onInputBlur} {...input} />
                                    )
                                }

                                if (input.type === "dropdown") {
                                    return (
                                        <DropDownField categorykey={key} key={index} id={index} onChange={onInputChange} onBlur={onInputBlur} {...input} />
                                    )
                                }

                                return <TextField categorykey={key} key={index} id={index} onChange={onInputChange} onBlur={onInputBlur} {...input} />
                            })}
                        </fieldset>
                    )
                })

            }

            <div>
                <br />
                <button className="btn btn-cancel" onClick={onHandleCancel}>Cancel</button>
                <button className={disableSubmit ? "btn btn-disable" : "btn btn-submit"} disabled={disableSubmit}>Submit</button>
                <br />
            </div>

        </form>
    )
}

export default FormWrapper
