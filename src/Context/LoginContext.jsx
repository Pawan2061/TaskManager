import React, { Children, useState } from "react";
import { createContext } from "react";

export const LoginContext = createContext(null);

const LoginContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);


  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <LoginContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, tasks, setTasks, text, setText ,deleteTask}}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
