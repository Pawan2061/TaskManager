import React from "react";

import { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";

const CreateTask = () => {
  const { tasks, setTasks } = useContext(LoginContext);
  const { text, setText } = useContext(LoginContext);

  return (
    <div className=" justify-center text-center  bg-base-200 py-28 min-h-screen">
      <div className="font-semibold text-xl  py-4">
        Write the tasks you want to do today..
      </div>
      <div className="form-control  max-w-xs  mx-auto ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("hi");
            console.log(tasks);
            setText("");
            setTasks((tasks) => [...tasks, text]);
          }}
        >
          <label className="label">
            <span className="label-text text-xl">What is your next task?</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={text}
            onChange={(e) => {
              setText([e.target.value]);
            }}
          />
          <button className="btn btn-ghost my-2" type="submit">
            Add to tasks
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
