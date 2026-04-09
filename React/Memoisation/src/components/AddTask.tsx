import { useForm, } from "react-hook-form";
import type { FormDataType } from "../types/form";
import "../styles/AddTask.css"
import { useTask } from "../hooks/useTask";

const AddTask = () => {

    const { handleTask } = useTask();

    const { register, handleSubmit, formState: { errors } } = useForm<FormDataType>();

    const onSubmit = (data: FormDataType) => {
        const newTask = {
            id: Date.now(),
            completed: false,
            ...data,
        }
        handleTask(newTask);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form-container">
            <div className="form-item">
                <label>Title</label>
                <input {...register('title', {
                    required: {
                        value: true,
                        message: "Enter Title"
                    }
                }
                )} />
                {errors.title && <p>{errors.title.message as string}</p>}
            </div>
            <div className="form-item">
                <label>Description</label>
                <textarea {...register('description', {
                    required: {
                        value: true,
                        message: 'description is required'
                    }
                })}>

                </textarea>
                {errors.description && <p>{errors.description.message as string}</p>}
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    )
}

export default AddTask;
