import Task from "./Task.jsx";
import {useContext} from "react";
import {TasksContext} from "./contexts/TasksContext.jsx";

const ToDoTask = () => {

    const {tasks, setTasks} = useContext(TasksContext);

    return (
        <div id="tasksList" className="tasks_main">
            {tasks.filter(task => !task.done && !task.isFavorite).map((task, index) => (
                <Task setTasks={setTasks} key={index} task={task}>
                </Task>
            ))}
        </div>
    )
}

export default ToDoTask