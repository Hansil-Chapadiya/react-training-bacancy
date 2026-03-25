import { useCallback, useState } from "react"

export const useData = () => {

    const [tasksList, setTasksList] = useState<TaskListType>({
        tasks: []
    });
    const [showCompleted, setShowCompleted] = useState(false);

    const handleTask = useCallback((newTask: TaskType) => {
        setTasksList((prev) =>
        (
            {
                tasks: [...prev.tasks, newTask]
            }
        )
        )
    }, []);

    const handleToggele = useCallback((id: number) => {
        setTasksList((prev) => (
            {
                tasks: prev.tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task)
            }
        ))
    }, [])

    const handleCompletedTask = () => {
        setTasksList((prev) => (
            {
                tasks: prev.tasks.filter((task) => task.completed === true)
            }
        ))
    }

    const toggleCompletedView = useCallback(() => {
        setShowCompleted((prev) => !prev);
    }, []);

    const handleDelete = useCallback((id: number) => {
        setTasksList((prev) => ({
            tasks: prev.tasks.filter((task) => task.id !== id)
        }))
    }, []);

    const handleClear = useCallback(() => {
        setTasksList(() => ({
            tasks: []
        }))
    }, []);

    return { tasksList, handleTask, handleDelete, handleToggele, handleCompletedTask, toggleCompletedView, showCompleted, handleClear };

}

export default useData;
