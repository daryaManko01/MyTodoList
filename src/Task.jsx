import {useContext, useState} from "react";
import {TasksContext} from "./contexts/TasksContext.jsx";

const Task = ({task}) => {

    const {tasks,  setTasks} = useContext(TasksContext)

    function favoriteTask(index) {
        let newTasks = tasks.map(t =>
            t.name === index.name
                ? { ...t, isFavorite: !t.isFavorite }
                : t
        )

        setTasks(newTasks);
    }

    function doneTask(index) {
        let doneTask = tasks.map(a =>
            a.name === index.name
                ? { ...a, done: !a.done }
                : a
        )

        setTasks(doneTask);
    }

    return (
        <div className="bg_blur">
            <div className="block_2">
                <div className="icon_main">
                    <input
                        className="button_radius_2"
                        type="checkbox"
                        checked={task.done}
                        onChange={() => doneTask(task)}
                    >
                    </input>
                    <div className="text_plan">
                        <span className="main_text color_text">{task.name}</span>
                    </div>
                </div>
                <div>
                    <button
                        className="button_radius"
                        onClick={() => favoriteTask(task)}

                    >
                        {!task.isFavorite
                            ? <img src="src/src/star_1.svg" />
                            : <img src="src/src/star_2.svg" />
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Task;