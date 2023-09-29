import React, { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";

const DisplayTask = () => {
  const { tasks,deleteTask } = useContext(LoginContext);

  const handleDelete=(index)=>{
    deleteTask(index)
  }
  console.log(tasks);
  return (
    <div className="bg-base-200 min-h-screen justify-center text-center py-14">
      <div className="lg:text-4xl md:text-2xl text-xl">
        Tasks which are created are shown below
      </div>
      <div>
        {tasks.map((task, index) => (
          <div className="rounded-xl py-6  border mx-52">
            <div id={index}>{task}</div>
            <button className="btn btn-square btn-outline" onClick={()=>handleDelete(index)} >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayTask;
