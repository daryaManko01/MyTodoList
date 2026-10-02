import {useEffect, useState} from "react";
import useTasksLocalStorage from "./useTasksLocalStorage.js";

const useTasks = () => {
    const {
        saveTasks,
        initialTasks,
    } = useTasksLocalStorage()

    const [tasks, setTasks] = useState(initialTasks ?? [{
        id: 1,
        name: "Посмотреть сериал",
        done: false,
        isFavorite: false
    },
        {
            id: 1,
            name: "Погладить кота",
            done: true,
            isFavorite: false,
        }
    ])


    const [table, setTable] = useState([{name: "Имя", price: "100"}])

    useEffect(() => {
        saveTasks(tasks)
    }, [tasks])

    return {
        tasks,
        setTasks
    }
}

export default useTasks;