import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useTasks } from "../context/TaskContext";

const LayOut = ({ children }) => {
    const router = useRouter()
    const {task} = useTasks()
    console.log(task)
  return (
    <div className="h-screen bg-gray-600 text-white">
      <header className="flex bg-gray-800 text-white px-28 py-5 items-center">
        <Link href="/">
          <h1 className="font-bold text-lg">AppTask</h1>
        </Link>
        <span className="ml-2 text-gray-400 font-bold">{`${task.length} Task`}</span>
        <div className="flex-grow text-right">
          <button className="bg-green-500 hover:bg-green-400 px-5 py-2 rounded-md inline-flex items-center"
            onClick={()=>router.push('/new')}
          
          >
            <AiOutlinePlus className="mr-2" />
            Add Task
          </button>
        </div>
      </header>
      <main className="px-28 ">{children}</main>
    </div>
  );
};

export default LayOut;
