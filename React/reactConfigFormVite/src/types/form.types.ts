export type BaseField = {
    name: string
    label: string
    value: string
    required: boolean
    disabled: boolean
    readOnly?: boolean
    error: string
}


export type TextField = BaseField & {
    type: "text" | "email"
    placeholder: string
    minLength?: number
    maxLength?: number
    pattern?: string
}

export type Option = {
    label: string
    value: string
}

export type DropdownField = BaseField & {
    type: "dropdown"
    options: Option[]
}

export type RadioField = BaseField & {
    type: "radio"
    options: Option[]
}

export type CheckboxField = BaseField & {
    type: "checkbox"
    checked: boolean
}

export type EventParams = {
    id: number,
    value: string,
    checked?: boolean,
}

export type BaseInputProps = {
    id: number
    onChange: (params: EventParams) => void
    onBlur: (params: EventParams) => void
}


export type InputField =
    | TextField
    | DropdownField
    | RadioField
    | CheckboxField


type CatogoryKey = "personal_details" | "location" | "terms"

export type CategoriesType = {
    [K in CatogoryKey]: {
        name: string,
        inputs: InputField[]
    }
}


/*

export type CategoriesType = {
  [key: string]: {
    name: string;
    inputs: InputField[];
  };
};

*/