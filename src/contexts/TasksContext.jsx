import {createContext} from "react";
import useTasks from "../hooks/useTasks.js";

export const TasksContext = createContext({})

export const TasksProvider = (props) => {
    const {
        children
    } = props

   const {
       tasks,
       setTasks
   } = useTasks()


    return (
        <TasksContext.Provider value={{tasks, setTasks}}>
            {children}
        </TasksContext.Provider>
    )
}





