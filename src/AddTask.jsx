import {useContext, useRef, useState} from "react";
import {TasksContext} from "./contexts/TasksContext.jsx";

const AddTask = () => {

    const {addTask} = useContext(TasksContext)
    const input = useRef(null);

    function addNewTask(e) {

        if (e) e.preventDefault(); //Added e (event) to prevent the page from reloading when the form is submitted via the Enter key
        const inputValue = input.current

        //Trim whitespace from the edges
        const trimmedValue = inputValue.value.trim();

        //Check that the string is not empty after removing whitespace
        if (!trimmedValue) {
            return;
        }

        //Invoking a pre-defined centralized action
        addTask(trimmedValue);
        inputValue.value = "";
    }

    return (
        <>
            <div className="bg">
                <form className="icon_main" onSubmit={addNewTask}>

                    <label htmlFor="newTaskName" className="visually-hidden">
                        Текст новой задачи
                    </label>

                    <button
                        type="submit"
                        id="addNewTaskButton"
                        className="button"
                        onClick={addNewTask}
                        aria-label="Добавить задачу"

                    ><img src="src/src/plus.svg" alt="" aria-hidden="true"/>
                    </button>

                    <input
                        id="newTaskName"
                        className="input"
                        type="text"
                        name="text"
                        placeholder="Добавить задачу"
                        ref={input}

                    />
                </form>
            </div>
        </>
    )
}

export default AddTask;