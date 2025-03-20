import { useEffect, useReducer } from "react";
import { ID, Time } from "../utilities";

const useStorage = key => {

    const stored = localStorage.getItem(key);
    const initValue = stored ? JSON.parse(stored) : []; 

    const [storage, dispatch] = useReducer((storage, { type, task }) => {

        if(type === 'addTask') {
            const time = new Time();
            return [...storage, { ...task, id: ID(), date: time.full() }];
        }

        if(type === 'deleteTask') {
            const auxList = storage.filter(({ id }) => id !== task.id);
            return auxList;
        }

        if(type === 'updateTask') {
            const time = new Time();
            const auxList = storage.map(sTask => sTask.id === task.id ? { ...task, date: time.full() } : sTask);
            return auxList;
        }

        if(type === 'onCheck') {
            const auxList = storage.map(stask => {
                if (stask.id === task.id) {
                  const isCompleted = !stask.completed;
                  return {
                    ...stask,
                    completed: isCompleted,
                    subtasks: stask.subtasks.map((subtask) => ({
                      ...subtask,
                      completed: isCompleted,
                    })),
                  };
                }

                return stask;
              });
              
            return auxList;
        }

    }, initValue);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(storage));
    }, [storage]);
    
    return [ storage, dispatch ];
};

export { useStorage };