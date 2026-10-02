import FooterMenu from "./FooterMenu.jsx";
import "./App.css";
import AddTask from "./AddTask.jsx";
import ToDoTasks from "./ToDoTask.jsx";
import DoneTasks from "./DoneTasks.jsx";
import SelectedTasks from "./SelectedTasks.jsx";

import {TasksContext} from "./contexts/TasksContext.jsx";
import {TasksProvider} from "./contexts/TasksContext.jsx";

const App = () => {

    return (
        <TasksProvider>
            <>
                <>
                    <FooterMenu>
                    </FooterMenu>

                    <AddTask>
                    </AddTask>

                    <ToDoTasks>
                    </ToDoTasks>

                    <DoneTasks>
                    </DoneTasks>

                    <SelectedTasks>
                    </SelectedTasks>

                </>
            </>
        </TasksProvider>
    )
}

export default App


