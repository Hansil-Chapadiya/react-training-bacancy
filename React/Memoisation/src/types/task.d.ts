type TaskType = {
    id: number
    title: string
    description: string
    completed: boolean
}

type TaskListType = {
    tasks: TaskType[]
}

type TaskListTypeProps = {
    tasksList: TaskListType
    handleDelete: (id: number) => void
    handleToggle: (id: number) => void
    handleCompletedTask?: () => void
    toggleCompletedView: () => void
    handleTask?: (newTask: TaskType) => void
    handleClear: () => void
    showCompleted: boolean

}

type TaskContextType = {
    tasksList: TaskListType;
    showCompleted: boolean;
    handleTask: (task: TaskType) => void;
    handleDelete: (id: number) => void;
    handleToggle: (id: number) => void;
    toggleCompletedView: () => void;
    handleClear: () => void;
};

type HandleTaskType = {
    handleTask: (task: TaskType) => void
}