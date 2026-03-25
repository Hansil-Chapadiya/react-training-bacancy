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
        <div>
            Show Completed Task :
            <input type="checkbox" onChange={toggleCompletedView} />
            {filteredTasks.map((task) => (
                <div key={task.id} className="taskItem">
                    <input type="checkbox" checked={task.completed} onChange={() => handleToggle(task.id)} />
                    <h3 style={{
                        textDecoration: task.completed ? "line-through" : "none"
                    }}>{task.title}</h3>
                    <p style={{
                        textDecoration: task.completed ? "line-through" : "none"
                    }}>{task.description}</p>
                    <button onClick={() => { handleDelete(task.id) }}>Delete</button>
                </div>
            ))}
            <button type="button" onClick={handleClear}>Clear</button>
        </div>
    )
}

export default React.memo(RenderTasks);
