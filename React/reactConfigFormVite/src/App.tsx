import { useState } from 'react'
import './App.css'
import { Inputs } from './inputConfig'
import FormWrapper from './Components/FormWrapper';
import type { EventParams } from './types/form.types';

function App() {

  const [inputs, setInputs] = useState(structuredClone(Inputs));

  const onInputBlur = ({ id, value, checked }: EventParams) => {
    const oldState = structuredClone(inputs);
    const field = oldState[id];

    if (field.type === "email") {
      const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      field.error = emailRegex.test(field.value)
        ? ""
        : "Email is not valid (e.g. a@example.com)";
    }

    if (field.type === "text") {
      if (value.length < 3) {
        field.error = `Invalid field ${field.label} Required more than 3 Characters`;
      } else if (value.length > 15) {
        field.error = `Invalid field ${field.label} Required Less than 15 Characters`;
      } else {
        field.error = "";
      }
    }

    if (field.type === "dropdown" || field.type === "radio") {
      field.error = value ? "" : `Please Select Value ${field.label}`;
    }

    if (field.type === "checkbox") {
      field.error = checked ? "" : `Required ${field.label}`;
    }

    setInputs(oldState);
  }

  const onInputChange = ({ id, value, checked }: EventParams) => {

    const oldState = structuredClone(inputs);
    const field = oldState[id];

    if (field.type === "checkbox") {
      field.checked = !!checked;
    }
    else {
      field.value = value;
    }

    field.error = "";
    setInputs(oldState);

  }

  const onHandleCancel = () => {
    setInputs(structuredClone(Inputs));
  }

  const onHandleSubmit = () => {
    const params: Record<string, string> = {}

    inputs.map((input) => {

      if (input.type === "checkbox") {
        if (input.checked) {
          params[input.name] = input.label;
        }
      }
      else {
        params[input.name] = input.value;
      }

    })

    console.log(params);

  }

  const IsDisabled = () => {
    return inputs.some((input) => {
      if (input.type === "checkbox") {
        return input.required && !input.checked;
      }
      return input.required && !input.value;
    })
  }

  const disableSubmit = IsDisabled();

  return (
    <>
      <FormWrapper inputs={inputs} onInputChange={onInputChange} onHandleCancel={onHandleCancel} onHandleSubmit={onHandleSubmit} disableSubmit={disableSubmit} onInputBlur={onInputBlur} />
    </>
  )
}

export default App
