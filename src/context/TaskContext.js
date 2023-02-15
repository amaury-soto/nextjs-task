import { createContext, useContext, useState } from "react";

//create context
export const TaskContent = createContext();

//create this as hook, maybe
export const useTasks = () => {
 return useContext(TaskContent);
  
};

export const TaskProvider = ({ children }) => {
    const [task, setTask] = useState([{id:'1', title:'task1', description:'hola mundo'}])



  return (
    <TaskContent.Provider value={{task}}>{children}</TaskContent.Provider>
  );
};
