import {useContext, useState, useRef, useEffect} from "react";
import {TasksContext} from "./contexts/TasksContext.jsx";

const Task = ({task}) => {

    //Retrieve ready-to-use action functions from the context
    const {toggleDone, toggleFavorite, deleteTask, editTask} = useContext(TasksContext)

    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(task.name);
    const editInputRef = useRef(null);

    //Autofocus the input when editing begins
    useEffect(() => {
        if (isEditing && editInputRef.current) {
            editInputRef.current.focus();
        }
    }, [isEditing]);

    //Function for saving the edited text
    function saveEdit() {
        const trimmed = editText.trim();
        if (!trimmed) {
            deleteTask(task.id); //If the text was completely erased, delete the task by ID
            return;
        }
        editTask(task.id, trimmed); //Working by ID
        setIsEditing(false);
    }


    //Handler for saving upon pressing Enter
    function handleKeyDown(e) {
        if (e.key === "Enter") saveEdit();
        if (e.key === "Escape") {
            setEditText(task.name); //Cancel changes
            setIsEditing(false);
        }
    }

    return (
        <div className="bg_blur">
            <div className="block_2">
                <div className="icon_main">
                    <input
                        className="button_radius_2"
                        type="checkbox"
                        checked={task.done}
                        onChange={() => toggleDone(task.id)}
                    />
                    <div className="text_plan">

                        {isEditing ? (
                            <input
                                ref={editInputRef}
                                type="text"
                                className="input"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                onBlur={saveEdit}
                                onKeyDown={handleKeyDown}
                            />
                        ) : (
                            <span className="main_text color_text">{task.name}</span>
                        )}
                    </div>
                </div>
                <div className="button_radius_main">
                    <button
                        className="button_radius"
                        onClick={() => isEditing ? saveEdit() : setIsEditing(true)}
                    >
                        {isEditing ? "💾" : "✏️"}
                    </button>

                    <button
                        className="button_radius"
                        onClick={() => toggleFavorite(task.id)}
                    >
                        {!task.isFavorite
                            ? <img src="src/src/star_1.svg"/>
                            : <img src="src/src/star_2.svg"/>
                        }
                    </button>

                    <button
                        className="button_radius"
                        onClick={() => deleteTask(task.id)}
                    >
                        🗑️
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Task;