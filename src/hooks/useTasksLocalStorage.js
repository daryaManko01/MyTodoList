const useTasksLocalStorage = () => {
    const initialTasks = localStorage.getItem("tasks")

    const saveTasks = (tasks) => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    return {
        saveTasks,
        initialTasks: initialTasks ? JSON.parse(initialTasks) : null
    }
}

export default useTasksLocalStorage;