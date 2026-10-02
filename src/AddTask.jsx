import {useContext, useRef, useState} from "react";
import {TasksContext} from "./contexts/TasksContext.jsx";

const AddTask = () => {

    const {tasks, setTasks} = useContext(TasksContext)

    //const [value, setValue] = useState("");

    const input = useRef(null);

    function addNewTask() {

        const inputValue = input.current

        const newTask = {
            id: Date.now(),
            name: inputValue.value,
            done: false,
            isFavorite: false
        };

        setTasks([
            ...tasks,
            newTask
        ]);

        inputValue.value = "";
        //setValue("");

    }

    return (
        <>
            <div className="bg">
                <div className="icon_main">
                    <button
                        id="addNewTaskButton"
                        className="button"
                        onClick={addNewTask}
                    ><img src="src/src/plus.svg"/>
                    </button>

                    <input
                        id="newTaskName"
                        className="input"
                        type="text"
                        name="text"
                        placeholder="Добавить задачу"
                        ref={input}

                    />
                </div>
            </div>
        </>
    )
}

export default AddTask;