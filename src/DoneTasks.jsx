import Task from "./Task.jsx";
import {useContext} from "react";
import {TasksContext} from "./contexts/TasksContext.jsx";

const DoneTasks = () => {

    const {tasks, setTasks} = useContext(TasksContext);

    return (
        <div className="icon_main">
            <details className="details">
                <summary>
                    <span className="main_text color_text"><strong>Завершенные</strong></span>
                    <span id="doneCount" className="main_text">
                        {tasks.filter(task => task.done && !task.isFavorite).length}

                    </span>
                </summary>
                <div>
                    {
                        tasks.filter(task => task.done && !task.isFavorite).map((task, index) => (
                            <Task setTasks={setTasks} key={index} task={task}>
                            </Task>
                        ))
                    }
                </div>
            </details>
        </div>
    )
}

export default DoneTasks;
