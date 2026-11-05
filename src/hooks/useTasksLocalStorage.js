const useTasksLocalStorage = () => {

    const saveTasks = (tasks) => {
        try {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        } catch (error) {
            console.error("Ошибка записи в localStorage:", error);
        }
    }

    //Converted it into a function that will be called lazily, only once
    const getInitialTasks = () => {
        try {
            const initialTasks = localStorage.getItem("tasks");
            if (!initialTasks) return null;

            const data = JSON.parse(initialTasks);

            const isValid = Array.isArray(data) && data.every(item =>
                item && typeof item === "object" && "id" in item && "name" in item
            );

            return isValid ? data : null;
        } catch (error) {
            console.error("Ошибка чтения/парсинга задач:", error);
            return null;
        }
    }

    return {
        saveTasks,
        getInitialTasks //Returning a function instead of a ready-made value
    }
}

export default useTasksLocalStorage;