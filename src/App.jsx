import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateTask from "./components/createTask";
import DisplayTask from "./components/displayTask";
import Login from "./components/Login";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/home" Component={Home} />
          <Route path="/addTasks" Component={CreateTask} />
          <Route path="/showTasks" Component={DisplayTask} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
