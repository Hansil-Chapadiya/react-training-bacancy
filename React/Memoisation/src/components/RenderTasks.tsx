import React, { useMemo } from "react";
import "../styles/RenderTasks.css"
import { useTask } from "../hooks/useTask";

const RenderTasks = () => {

    const { tasksList, handleDelete, handleToggle, toggleCompletedView, showCompleted, handleClear } = useTask();

    const filteredTasks = useMemo(() => {
        return showCompleted
            ? tasksList.tasks.filter((task) => task.completed)
            : tasksList.tasks
    }, [tasksList, showCompleted]);
    return (
        <div className="taskContainer">
            Show Completed Task :
            <input type="checkbox" onChange={toggleCompletedView} />
            {filteredTasks.map((task) => (
                <div key={task.id} className="taskItem">

                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => handleToggle(task.id)}
                    />

                    <div className="taskContent">
                        <h3 className={task.completed ? "completed" : ""}>
                            {task.title}
                        </h3>
                        <p className={task.completed ? "completed" : ""}>
                            {task.description}
                        </p>
                    </div>

                    <button
                        className="deleteBtn"
                        onClick={() => handleDelete(task.id)}
                    >
                        Delete
                    </button>
                </div>
            ))}

            <button className="clearBtn" onClick={handleClear}>
                Clear All
            </button>
        </div>
    )
}

export default React.memo(RenderTasks);
