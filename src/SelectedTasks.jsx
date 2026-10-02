import Task from "./Task.jsx";
import {useContext} from "react";
import {TasksContext} from "./contexts/TasksContext";

const SelectedTasks = () => {

    const {tasks} = useContext(TasksContext);

    return (
        <div
            className="icon_main"
        >
            <details className="details">
                <summary>
                    <span className="main_text color_text"><strong>Избранные</strong></span>
                    <span id="favoriteCount" className="main_text">{tasks.filter(task => task.isFavorite).length}</span>
                </summary>
                <div id="selectedTasks" className="task_done">
                    {
                        tasks.filter(task => task.isFavorite).map((task, index)  => (
                            <Task key={index} task={task}>
                            </Task>
                        ))
                    }
                </div>
            </details>

        </div>
    )
}

export default SelectedTasks;
