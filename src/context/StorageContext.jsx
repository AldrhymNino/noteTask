import { createContext } from "react";
import { useStorage } from "../hooks/useStorage";

const StorageContext = createContext();

const StorageProvider = ({ children }) => {
    const [storage, dispatch] = useStorage("Task");

    return (
        <StorageContext.Provider value={{ storage, dispatch }}>
            { children }
        </StorageContext.Provider>
    );
};

export { StorageContext, StorageProvider };