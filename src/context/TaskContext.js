import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";
//create context
export const TaskContent = createContext();

//create this as hook, maybe
export const useTasks = () => {
  return useContext(TaskContent);
};

export const TaskProvider = ({ children }) => {
  const [task, setTask] = useState([
    { id: "1", title: "task1", description: "hola mundo" },
  ]);

  const createTask = (title, description) => {
    setTask([...task, { title, description, id: uuid() }]);
  };

  return (
    <TaskContent.Provider value={{ task, createTask }}>
      {children}
    </TaskContent.Provider>
  );
};
