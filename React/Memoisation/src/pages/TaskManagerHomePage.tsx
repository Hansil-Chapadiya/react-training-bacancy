import AddTask from "../components/AddTask";
import RenderTasks from "../components/RenderTasks";

const TaskManagerHomePage = () => {

    // const { handleTask, tasksList, handleDelete, handleToggle, toggleCompletedView, showCompleted, handleClear } = useData();
    return (
        <div>
            <AddTask />
            <RenderTasks />
        </div>
    )
}

export default TaskManagerHomePage;
