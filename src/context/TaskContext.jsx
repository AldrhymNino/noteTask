import { createContext, useState } from "react";

const TaskContext = createContext();

const template = {
    id: '',
    taskName: '',
    description: '',
    completed: false,
    subtasks: [],
    opened: false,
    date: '',
    category: 'personal'
};

const TaskProvider = ({ children }) => {
    const [task, setTask] = useState(template);

    const reset = () => {
        setTask(template);
    }


    return (
        <TaskContext.Provider value={{ task, setTask, reset}}>
            { children }
        </TaskContext.Provider>
    );
};

export { TaskContext, TaskProvider };