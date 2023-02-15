import React, { useContext, useState } from "react";
import LayOut from "../components/layout";
import { useTasks } from "../context/TaskContext";

const Home = () => {
  const { task } = useTasks();
  console.log(task)
  const hasTask = task.length === 0;
  return (
    <LayOut>
      {hasTask ? (
        <h2>Dont have task</h2>
      ) : (
        <div>
          {task.map((t) => (
            <p>{t.title}</p>
          ))}
        </div>
      )}
    </LayOut>
  );
};

export default Home;
