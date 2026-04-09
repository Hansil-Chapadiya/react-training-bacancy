import { createContext, useCallback, useState } from "react";

export const TaskContext = createContext<TaskContextType | null>(null);

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {

    const [tasksList, setTasksList] = useState<TaskListType>({
        tasks: []
    });
    const [showCompleted, setShowCompleted] = useState(false);

    const handleTask = useCallback((newTask: TaskType) => {
        setTasksList((prev) => ({
                tasks: [...prev.tasks, newTask]
            }
        )
        )
    }, []);

    const handleToggle = useCallback((id: number) => {
        setTasksList((prev) => ({
                tasks: prev.tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task)
            }
        ))
    }, [])

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

    return (
        <TaskContext.Provider value={{ tasksList, handleTask, handleDelete, handleToggle, toggleCompletedView, showCompleted, handleClear }}>
            {children}
        </TaskContext.Provider>
    )
}