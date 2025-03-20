import { createContext, useState } from "react";

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
    const [category, setCategory] = useState('todo');
     const categories = ['trabajo', 'personal', 'estudio', 'todo'];

    return (
        <CategoryContext.Provider value={{ category, setCategory, categories }}>
            {children}
        </CategoryContext.Provider>
    );
};

export {CategoryContext, CategoryProvider};