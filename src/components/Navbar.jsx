import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";

const Navbar = () => {
  const { isLoggedIn} = useContext(LoginContext);

  return (
    <div>
      <div className="navbar bg-base-100 bg-gradient-to-r from-cyan-500 to-blue-500 ...">
        <div className="navbar-start">
          <div className="dropdown">
            
              <label
                tabIndex={0}
                className="btn btn-ghost lg:hidden bg-gradient-to-r from-cyan-500 to-blue-500 ..."
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
           

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-blue-300"
            >
              <Link
                to="/addTasks"
                className="py-2 text-black font-semibold hover:text-white"
              >
                Add Tasks
              </Link>

              <Link
                to="/showTasks"
                className="text-black font-semibold hover:text-white"
              >
                Show Tasks
              </Link>
            </ul>
          </div>
          <button className="btn btn-ghost normal-case text-xl">
            TaskManager
          </button>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-6">
            <Link to="/addTasks" className="text-xl hover:text-white">
              Add Tasks
            </Link>

            <Link to="/showTasks" className="text-xl hover:text-white">
              Show Tasks
            </Link>
          </ul>
        </div>
        {isLoggedIn ? (
          <div className="navbar-end">
            <Link to="/">
              <button className="btn">Login </button>
            </Link>
          </div>
        ) : (
          <div className="navbar-end">
            <Link to="/">
              <button className="btn">Logout</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
