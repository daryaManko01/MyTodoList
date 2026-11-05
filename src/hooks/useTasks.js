import {useEffect, useState} from "react";
import useTasksLocalStorage from "./useTasksLocalStorage.js";

const useTasks = () => {
    const {
        saveTasks,
        getInitialTasks,
    } = useTasksLocalStorage()

    //We use lazy initialization via a callback
    const [tasks, setTasks] = useState(() => {
        return getInitialTasks() ??
            [{
                id: 1,
                name: "Посмотреть сериал",
                done: false,
                isFavorite: false
            },
                {
                    id: 2,
                    name: "Погладить кота",
                    done: true,
                    isFavorite: false,
                }
            ];
    });

    const [table, setTable] = useState([{name: "Имя", price: "100"}])

    useEffect(() => {
        saveTasks(tasks)
    }, [tasks])


    const addTask = (name) => {
        const newTask = {
            id: crypto.randomUUID(),
            name: name,
            done: false,
            isFavorite: false
        };
        setTasks(prevTasks => [...prevTasks, newTask]);
    };

    const toggleFavorite = (id) => {
        setTasks(prevTasks =>
            prevTasks.map(t => t.id === id ? {...t, isFavorite: !t.isFavorite} : t)
        );
    };

    const deleteTask = (id) => {
        setTasks(prevTasks => prevTasks.filter(t => t.id !== id));
    };

    // Дополнительное действие для редактирования текста
    const editTask = (id, newName) => {
        setTasks(prevTasks =>
            prevTasks.map(t => t.id === id ? {...t, name: newName} : t)
        );
    };
    const toggleDone = (id) => {
        setTasks(prevTasks =>
            prevTasks.map(t => t.id === id ? {...t, done: !t.done} : t)
        );
    };

    return {
        tasks,
        setTasks,
        addTask,
        toggleDone,
        toggleFavorite,
        deleteTask,
        editTask
    }
}

export default useTasks;