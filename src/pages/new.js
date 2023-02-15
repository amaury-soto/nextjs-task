import React, { useState } from "react";
import LayOut from "../components/layout";
import { useTasks } from "../context/TaskContext";

const TaskFormPage = () => {
    const [task, setTask] = useState({
        title: "",
        description: "",
      });
    
      const handleChange = (e) => {
        const {name, value} = e.target
        setTask({ ...task, [name]: value });
        console.log(e.target.value);
        console.log(e.target.name);
      };
      const { createTask } = useTasks();
    
      const handleSubmit = (e)=>{
       e.preventDefault()
       createTask(task.title, task.description)
       console.log(task)
    
      }
      //console.log(task)
  return (
    <LayOut>
      <hr></hr>
      <div>TaskFormPage</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Write title"
          className="bg-gray-400  focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
          onChange={handleChange}
        />

        <textarea
          rows="2"
          name="description"
          placeholder="Add a description"
          className="bg-gray-400  focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
          onChange={handleChange}
        />
        <button
          className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-md disabled:opacity-40"
          disabled={!task.title}
        >
          Save
        </button>
      </form>
    </LayOut>
  );
};

export default TaskFormPage;
